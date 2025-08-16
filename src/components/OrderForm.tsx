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

const OrderForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    service: '',
    date: '',
    time: '',
    description: '',
    consent: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      toast.error('Musisz wyrazić zgodę na przetwarzanie danych osobowych');
      return;
    }
    
    // Here would be integration with Telegram bot
    console.log('Form submitted:', formData);
    toast.success('Dziękujemy! Skontaktujemy się z Tobą w ciągu 30 minut.');
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      address: '',
      service: '',
      date: '',
      time: '',
      description: '',
      consent: false
    });
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
              Wypełnij formularz, a skontaktujemy się z Tobą w ciągu 30 minut
            </p>
          </div>

          <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-heading text-center text-foreground">
                Szczegóły zamówienia
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground flex items-center">
                      <Mail className="w-5 h-5 mr-2 text-mint-500" />
                      Dane kontaktowe
                    </h3>
                    
                    <div className="space-y-2">
                      <Label htmlFor="name">Imię i nazwisko *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                        className="border-lemon-200 focus:border-mint-500"
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
                        className="border-lemon-200 focus:border-mint-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="twoj@email.pl"
                        className="border-lemon-200 focus:border-mint-500"
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
                        className="border-lemon-200 focus:border-mint-500"
                      />
                    </div>
                  </div>

                  {/* Service Details */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground flex items-center">
                      <MapPin className="w-5 h-5 mr-2 text-mint-500" />
                      Szczegóły usługi
                    </h3>

                    <div className="space-y-2">
                      <Label htmlFor="service">Rodzaj usługi *</Label>
                      <Select onValueChange={(value) => handleInputChange('service', value)}>
                        <SelectTrigger className="border-lemon-200 focus:border-mint-500">
                          <SelectValue placeholder="Wybierz usługę" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="kanapa">Pranie kanapy</SelectItem>
                          <SelectItem value="fotel">Pranie fotela</SelectItem>
                          <SelectItem value="zestaw">Kanapa + fotele</SelectItem>
                          <SelectItem value="dywan">Pranie dywanu</SelectItem>
                          <SelectItem value="materac">Pranie materaca</SelectItem>
                          <SelectItem value="samochod">Tapicerka samochodowa</SelectItem>
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
                          className="border-lemon-200 focus:border-mint-500"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="time">Preferowana godzina</Label>
                        <Select onValueChange={(value) => handleInputChange('time', value)}>
                          <SelectTrigger className="border-lemon-200 focus:border-mint-500">
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
                        className="border-lemon-200 focus:border-mint-500"
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
                    className="gradient-lemon text-white hover:opacity-90 hover-lift px-12"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Wyślij zamówienie
                  </Button>
                  <p className="text-sm text-muted-foreground mt-2">
                    Skontaktujemy się z Tobą w ciągu 30 minut!
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-white/80 rounded-lg">
              <Phone className="w-8 h-8 mx-auto mb-2 text-mint-500" />
              <div className="font-semibold">Telefon</div>
              <div className="text-sm text-muted-foreground">+48 123 456 789</div>
            </div>
            <div className="text-center p-4 bg-white/80 rounded-lg">
              <Clock className="w-8 h-8 mx-auto mb-2 text-mint-500" />
              <div className="font-semibold">Godziny pracy</div>
              <div className="text-sm text-muted-foreground">Pn-Pt: 8:00-20:00<br />Sb: 9:00-16:00</div>
            </div>
            <div className="text-center p-4 bg-white/80 rounded-lg">
              <MapPin className="w-8 h-8 mx-auto mb-2 text-mint-500" />
              <div className="font-semibold">Obszar działania</div>
              <div className="text-sm text-muted-foreground">Opole i okolice<br />(30 km)</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderForm;
