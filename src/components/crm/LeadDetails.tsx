
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { supabase } from '@/integrations/supabase/client';
import { format } from 'date-fns';
import { pl } from 'date-fns/locale';
import { toast } from 'sonner';
import { Phone, Mail, MapPin, Calendar, MessageSquare, Plus, Edit } from 'lucide-react';
import { LeadEditDialog } from './LeadEditDialog';

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

interface Note {
  id: string;
  note: string;
  created_at: string;
}

interface LeadDetailsProps {
  lead: Lead | null;
  onUpdateStatus: (leadId: string, status: Lead['status']) => void;
  onRefresh: () => void;
}

export const LeadDetails: React.FC<LeadDetailsProps> = ({
  lead,
  onUpdateStatus,
  onRefresh
}) => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [newNote, setNewNote] = useState('');
  const [addingNote, setAddingNote] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);

  useEffect(() => {
    if (lead) {
      fetchNotes();
    }
  }, [lead]);

  const fetchNotes = async () => {
    if (!lead) return;

    try {
      const { data, error } = await (supabase as any)
        .from('lead_notes')
        .select('*')
        .eq('lead_id', lead.id)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching notes:', error);
        return;
      }

      setNotes(data || []);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const addNote = async () => {
    if (!lead || !newNote.trim()) return;

    setAddingNote(true);
    try {
      const { error } = await (supabase as any)
        .from('lead_notes')
        .insert([{
          lead_id: lead.id,
          note: newNote.trim(),
          created_by: (await supabase.auth.getUser()).data.user?.id
        }]);

      if (error) {
        console.error('Error adding note:', error);
        toast.error('Błąd podczas dodawania notatki');
        return;
      }

      setNewNote('');
      await fetchNotes();
      toast.success('Notatka została dodana');
    } catch (error) {
      console.error('Error:', error);
      toast.error('Błąd podczas dodawania notatki');
    } finally {
      setAddingNote(false);
    }
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

  if (!lead) {
    return (
      <Card>
        <CardContent className="flex items-center justify-center h-96">
          <p className="text-muted-foreground">Wybierz zgłoszenie z listy</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {/* Lead Info */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-start">
            <CardTitle className="text-xl">{lead.name}</CardTitle>
            <div className="flex items-center space-x-2">
              {getStatusBadge(lead.status)}
              <Button
                variant="outline"
                size="sm"
                onClick={() => setEditDialogOpen(true)}
              >
                <Edit className="w-4 h-4 mr-2" />
                Edytuj
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-2">
            <Phone className="w-4 h-4 text-muted-foreground" />
            <a href={`tel:${lead.phone}`} className="text-blue-600 hover:underline">
              {lead.phone}
            </a>
          </div>
          
          {lead.email && (
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-muted-foreground" />
              <a href={`mailto:${lead.email}`} className="text-blue-600 hover:underline">
                {lead.email}
              </a>
            </div>
          )}

          <div className="flex items-start space-x-2">
            <MapPin className="w-4 h-4 text-muted-foreground mt-1" />
            <p className="text-sm">{lead.address}</p>
          </div>

          <div className="border-t pt-4 space-y-2">
            <div><strong>Usługa:</strong> {getServiceLabel(lead.service)}</div>
            
            {lead.price && (
              <div><strong>Cena:</strong> {lead.price.toLocaleString('pl-PL', {
                style: 'currency',
                currency: 'PLN'
              })}</div>
            )}
            
            {lead.preferred_date && (
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-muted-foreground" />
                <span>{format(new Date(lead.preferred_date), 'dd.MM.yyyy', { locale: pl })}</span>
                {lead.preferred_time && <span>({lead.preferred_time})</span>}
              </div>
            )}

            {lead.description && (
              <div>
                <strong>Opis:</strong>
                <p className="text-sm mt-1 text-muted-foreground">{lead.description}</p>
              </div>
            )}
          </div>

          <div className="text-xs text-muted-foreground border-t pt-4">
            Utworzone: {format(new Date(lead.created_at), 'dd.MM.yyyy HH:mm', { locale: pl })}
          </div>
        </CardContent>
      </Card>

      {/* Status Update */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Zmień status</CardTitle>
        </CardHeader>
        <CardContent>
          <Select
            value={lead.status}
            onValueChange={(value: Lead['status']) => onUpdateStatus(lead.id, value)}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="new">Nowe</SelectItem>
              <SelectItem value="contacted">Skontaktowane</SelectItem>
              <SelectItem value="in_progress">W trakcie</SelectItem>
              <SelectItem value="completed">Zakończone</SelectItem>
              <SelectItem value="cancelled">Anulowane</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      {/* Notes */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center">
            <MessageSquare className="w-5 h-5 mr-2" />
            Notatki ({notes.length})
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Add Note */}
          <div className="space-y-2">
            <Textarea
              placeholder="Dodaj notatkę..."
              value={newNote}
              onChange={(e) => setNewNote(e.target.value)}
            />
            <Button
              onClick={addNote}
              disabled={!newNote.trim() || addingNote}
              size="sm"
            >
              <Plus className="w-4 h-4 mr-2" />
              {addingNote ? 'Dodawanie...' : 'Dodaj notatkę'}
            </Button>
          </div>

          {/* Notes List */}
          <div className="space-y-3">
            {notes.length === 0 ? (
              <p className="text-sm text-muted-foreground text-center py-4">
                Brak notatek
              </p>
            ) : (
              notes.map((note) => (
                <div key={note.id} className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm">{note.note}</p>
                  <p className="text-xs text-muted-foreground mt-2">
                    {format(new Date(note.created_at), 'dd.MM.yyyy HH:mm', { locale: pl })}
                  </p>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>

      <LeadEditDialog
        lead={lead}
        open={editDialogOpen}
        onOpenChange={setEditDialogOpen}
        onLeadUpdated={onRefresh}
      />
    </div>
  );
};
