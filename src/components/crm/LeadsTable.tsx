
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';
import { pl } from 'date-fns/locale';

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

interface LeadsTableProps {
  leads: Lead[];
  onSelectLead: (lead: Lead) => void;
  selectedLeadId?: string;
}

export const LeadsTable: React.FC<LeadsTableProps> = ({
  leads,
  onSelectLead,
  selectedLeadId
}) => {
  const getStatusBadge = (status: Lead['status']) => {
    const statusConfig = {
      new: { label: 'Nowe', variant: 'default' as const },
      completed: { label: 'Zakończone', variant: 'default' as const },
      cancelled: { label: 'Anulowane', variant: 'destructive' as const }
    };

    const config = statusConfig[status] || statusConfig.new;
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

  return (
    <Card>
      <CardHeader>
        <CardTitle>Zgłoszenia ({leads.length})</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {leads.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              Brak zgłoszeń
            </div>
          ) : (
            leads.map((lead) => (
              <div
                key={lead.id}
                className={`p-4 border rounded-lg cursor-pointer transition-colors hover:bg-gray-50 ${
                  selectedLeadId === lead.id ? 'bg-mint-50 border-mint-200' : ''
                }`}
                onClick={() => onSelectLead(lead)}
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-lg">{lead.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {(() => {
                        try {
                          if (lead.preferred_date) {
                            return `Preferowana data: ${format(new Date(lead.preferred_date), 'dd.MM.yyyy', { locale: pl })}`;
                          } else if (lead.created_at) {
                            return `Utworzone: ${format(new Date(lead.created_at), 'dd.MM.yyyy HH:mm', { locale: pl })}`;
                          }
                        } catch (error) {
                          console.error('Date formatting error:', error);
                        }
                        return '–';
                      })()}
                    </p>
                  </div>
                  {getStatusBadge(lead.status)}
                </div>
                
                <div className="space-y-1 text-sm">
                  <div><strong>Telefon:</strong> {lead.phone}</div>
                  <div><strong>Usługa:</strong> {getServiceLabel(lead.service)}</div>
                  {(lead as any).source && (
                    <div><strong>Źródło:</strong> {(lead as any).source}</div>
                  )}
                  {typeof lead.price === 'number' && (
                    <div><strong>Cena:</strong> {lead.price.toLocaleString('pl-PL', {
                      style: 'currency',
                      currency: 'PLN'
                    })}</div>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
};
