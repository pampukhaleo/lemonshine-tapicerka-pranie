import React from 'react';
import type { RouteRecord } from 'vite-react-ssg';
import { Outlet } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ScrollToTop from '@/components/ScrollToTop';

import Home from '@/pages/Home';
import Klient from '@/pages/Klient';
import Pricing from '@/pages/Pricing';
import BlogIndex from '@/pages/BlogIndex';
import BlogPost from '@/pages/BlogPost';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import NotFound from '@/pages/NotFound';
import Biznes from '@/pages/Biznes';
import Outsourcing from '@/pages/Outsourcing';
import MycieOkien from '@/pages/MycieOkien';
import { blogPosts } from '@/data/blog';

const queryClient = new QueryClient();

const RootLayout = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ScrollToTop />
      <Outlet />
      <Toaster />
    </TooltipProvider>
  </QueryClientProvider>
);

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, Component: Home },
      { path: 'pranie-tapicerki', Component: Klient },
      { path: 'klient', Component: Klient },
      { path: 'biznes', Component: Biznes },
      { path: 'mycie-okien', Component: MycieOkien },
      { path: 'outsourcing', Component: Outsourcing },
      { path: 'cennik', Component: Pricing },
      { path: 'blog', Component: BlogIndex },
      {
        path: 'blog/:slug',
        Component: BlogPost,
        getStaticPaths: () => blogPosts.map((p) => `blog/${p.slug}`),
      },
      { path: 'polityka-prywatnosci', Component: PrivacyPolicy },
      { path: '*', Component: NotFound },
    ],
  },
];

export default routes;
