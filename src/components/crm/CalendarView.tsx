
import React, { useState, useEffect } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/integrations/supabase/client';
import { format, isSameDay, parseISO } from 'date-fns';
import { pl } from 'date-fns/locale';
import { CalendarIcon, Clock, MapPin, Phone } from 'lucide-react';

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
  status: 'new' | 'contacted' | 'in_progress' | 'completed' | 'cancelled';
  created_at: string;
  updated_at: string;
}

export const CalendarView: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [leads, setLeads] = useState<Lead[]>([]);
  const [leadsForSelectedDate, setLeadsForSelectedDate] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLeads();
  }, []);

  useEffect(() => {
    filterLeadsForDate(selectedDate);
  }, [selectedDate, leads]);

  const fetchLeads = async () => {
    try {
      const { data, error } = await (supabase as any)
        .from('leads')
        .select('*')
        .not('preferred_date', 'is', null)
        .order('preferred_date', { ascending: true });

      if (error) {
        console.error('Error fetching leads:', error);
        return;
      }

      setLeads(data || []);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterLeadsForDate = (date: Date) => {
    const filtered = leads.filter(lead => {
      if (!lead.preferred_date) return false;
      try {
        const leadDate = parseISO(lead.preferred_date);
        return isSameDay(leadDate, date);
      } catch {
        return false;
      }
    });
    setLeadsForSelectedDate(filtered);
  };

  const getDateModifiers = () => {
    const modifiers: { [key: string]: Date[] } = {};
    
    leads.forEach(lead => {
      if (lead.preferred_date) {
        try {
          const date = parseISO(lead.preferred_date);
          const status = lead.status;
          
          if (!modifiers[status]) {
            modifiers[status] = [];
          }
          modifiers[status].push(date);
        } catch {
          // Ignore invalid dates
        }
      }
    });

    return modifiers;
  };

  const getStatusBadge = (status: Lead['status']) => {
    const statusConfig = {
      new: { label: 'Nowe', variant: 'default' as const },
      contacted: { label: 'Skontaktowane', variant: 'secondary' as const },
      in_progress: { label: 'W trakcie', variant: 'default' as const },
      completed: { label: 'Zakończone', variant: 'default' as const },
      cancelled: { label: 'Anulowane', variant: 'destructive' as const }
    };

    const config = statusConfig[status];
    return (
      <Badge variant={config.variant}>
        {config.label}
      </Badge>
    );
  };

  const getServiceLabel = (service: string) => {
    const serviceLabels = {
      kanapa: 'Pranie kanapy',
      fotel: 'Pranie fotela',
      dywan: 'Pranie dywanu',
      materac: 'Pranie materaca',
      zestaw: 'Czyszczenie kompleksowe',
      inne: 'Inne'
    };
    return serviceLabels[service as keyof typeof serviceLabels] || service;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-mint-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Kalendarz zleceń</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Calendar */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <CalendarIcon className="w-5 h-5 mr-2" />
              Kalendarz
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={(date) => date && setSelectedDate(date)}
              modifiers={getDateModifiers()}
              modifiersClassNames={{
                new: "bg-blue-100 text-blue-900",
                contacted: "bg-yellow-100 text-yellow-900",
                in_progress: "bg-orange-100 text-orange-900",
                completed: "bg-green-100 text-green-900",
                cancelled: "bg-red-100 text-red-900"
              }}
              className="p-3 pointer-events-auto"
            />
            
            <div className="mt-4 space-y-2">
              <h4 className="font-medium">Legenda:</h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-100 rounded mr-2"></div>
                  Nowe
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-yellow-100 rounded mr-2"></div>
                  Skontaktowane
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-orange-100 rounded mr-2"></div>
                  W trakcie
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-100 rounded mr-2"></div>
                  Zakończone
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-100 rounded mr-2"></div>
                  Anulowane
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Selected Date Details */}
        <Card>
          <CardHeader>
            <CardTitle>
              {format(selectedDate, 'dd MMMM yyyy', { locale: pl })}
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              {leadsForSelectedDate.length} zgłoszeń na ten dzień
            </p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {leadsForSelectedDate.length === 0 ? (
                <p className="text-center text-muted-foreground py-8">
                  Brak zgłoszeń na wybrany dzień
                </p>
              ) : (
                leadsForSelectedDate.map((lead) => (
                  <div key={lead.id} className="border rounded-lg p-4 space-y-2">
                    <div className="flex justify-between items-start">
                      <h3 className="font-semibold">{lead.name}</h3>
                      {getStatusBadge(lead.status)}
                    </div>
                    
                    <div className="space-y-1 text-sm">
                      <div className="flex items-center">
                        <Phone className="w-4 h-4 mr-2 text-muted-foreground" />
                        {lead.phone}
                      </div>
                      
                      <div className="flex items-start">
                        <MapPin className="w-4 h-4 mr-2 text-muted-foreground mt-0.5" />
                        {lead.address}
                      </div>
                      
                      {lead.preferred_time && (
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2 text-muted-foreground" />
                          {lead.preferred_time}
                        </div>
                      )}
                      
                      <div><strong>Usługa:</strong> {getServiceLabel(lead.service)}</div>
                      
                      {lead.price && (
                        <div><strong>Cena:</strong> {lead.price.toLocaleString('pl-PL', {
                          style: 'currency',
                          currency: 'PLN'
                        })}</div>
                      )}
                      
                      {lead.description && (
                        <div>
                          <strong>Opis:</strong>
                          <p className="text-muted-foreground">{lead.description}</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
