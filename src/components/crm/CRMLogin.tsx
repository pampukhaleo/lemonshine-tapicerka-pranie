
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useAuth } from '@/hooks/useAuth';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { AlertCircle } from 'lucide-react';

interface CRMLoginProps {
  connectionProblem?: boolean;
}

export const CRMLogin: React.FC<CRMLoginProps> = ({ connectionProblem }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { signIn, user } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await signIn(email, password);
      
      if (error) {
        toast.error('Nieprawidłowe dane logowania');
        return;
      }

      toast.success('Pomyślnie zalogowano');
      // Force navigation after successful login
      setTimeout(() => {
        navigate('/crm');
        window.location.reload();
      }, 1000);
    } catch (error) {
      toast.error('Wystąpił błąd podczas logowania');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl text-center">
            Logowanie do CRM
          </CardTitle>
          {connectionProblem && (
            <div className="flex items-center text-amber-600 text-sm mt-2 justify-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              Problem z połączeniem - spróbuj zalogować się ponownie
            </div>
          )}
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="admin@lemonshine.pl"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Hasło</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full"
              disabled={loading}
            >
              {loading ? 'Logowanie...' : 'Zaloguj się'}
            </Button>
          </form>
          
          <div className="mt-4 text-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="link" className="text-sm text-muted-foreground">
                  Brak dostępu? Pomoc dla administratorów
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Dostęp administratora</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Jeśli masz konto ale brak Ci uprawnień administratora, 
                    wykonaj poniższe zapytanie SQL w Supabase:
                  </p>
                  <div className="bg-gray-100 p-3 rounded text-sm font-mono">
                    {user ? (
                      `INSERT INTO public.admins (user_id) VALUES ('${user.id}');`
                    ) : (
                      "INSERT INTO public.admins (user_id) VALUES ('YOUR_USER_ID');"
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Wykonaj to zapytanie w SQL Editor w panelu Supabase, 
                    a następnie odśwież stronę.
                  </p>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
