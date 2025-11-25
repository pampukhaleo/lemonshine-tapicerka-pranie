import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';
import { trackFormSubmission, trackConversion, trackPhoneClick } from '@/lib/analytics';

const OrderForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    service: '',
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
      // Prepare data for database
      const leadData = {
        name: formData.name,
        phone: formData.phone,
        address: formData.address,
        service: formData.service,
        preferred_date: formData.date || null,
        preferred_time: formData.time || null,
        description: formData.description || null,
      };

      console.log('Submitting lead data:', leadData);

      // Insert lead into Supabase and get the created lead back
      const { data: createdLead, error } = await supabase
        .from('leads')
        .insert(leadData)
        .select()
        .single();

      if (error) {
        console.error('Database error:', error);
        toast.error('Wystąpił błąd podczas zapisywania. Spróbuj ponownie.');
        return;
      }

      console.log('Lead created successfully:', createdLead);

      // Send Telegram notification (don't block user if it fails)
      const sendNotification = async (retryCount = 0) => {
        try {
          await supabase.functions.invoke('send-lead-gleb', {
            body: {
              leadId: createdLead.id,
              name: formData.name,
              phone: formData.phone,
              address: formData.address,
              service: formData.service,
              preferred_date: formData.date,
              preferred_time: formData.time,
              description: formData.description,
              source: 'website'
            }
          });
          console.log('Telegram notification sent successfully');
        } catch (telegramError) {
          console.error(`Failed to send Telegram notification (attempt ${retryCount + 1}):`, telegramError);
          
          // Retry once after 2 seconds if first attempt fails
          if (retryCount < 1) {
            setTimeout(() => sendNotification(retryCount + 1), 2000);
          }
        }
      };
      
      sendNotification();

      // Track successful form submission for Google Analytics
      trackFormSubmission({
        service: formData.service,
        preferred_date: formData.date,
        preferred_time: formData.time
      });

      // Track Google Ads conversion
      trackConversion();

      toast.success('Dziękujemy! Skontaktujemy się z Tobą w ciągu 30 minut.');
      
      // Reset form
      setFormData({
        name: '',
        phone: '',
        address: '',
        service: '',
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
    <section id="zamow" className="py-16 gradient-hero scroll-mt-28">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Zamów Pranie Tapicerki
            </h2>
            <p className="text-xl text-muted-foreground">
              Wypełnik formularz, a wktórce się z Tobą kontaktujemy
            </p>
          </div>

          <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-heading text-center text-foreground">
                Szczegóły zamówienia
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form lang="pl" onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground flex items-center">
                      <Phone className="w-5 h-5 mr-2 text-mint-600" />
                      Dane kontaktowe
                    </h3>

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
                        placeholder="Ulica, numer, kod pocztowy, miasto"
                        className="border-lemon-200"
                      />
                    </div>
                  </div>

                  {/* Service Details */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground flex items-center">
                      <MapPin className="w-5 h-5 mr-2 text-mint-600" />
                      Szczegóły usługi
                    </h3>

                    <div className="space-y-2">
                      <Label htmlFor="service">Rodzaj usługi *</Label>
                      <Select onValueChange={(value) => handleInputChange('service', value)} value={formData.service}>
                        <SelectTrigger className="border-lemon-200">
                          <SelectValue placeholder="Wybierz usługę" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="kanapa">Pranie kanapy</SelectItem>
                          <SelectItem value="fotel">Pranie fotela</SelectItem>
                          <SelectItem value="dywan">Pranie dywanu</SelectItem>
                          <SelectItem value="materac">Pranie materaca</SelectItem>
                          <SelectItem value="zestaw">Czyszczenie kompleksowe</SelectItem>
                          <SelectItem value="inne">Inne</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="date">Preferowana data</Label>
                        <Input
                          id="date"
                          type="date"
                          value={formData.date}
                          onChange={(e) => handleInputChange('date', e.target.value)}
                          className="border-lemon-200"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="time">Preferowana godzina</Label>
                        <Select onValueChange={(value) => handleInputChange('time', value)} value={formData.time}>
                          <SelectTrigger className="border-lemon-200">
                            <SelectValue placeholder="Wybierz" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="9-12">9:00 - 12:00</SelectItem>
                            <SelectItem value="12-15">12:00 - 15:00</SelectItem>
                            <SelectItem value="15-18">15:00 - 18:00</SelectItem>
                            <SelectItem value="flexible">Elastycznie</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">Dodatkowe informacje</Label>
                      <Textarea
                        id="description"
                        value={formData.description}
                        onChange={(e) => handleInputChange('description', e.target.value)}
                        placeholder="Opisz rodzaj plam, materiał tapicerki, dodatkowe uwagi..."
                        className="border-lemon-200"
                      />
                    </div>
                  </div>
                </div>

                {/* Consent */}
                <div className="flex items-start space-x-2 p-4 bg-lemon-50 rounded-lg">
                  <Checkbox
                    id="consent"
                    checked={formData.consent}
                    onCheckedChange={(checked) => handleInputChange('consent', checked as boolean)}
                  />
                  <Label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed">
                    Wyrażam zgodę na przetwarzanie moich danych osobowych w celu realizacji zamówienia
                    oraz kontaktu związanego z usługą prania tapicerki. *
                  </Label>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <Button
                    type="submit"
                    size="lg"
                    className="hover:opacity-90 hover-lift px-12"
                    disabled={isSubmitting}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    {isSubmitting ? 'Wysyłanie...' : 'Wyślij zamówienie'}
                  </Button>
                  <p className="text-sm text-muted-foreground mt-2">
                    Wktórce się z Tobą kontaktujemy!
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
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
              <div className="text-sm text-muted-foreground">Pn-Nd: 8:00-16:00</div>
            </div>
            <div className="text-center p-4 bg-white/80 rounded-lg">
              <MapPin className="w-8 h-8 mx-auto mb-2 text-mint-600" />
              <div className="font-semibold">Obszar działania</div>
              <div className="text-sm text-muted-foreground">Wrocław i Opole<br />(30 km)</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderForm;
