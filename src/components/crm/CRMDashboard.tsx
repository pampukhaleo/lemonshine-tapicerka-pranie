
import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { LeadsTable } from './LeadsTable';
import { LeadDetails } from './LeadDetails';
import { Statistics } from './Statistics';
import { CalendarView } from './CalendarView';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Users, CheckCircle, XCircle } from 'lucide-react';

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

export const CRMDashboard = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [filteredLeads, setFilteredLeads] = useState<Lead[]>([]);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState<'all' | Lead['status']>('all');

  useEffect(() => {
    fetchLeads();
  }, []);

  useEffect(() => {
    filterLeads();
  }, [leads, statusFilter]);

  const fetchLeads = async () => {
    try {
      const { data, error } = await (supabase as any)
        .from('leads')
        .select('*')
        .order('preferred_date', { ascending: false, nullsFirst: false })
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching leads:', error);
        return;
      }

      // Normalize statuses to prevent errors
      const normalizedData = (data || []).map((lead: any) => ({
        ...lead,
        status: ['new', 'completed', 'cancelled'].includes(lead.status) ? lead.status : 'new'
      }));

      setLeads(normalizedData);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterLeads = () => {
    if (statusFilter === 'all') {
      setFilteredLeads(leads);
    } else {
      setFilteredLeads(leads.filter(lead => lead.status === statusFilter));
    }
  };

  const updateLeadStatus = async (leadId: string, status: Lead['status']) => {
    try {
      const { error } = await (supabase as any)
        .from('leads')
        .update({ status })
        .eq('id', leadId);

      if (error) {
        console.error('Error updating lead:', error);
        return;
      }

      // Refresh leads
      await fetchLeads();
      
      // Update selected lead if it's the one being updated
      if (selectedLead?.id === leadId) {
        setSelectedLead(prev => prev ? { ...prev, status } : null);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const deleteLead = async (leadId: string) => {
    try {
      const { error } = await (supabase as any)
        .from('leads')
        .delete()
        .eq('id', leadId);

      if (error) {
        console.error('Error deleting lead:', error);
        return false;
      }

      // Refresh leads
      await fetchLeads();
      
      // Clear selected lead if it was deleted
      if (selectedLead?.id === leadId) {
        setSelectedLead(null);
      }

      return true;
    } catch (error) {
      console.error('Error:', error);
      return false;
    }
  };

  const getStatusCounts = () => {
    return {
      new: leads.filter(l => l.status === 'new').length,
      completed: leads.filter(l => l.status === 'completed').length,
      cancelled: leads.filter(l => l.status === 'cancelled').length,
    };
  };

  const statusCounts = getStatusCounts();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-mint-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Tabs defaultValue="dashboard" className="space-y-6">
        <TabsList>
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="statistics">Statystyki</TabsTrigger>
          <TabsTrigger value="calendar">Kalendarz</TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard" className="space-y-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Nowe</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{statusCounts.new}</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Zakończone</CardTitle>
                <CheckCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{statusCounts.completed}</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Anulowane</CardTitle>
                <XCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{statusCounts.cancelled}</div>
              </CardContent>
            </Card>
          </div>

          {/* Status Filter */}
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Zgłoszenia</h2>
            <Select value={statusFilter} onValueChange={(value: typeof statusFilter) => setStatusFilter(value)}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Wszystkie ({leads.length})</SelectItem>
                <SelectItem value="new">Nowe ({statusCounts.new})</SelectItem>
                <SelectItem value="completed">Zakończone ({statusCounts.completed})</SelectItem>
                <SelectItem value="cancelled">Anulowane ({statusCounts.cancelled})</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Leads Table */}
            <div className="lg:col-span-2">
              <LeadsTable
                leads={filteredLeads}
                onSelectLead={setSelectedLead}
                selectedLeadId={selectedLead?.id}
              />
            </div>

            {/* Lead Details */}
            <div className="lg:col-span-1">
              <LeadDetails
                lead={selectedLead}
                onUpdateStatus={updateLeadStatus}
                onDeleteLead={deleteLead}
                onRefresh={fetchLeads}
              />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="statistics">
          <Statistics />
        </TabsContent>

        <TabsContent value="calendar">
          <CalendarView />
        </TabsContent>
      </Tabs>
    </div>
  );
};
