import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';
import { trackFormSubmission, trackConversion, trackPhoneClick } from '@/lib/analytics';
import { cn } from '@/lib/utils';

interface OrderFormProps {
  source?: string;
  className?: string;
}

const OrderForm = ({ source = 'website', className }: OrderFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    city: '',
    date: '',
    time: '',
    description: '',
    consent: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      toast.error('Musisz wyrazić zgodę na przetwarzanie danych osobowych');
      return;
    }
    
    setIsSubmitting(true);

    try {
      const leadData = {
        name: formData.name,
        phone: formData.phone,
        address: formData.address,
        city: formData.city || null,
        preferred_date: formData.date || null,
        preferred_time: formData.time || null,
        description: formData.description || null,
      };

      const leadId = crypto.randomUUID();
      console.log('Submitting lead data:', leadData);

      const { error } = await supabase
        .from('leads')
        .insert({ ...leadData, id: leadId, source } as any);

      if (error) {
        console.error('Database error:', error);
        toast.error('Wystąpił błąd podczas zapisywania. Spróbuj ponownie.');
        return;
      }

      console.log('Lead created successfully, id:', leadId);

      const sendNotification = async (retryCount = 0) => {
        try {
          await supabase.functions.invoke('send-lead-gleb', {
            body: {
              leadId,
              name: formData.name,
              phone: formData.phone,
              address: formData.address,
              city: formData.city,
              preferred_date: formData.date,
              preferred_time: formData.time,
              description: formData.description,
              source
            }
          });
          console.log('Telegram notification sent successfully');
        } catch (telegramError) {
          console.error(`Failed to send Telegram notification (attempt ${retryCount + 1}):`, telegramError);
          if (retryCount < 1) {
            setTimeout(() => sendNotification(retryCount + 1), 2000);
          }
        }
      };
      
      sendNotification();

      trackFormSubmission({
        preferred_date: formData.date,
        preferred_time: formData.time
      });

      trackConversion();

      toast.success('Dziękujemy! Skontaktujemy się z Tobą w ciągu 30 minut.');
      
      setFormData({
        name: '',
        phone: '',
        address: '',
        city: '',
        date: '',
        time: '',
        description: '',
        consent: false
      });

    } catch (error) {
      console.error('Submission error:', error);
      toast.error('Wystąpił błąd podczas wysyłania formularza.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="zamow" className={cn("py-16 scroll-mt-28", className || "gradient-hero")}>
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Zamów pranie
            </h2>
            <p className="text-lg text-muted-foreground">
              Wypełnij formularz, a wkrótce się z Tobą skontaktujemy
            </p>
          </div>

          <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-heading text-center text-foreground">
                Dane kontaktowe
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form lang="pl" onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name">Imię i nazwisko *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    required
                    className="border-lemon-200"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Telefon *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    required
                    placeholder="+48 123 456 789"
                    className="border-lemon-200"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Adres *</Label>
                  <Textarea
                    id="address"
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    required
                    placeholder="Ulica, numer, kod pocztowy"
                    className="border-lemon-200"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="city">Miasto *</Label>
                  <Input
                    id="city"
                    value={formData.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    required
                    placeholder="np. Wrocław, Opole"
                    className="border-lemon-200"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Dodatkowe informacje</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    placeholder="Dodatkowe uwagi, szczegóły..."
                    className="border-lemon-200"
                  />
                </div>

                <div className="flex items-start space-x-2 p-4 bg-lemon-50 rounded-lg">
                  <Checkbox
                    id="consent"
                    checked={formData.consent}
                    onCheckedChange={(checked) => handleInputChange('consent', checked as boolean)}
                  />
                  <Label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed">
                    Wyrażam zgodę na przetwarzanie moich danych osobowych w celu realizacji zamówienia
                    oraz kontaktu związanego z usługą. *
                  </Label>
                </div>

                <div className="text-center">
                  <Button
                    type="submit"
                    size="lg"
                    className="hover:opacity-90 hover-lift px-12 w-full sm:w-auto"
                    disabled={isSubmitting}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    {isSubmitting ? 'Wysyłanie...' : 'Wyślij zamówienie'}
                  </Button>
                  <p className="text-sm text-muted-foreground mt-2">
                    Wkrótce się z Tobą skontaktujemy!
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>

          <div className="mt-8 grid md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-white/80 rounded-lg">
              <Phone className="w-8 h-8 mx-auto mb-2 text-mint-600" />
              <div className="font-semibold">Telefon</div>
              <div className="text-sm text-muted-foreground">
                <a href="tel:+48662117886" onClick={() => trackPhoneClick('order_form')} className="font-medium">+48 662 117 886</a>
              </div>
            </div>
            <div className="text-center p-4 bg-white/80 rounded-lg">
              <Clock className="w-8 h-8 mx-auto mb-2 text-mint-600" />
              <div className="font-semibold">Godziny pracy</div>
              <div className="text-sm text-muted-foreground">Pn-Nd: 8:00-20:00</div>
            </div>
            <div className="text-center p-4 bg-white/80 rounded-lg">
              <MapPin className="w-8 h-8 mx-auto mb-2 text-mint-600" />
              <div className="font-semibold">Obszar działania</div>
              <div className="text-sm text-muted-foreground">Wrocław (20 km)</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderForm;
