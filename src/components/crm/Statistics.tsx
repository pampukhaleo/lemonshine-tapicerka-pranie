
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { supabase } from '@/integrations/supabase/client';
import { format, startOfMonth, endOfMonth, subMonths, startOfWeek, addDays, startOfDay, endOfDay } from 'date-fns';
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
  const [weeklyData, setWeeklyData] = useState<DailyEarnings[]>([]);
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
        .select('status, price, created_at, preferred_date')
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

  const fetchWeeklyEarnings = async () => {
    try {
      // Get current week from Monday to Sunday
      const today = new Date();
      const monday = startOfWeek(today, { weekStartsOn: 1 }); // Start from Monday
      
      const weekDays = [];
      for (let i = 0; i < 7; i++) {
        const day = addDays(monday, i);
        weekDays.push(day);
      }

      const weeklyEarnings: DailyEarnings[] = [];

      for (const day of weekDays) {
        const startOfDayDate = startOfDay(day);
        const endOfDayDate = endOfDay(day);

        const { data, error } = await (supabase as any)
          .from('leads')
          .select('price, preferred_date')
          .eq('status', 'completed')
          .gte('preferred_date', startOfDayDate.toISOString().split('T')[0])
          .lte('preferred_date', endOfDayDate.toISOString().split('T')[0]);

        if (error) {
          console.error('Error fetching weekly data:', error);
          continue;
        }

        const dayEarnings = (data || []).reduce((sum: number, lead: any) => {
          return sum + (lead.price ? parseFloat(lead.price) : 0);
        }, 0);

        weeklyEarnings.push({
          day: format(day, 'EEE', { locale: pl }),
          earnings: dayEarnings
        });
      }

      setWeeklyData(weeklyEarnings);
    } catch (error) {
      console.error('Error fetching weekly earnings:', error);
    }
  };

  useEffect(() => {
    fetchStats(selectedMonth);
    fetchWeeklyEarnings();
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

      {/* Weekly Earnings Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Zarobki w tym tygodniu (Pn-Nd)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyData}>
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
