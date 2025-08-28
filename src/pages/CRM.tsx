
import React, { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { CRMLogin } from '@/components/crm/CRMLogin';
import { CRMDashboard } from '@/components/crm/CRMDashboard';
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';
import SEOHead from '@/components/SEOHead';

const CRM = () => {
  const { user, loading, isAdmin, signOut } = useAuth();
  const [localTimeout, setLocalTimeout] = useState(false);

  useEffect(() => {
    // Local watchdog - if loading takes too long, show login with message
    const timeoutId = setTimeout(() => {
      if (loading) {
        console.warn('CRM page loading timeout - showing login');
        setLocalTimeout(true);
      }
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, [loading]);

  if (loading && !localTimeout) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-mint-600"></div>
      </div>
    );
  }

  // Reset timeout when user is authenticated and is admin
  useEffect(() => {
    if (user && isAdmin) {
      setLocalTimeout(false);
    }
  }, [user, isAdmin]);

  if (!user || !isAdmin) {
    return <CRMLogin connectionProblem={localTimeout && !user} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead 
        title="CRM System"
        description="System zarządzania klientami"
        robots="noindex,nofollow"
      />
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <h1 className="text-3xl font-bold text-gray-900">
              LemonShine CRM
            </h1>
            <Button
              variant="outline"
              onClick={() => signOut()}
              className="flex items-center"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Wyloguj się
            </Button>
          </div>
        </div>
      </header>
      <main>
        <CRMDashboard />
      </main>
    </div>
  );
};

export default CRM;
