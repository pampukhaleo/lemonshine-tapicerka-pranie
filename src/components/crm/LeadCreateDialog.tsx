import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { pl } from 'date-fns/locale';
import { cn } from '@/lib/utils';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface Lead {
  id: string;
  name: string;
  phone: string;
  email?: string;
  address: string;
  service: string;
  preferred_date?: string;
  preferred_time?: string;
  description?: string;
  price?: number;
  status: 'new' | 'completed' | 'cancelled';
  created_at: string;
  updated_at: string;
}

interface LeadCreateDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onLeadCreated: (lead: Lead) => void;
}

export const LeadCreateDialog: React.FC<LeadCreateDialogProps> = ({
  open,
  onOpenChange,
  onLeadCreated
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    preferred_date: '',
    preferred_time: '',
    description: '',
    price: '',
    status: 'new' as Lead['status']
  });
  const [loading, setLoading] = useState(false);

  const resetForm = () => {
    setFormData({
      name: '',
      phone: '',
      address: '',
      preferred_date: '',
      preferred_time: '',
      description: '',
      price: '',
      status: 'new'
    });
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      const insertData: any = {
        name: formData.name,
        phone: formData.phone,
        address: formData.address,
        preferred_date: formData.preferred_date || null,
        preferred_time: formData.preferred_time || null,
        description: formData.description || null,
        price: formData.price ? parseFloat(formData.price) : null,
        status: formData.status,
        source: 'crm'
      };

      const { data, error } = await (supabase as any)
        .from('leads')
        .insert(insertData)
        .select()
        .single();

      if (error) {
        console.error('Error creating lead:', error);
        toast.error('Błąd podczas tworzenia zgłoszenia');
        return;
      }

      toast.success('Zgłoszenie zostało utworzone');
      onLeadCreated(data);
      resetForm();
      onOpenChange(false);
    } catch (error) {
      console.error('Error:', error);
      toast.error('Błąd podczas tworzenia zgłoszenia');
    } finally {
      setLoading(false);
    }
  };

  const selectedDate = formData.preferred_date ? new Date(formData.preferred_date) : undefined;

  return (
    <Dialog open={open} onOpenChange={(open) => {
      if (!open) resetForm();
      onOpenChange(open);
    }}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Dodaj nowe zgłoszenie</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Imię i nazwisko *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                required
              />
            </div>
            <div>
              <Label htmlFor="phone">Telefon *</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                required
              />
            </div>
          </div>


          <div>
            <Label htmlFor="address">Adres *</Label>
            <Input
              id="address"
              value={formData.address}
              onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="service">Usługa *</Label>
              <Select
                value={formData.service}
                onValueChange={(value) => setFormData(prev => ({ ...prev, service: value }))}
              >
                <SelectTrigger>
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
            <div>
              <Label htmlFor="price">Cena (zł)</Label>
              <Input
                id="price"
                type="number"
                step="0.01"
                min="0"
                value={formData.price}
                onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))}
                placeholder="0.00"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Preferowana data</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !selectedDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {selectedDate ? (
                      format(selectedDate, "dd.MM.yyyy", { locale: pl })
                    ) : (
                      <span>Wybierz datę</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={(date) => {
                      const dateStr = date ? format(date, 'yyyy-MM-dd') : '';
                      setFormData(prev => ({ ...prev, preferred_date: dateStr }));
                    }}
                    initialFocus
                    className="p-3 pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div>
              <Label htmlFor="preferred_time">Preferowana godzina</Label>
              <Input
                id="preferred_time"
                value={formData.preferred_time}
                onChange={(e) => setFormData(prev => ({ ...prev, preferred_time: e.target.value }))}
                placeholder="np. 10:00-12:00"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="status">Status</Label>
            <Select
              value={formData.status}
              onValueChange={(value: Lead['status']) => setFormData(prev => ({ ...prev, status: value }))}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="new">Nowe</SelectItem>
                <SelectItem value="completed">Zakończone</SelectItem>
                <SelectItem value="cancelled">Anulowane</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="description">Opis</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              rows={3}
              placeholder="Dodatkowe informacje..."
            />
          </div>

          <div className="flex justify-end space-x-2 pt-4">
            <Button
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={loading}
            >
              Anuluj
            </Button>
            <Button
              onClick={handleSave}
              disabled={loading || !formData.name || !formData.phone || !formData.address || !formData.service}
            >
              {loading ? 'Tworzenie...' : 'Utwórz zgłoszenie'}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};