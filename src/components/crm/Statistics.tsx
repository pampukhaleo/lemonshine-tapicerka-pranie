import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { supabase } from '@/integrations/supabase/client';
import { format, startOfMonth, endOfMonth, subMonths, getDaysInMonth } from 'date-fns';
import { pl } from 'date-fns/locale';
import { TrendingUp, DollarSign, CheckCircle, Users } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface MonthlyStats {
  month: string;
  totalEarnings: number;
  completedLeads: number;
  totalLeads: number;
  averagePrice: number;
}

interface DailyEarnings {
  day: string;
  earnings: number;
}

export const Statistics: React.FC = () => {
  const [stats, setStats] = useState<MonthlyStats | null>(null);
  const [monthlyData, setMonthlyData] = useState<DailyEarnings[]>([]);
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
        .select('status, price, preferred_date')
        .gte('preferred_date', format(startDate, 'yyyy-MM-dd'))
        .lte('preferred_date', format(endDate, 'yyyy-MM-dd'));

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

  const fetchMonthlyEarnings = async (monthStr: string) => {
    try {
      const [year, month] = monthStr.split('-');
      const startDate = startOfMonth(new Date(parseInt(year), parseInt(month) - 1));
      const endDate = endOfMonth(startDate);
      const daysInMonth = getDaysInMonth(startDate);
      
      // Fetch all completed leads for the month in one query
      const { data, error } = await (supabase as any)
        .from('leads')
        .select('price, preferred_date')
        .eq('status', 'completed')
        .gte('preferred_date', format(startDate, 'yyyy-MM-dd'))
        .lte('preferred_date', format(endDate, 'yyyy-MM-dd'));

      if (error) {
        console.error('Error fetching monthly data:', error);
        return;
      }

      // Group earnings by day
      const earningsByDay: { [key: string]: number } = {};
      
      // Initialize all days of the month with 0
      for (let i = 1; i <= daysInMonth; i++) {
        const day = new Date(parseInt(year), parseInt(month) - 1, i);
        const dayKey = format(day, 'yyyy-MM-dd');
        earningsByDay[dayKey] = 0;
      }

      // Sum up earnings for each day
      (data || []).forEach((lead: any) => {
        if (lead.preferred_date && lead.price) {
          const dayKey = lead.preferred_date;
          earningsByDay[dayKey] = (earningsByDay[dayKey] || 0) + parseFloat(lead.price);
        }
      });

      // Convert to chart format
      const monthlyEarnings: DailyEarnings[] = [];
      for (let i = 1; i <= daysInMonth; i++) {
        const day = new Date(parseInt(year), parseInt(month) - 1, i);
        const dayKey = format(day, 'yyyy-MM-dd');
        monthlyEarnings.push({
          day: i.toString(),
          earnings: earningsByDay[dayKey] || 0
        });
      }

      setMonthlyData(monthlyEarnings);
    } catch (error) {
      console.error('Error fetching monthly earnings:', error);
    }
  };

  useEffect(() => {
    fetchStats(selectedMonth);
    fetchMonthlyEarnings(selectedMonth);
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

      {/* Monthly Earnings Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Zarobki w {stats?.month || 'wybranym miesiącu'}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip 
                  formatter={(value: number) => [
                    value.toLocaleString('pl-PL', {
                      style: 'currency',
                      currency: 'PLN'
                    }),
                    'Zarobek'
                  ]}
                />
                <Bar dataKey="earnings" fill="#10B981" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

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
