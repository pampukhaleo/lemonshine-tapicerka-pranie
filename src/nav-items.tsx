
import { HomeIcon, TagIcon, FileTextIcon, ShieldIcon, BarChart3Icon } from "lucide-react";
import Index from "./pages/Index.tsx";
import Pricing from "./pages/Pricing.tsx";
import BlogIndex from "./pages/BlogIndex.tsx";
import BlogPost from "./pages/BlogPost.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import NotFound from "./pages/NotFound.tsx";
import CRM from "./pages/CRM.tsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Cennik",
    to: "/cennik/",
    icon: <TagIcon className="h-4 w-4" />,
    page: <Pricing />,
  },
  {
    title: "Blog",
    to: "/blog/",
    icon: <FileTextIcon className="h-4 w-4" />,
    page: <BlogIndex />,
  },
  {
    title: "Blog Post",
    to: "/blog/:slug",
    icon: <FileTextIcon className="h-4 w-4" />,
    page: <BlogPost />,
  },
  {
    title: "Polityka Prywatności",
    to: "/polityka-prywatnosci/",
    icon: <ShieldIcon className="h-4 w-4" />,
    page: <PrivacyPolicy />,
  },
  {
    title: "CRM",
    to: "/crm",
    icon: <BarChart3Icon className="h-4 w-4" />,
    page: <CRM />,
  },
  {
    title: "404",
    to: "*",
    page: <NotFound />,
  },
];
