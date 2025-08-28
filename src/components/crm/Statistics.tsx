
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { supabase } from '@/integrations/supabase/client';
import { format, startOfMonth, endOfMonth, subMonths } from 'date-fns';
import { pl } from 'date-fns/locale';
import { TrendingUp, DollarSign, CheckCircle, Users } from 'lucide-react';

interface MonthlyStats {
  month: string;
  totalEarnings: number;
  completedLeads: number;
  totalLeads: number;
  averagePrice: number;
}

export const Statistics: React.FC = () => {
  const [stats, setStats] = useState<MonthlyStats | null>(null);
  const [selectedMonth, setSelectedMonth] = useState(format(new Date(), 'yyyy-MM'));
  const [loading, setLoading] = useState(true);

  const getMonthOptions = () => {
    const options = [];
    for (let i = 0; i < 12; i++) {
      const date = subMonths(new Date(), i);
      const value = format(date, 'yyyy-MM');
      const label = format(date, 'LLLL yyyy', { locale: pl });
      options.push({ value, label });
    }
    return options;
  };

  const fetchStats = async (monthStr: string) => {
    setLoading(true);
    try {
      const [year, month] = monthStr.split('-');
      const startDate = startOfMonth(new Date(parseInt(year), parseInt(month) - 1));
      const endDate = endOfMonth(startDate);

      const { data, error } = await (supabase as any)
        .from('leads')
        .select('status, price, created_at')
        .gte('created_at', startDate.toISOString())
        .lte('created_at', endDate.toISOString());

      if (error) {
        console.error('Error fetching stats:', error);
        return;
      }

      const leads = data || [];
      const completedLeads = leads.filter((lead: any) => lead.status === 'completed');
      const totalEarnings = completedLeads.reduce((sum: number, lead: any) => {
        return sum + (lead.price ? parseFloat(lead.price) : 0);
      }, 0);

      const monthStats: MonthlyStats = {
        month: format(startDate, 'LLLL yyyy', { locale: pl }),
        totalEarnings,
        completedLeads: completedLeads.length,
        totalLeads: leads.length,
        averagePrice: completedLeads.length > 0 ? totalEarnings / completedLeads.length : 0
      };

      setStats(monthStats);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats(selectedMonth);
  }, [selectedMonth]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-mint-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Statystyki</h2>
        <Select value={selectedMonth} onValueChange={setSelectedMonth}>
          <SelectTrigger className="w-48">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {getMonthOptions().map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {stats && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Łączny zarobek</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {stats.totalEarnings.toLocaleString('pl-PL', {
                  style: 'currency',
                  currency: 'PLN'
                })}
              </div>
              <p className="text-xs text-muted-foreground">
                za {stats.month}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Zakończone zlecenia</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.completedLeads}</div>
              <p className="text-xs text-muted-foreground">
                z {stats.totalLeads} łącznie
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Średnia cena</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {stats.averagePrice.toLocaleString('pl-PL', {
                  style: 'currency',
                  currency: 'PLN'
                })}
              </div>
              <p className="text-xs text-muted-foreground">
                za zakończone zlecenie
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Wskaźnik realizacji</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {stats.totalLeads > 0 
                  ? Math.round((stats.completedLeads / stats.totalLeads) * 100)
                  : 0}%
              </div>
              <p className="text-xs text-muted-foreground">
                zakończonych zleceń
              </p>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};
