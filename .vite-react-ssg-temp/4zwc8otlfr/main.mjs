import { ViteReactSSG } from "vite-react-ssg";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useLocation, Link, useSearchParams, useParams, Outlet } from "react-router-dom";
import { useTheme } from "next-themes";
import { Toaster as Toaster$1, toast } from "sonner";
import * as React from "react";
import React__default, { useEffect, useState, useRef } from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { Helmet } from "react-helmet-async";
import { ChevronDown, Phone, X, Menu, SprayCan, Sofa, PanelTop, Facebook, Instagram, Mail, MapPin, Clock, ShieldCheck, Sparkles, Wind, Droplets, Feather, Hand, GlassWater, Trash2, Shirt, UtensilsCrossed, CookingPot, Refrigerator, Bath, ShowerHead, ArrowRight, Percent, Star, Users, Check, MessageCircle, Bug, XCircle, Search, Waves, Fan, Calendar, User, Ruler, ClipboardList, ArrowLeft, Building2, Hotel, Stethoscope, FileText, Shield, Handshake, Building, Home as Home$1, Briefcase, HeartHandshake, GraduationCap } from "lucide-react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import * as LabelPrimitive from "@radix-ui/react-label";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { createClient } from "@supabase/supabase-js";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
const Toaster = ({ ...props }) => {
  const { theme = "system" } = useTheme();
  return /* @__PURE__ */ jsx(
    Toaster$1,
    {
      theme,
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const TooltipProvider = TooltipPrimitive.Provider;
const TooltipContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(
  TooltipPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;
if (typeof window !== "undefined" && !window.dataLayer) {
  window.dataLayer = [];
}
const trackPageView = (page_path, page_title) => {
  if (typeof window !== "undefined" && window.dataLayer) {
    window.dataLayer.push({
      event: "page_view",
      page_location: window.location.href,
      page_path,
      page_title: page_title || document.title
    });
  }
};
const trackFormSubmission = (data) => {
  if (typeof window !== "undefined" && window.dataLayer) {
    window.dataLayer.push({
      event: "form_submission",
      form_id: "order_form",
      ...data
    });
  }
};
const trackPhoneClick = (location) => {
  if (typeof window !== "undefined" && window.dataLayer) {
    window.dataLayer.push({
      event: "phone_click",
      location,
      // e.g., 'header', 'hero', 'footer', 'faq', 'order_form'
      phone_number: "+48662117886"
    });
  }
};
const trackConversion = () => {
  if (typeof window !== "undefined" && window.dataLayer) {
    window.dataLayer.push({
      event: "conversion",
      send_to: "AW-17183299023/1NeMCPjo1eQaEM-r0YFA"
    });
  }
};
const ScrollToTop = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    }
    const page_path = location.pathname + location.search + location.hash;
    trackPageView(page_path, document.title);
  }, [location.pathname, location.hash]);
  return null;
};
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";
const normalizePathWithTrailingSlash = (path) => {
  if (!path) return "/";
  if (path === "/") return path;
  return path.endsWith("/") ? path : `${path}/`;
};
const SEOHead = ({
  title = "Lemonshine - Profesjonalne Pranie Tapicerki Opole, Wrocław | Czyszczenie Kanap",
  description = "Profesjonalne pranie tapicerki meblowej w Opolu i Wrocławiu. Czyszczenie kanap, foteli, narożników i materacy. Bezpieczne środki, gwarancja jakości.",
  keywords = "pranie tapicerki, pranie tapicerki meblowej, czyszczenie kanapy, pranie kanapy, czyszczenie materaca, czyszczenie tapicerki meblowej, pranie tapicerki opole, pranie tapicerki wrocław, pranie narożnika",
  canonical,
  ogImage = "https://lemonshine.pl/lemonshine.png",
  ogImageAlt = "Lemonshine - Profesjonalne pranie tapicerki",
  robots = "index,follow",
  ogType = "website",
  siteName = "Lemonshine",
  jsonLd,
  twitterCard = "summary_large_image"
}) => {
  const fullTitle = title.includes("Lemonshine") ? title : `${title} | Lemonshine`;
  const currentUrl = typeof window !== "undefined" ? window.location.href : "https://lemonshine.pl/";
  const normalizedCanonical = normalizePathWithTrailingSlash(canonical || currentUrl.replace("https://lemonshine.pl", "") || "/");
  const absoluteCanonical = (canonical == null ? void 0 : canonical.startsWith("http")) ? canonical : `https://lemonshine.pl${normalizedCanonical}`;
  const absoluteOgImage = (ogImage == null ? void 0 : ogImage.startsWith("http")) ? ogImage : `https://lemonshine.pl/${ogImage.replace(/^\/+/, "")}`;
  return /* @__PURE__ */ jsxs(Helmet, { children: [
    /* @__PURE__ */ jsx("title", { children: fullTitle }),
    /* @__PURE__ */ jsx("meta", { name: "description", content: description }),
    /* @__PURE__ */ jsx("meta", { name: "keywords", content: keywords }),
    /* @__PURE__ */ jsx("meta", { name: "robots", content: robots }),
    /* @__PURE__ */ jsx("link", { rel: "canonical", href: absoluteCanonical }),
    /* @__PURE__ */ jsx("meta", { property: "og:site_name", content: siteName }),
    /* @__PURE__ */ jsx("meta", { property: "og:type", content: ogType }),
    /* @__PURE__ */ jsx("meta", { property: "og:title", content: fullTitle }),
    /* @__PURE__ */ jsx("meta", { property: "og:description", content: description }),
    /* @__PURE__ */ jsx("meta", { property: "og:image", content: absoluteOgImage }),
    /* @__PURE__ */ jsx("meta", { property: "og:image:alt", content: ogImageAlt }),
    /* @__PURE__ */ jsx("meta", { property: "og:locale", content: "pl_PL" }),
    /* @__PURE__ */ jsx("meta", { property: "og:url", content: absoluteCanonical }),
    ogType === "article" && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("meta", { property: "article:author", content: "Lemonshine" }),
      /* @__PURE__ */ jsx("meta", { property: "article:section", content: "Czyszczenie" })
    ] }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: twitterCard }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: fullTitle }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:description", content: description }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:image", content: absoluteOgImage }),
    jsonLd && /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify(Array.isArray(jsonLd) ? jsonLd : [jsonLd]) })
  ] });
};
const serviceTabs = [
  { label: "Sprzątanie", to: "/", icon: SprayCan, iconBg: "bg-blue-100 text-blue-600" },
  { label: "Pranie tapicerki", to: "/pranie-tapicerki/", icon: Sofa, iconBg: "bg-orange-100 text-orange-600" },
  { label: "Mycie okien", to: "/mycie-okien/", icon: PanelTop, iconBg: "bg-cyan-100 text-cyan-600" }
];
const quickLinks = [
  { label: "Cennik", to: "/cennik/" },
  { label: "Blog", to: "/blog/" },
  { label: "Kontakt", to: "/#zamow" }
];
const Header = ({ variant = "home" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  const isActive = (to) => {
    if (to === "/") return location.pathname === "/";
    if (to.startsWith("/#")) return false;
    return location.pathname.startsWith(to.replace(/\/$/, ""));
  };
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const handleQuickLinkClick = (to) => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
    if (to.startsWith("/#")) {
      const hash = to.slice(1);
      if (location.pathname === "/") {
        const el = document.querySelector(hash);
        el == null ? void 0 : el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  return /* @__PURE__ */ jsx("header", { className: "fixed top-0 left-0 right-0 z-50 bg-card shadow-sm", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 py-2 md:py-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between py-0", children: [
      /* @__PURE__ */ jsx(Link, { to: "/", onClick: handleLogoClick, className: "flex items-center", children: /* @__PURE__ */ jsx("img", { src: "/104933_LemonShine_Flat_HP_R_01.png", alt: "lemonshine logo", className: "h-8 md:h-10 object-contain rounded-2xl" }) }),
      /* @__PURE__ */ jsxs("nav", { className: "hidden md:flex items-center gap-1 bg-mint-50 rounded-full px-2 py-1", children: [
        serviceTabs.map((tab) => {
          const Icon = tab.icon;
          return /* @__PURE__ */ jsxs(
            Link,
            {
              to: tab.to,
              className: cn(
                "flex items-center gap-2 px-4 py-2 rounded-full text-base font-medium transition-colors",
                isActive(tab.to) ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              ),
              children: [
                /* @__PURE__ */ jsx("span", { className: cn("w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0", tab.iconBg), children: /* @__PURE__ */ jsx(Icon, { className: "w-4 h-4" }) }),
                tab.label
              ]
            },
            tab.label
          );
        }),
        /* @__PURE__ */ jsxs("div", { className: "relative", ref: dropdownRef, children: [
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => setIsDropdownOpen(!isDropdownOpen),
              className: cn(
                "flex items-center gap-1.5 px-4 py-2 rounded-full text-base font-medium transition-colors",
                "text-muted-foreground hover:text-foreground"
              ),
              children: [
                "Szybkie linki",
                /* @__PURE__ */ jsx(ChevronDown, { className: cn("w-4 h-4 transition-transform", isDropdownOpen && "rotate-180") })
              ]
            }
          ),
          isDropdownOpen && /* @__PURE__ */ jsx("div", { className: "absolute top-full right-0 mt-2 w-44 bg-card rounded-xl shadow-lg border border-border py-2 z-50", children: quickLinks.map((link) => /* @__PURE__ */ jsx(
            Link,
            {
              to: link.to,
              onClick: () => handleQuickLinkClick(link.to),
              className: "block px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors",
              children: link.label
            },
            link.label
          )) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "hidden md:flex items-center gap-3", children: [
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "tel:+48662117886",
            onClick: () => trackPhoneClick("header"),
            className: "flex items-center gap-2 border-2 border-mint-500 rounded-full px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors",
            children: [
              /* @__PURE__ */ jsx(Phone, { className: "w-4 h-4 text-mint-500" }),
              "+48 662 117 883"
            ]
          }
        ),
        /* @__PURE__ */ jsx(Button, { asChild: true, className: "rounded-lg bg-lemon-400 hover:bg-lemon-500 text-foreground font-semibold px-6 shadow-none border-none h-10", children: /* @__PURE__ */ jsx("a", { href: "#zamow", children: "Zamów Nasze Usługi" }) })
      ] }),
      /* @__PURE__ */ jsx("button", { className: "md:hidden p-2", onClick: () => setIsMenuOpen(!isMenuOpen), children: isMenuOpen ? /* @__PURE__ */ jsx(X, { className: "w-6 h-6" }) : /* @__PURE__ */ jsx(Menu, { className: "w-6 h-6" }) })
    ] }),
    isMenuOpen && /* @__PURE__ */ jsx("div", { className: "md:hidden mt-4 pt-4 border-t border-border", children: /* @__PURE__ */ jsxs("nav", { className: "flex flex-col space-y-1", children: [
      /* @__PURE__ */ jsx("p", { className: "px-3 pt-1 pb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider", children: "Nasze usługi" }),
      serviceTabs.map((tab) => {
        const Icon = tab.icon;
        return /* @__PURE__ */ jsxs(
          Link,
          {
            to: tab.to,
            onClick: () => setIsMenuOpen(false),
            className: cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium transition-colors",
              isActive(tab.to) ? "bg-lemon-100 text-foreground" : "text-muted-foreground hover:bg-muted"
            ),
            children: [
              /* @__PURE__ */ jsx("span", { className: cn("w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0", tab.iconBg), children: /* @__PURE__ */ jsx(Icon, { className: "w-4 h-4" }) }),
              tab.label
            ]
          },
          tab.label
        );
      }),
      /* @__PURE__ */ jsxs("div", { className: "pt-3 border-t border-border", children: [
        /* @__PURE__ */ jsx("p", { className: "px-3 pt-1 pb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider", children: "Szybkie linki" }),
        quickLinks.map((link) => /* @__PURE__ */ jsx(
          Link,
          {
            to: link.to,
            onClick: () => handleQuickLinkClick(link.to),
            className: "block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors",
            children: link.label
          },
          link.label
        ))
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col space-y-2 pt-3 border-t border-border", children: [
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "tel:+48662117886",
            onClick: () => trackPhoneClick("header_mobile"),
            className: "flex items-center gap-2 px-3 py-2 text-sm text-foreground",
            children: [
              /* @__PURE__ */ jsx(Phone, { className: "w-4 h-4 text-mint-500" }),
              "+48 662 117 883"
            ]
          }
        ),
        /* @__PURE__ */ jsx(Button, { asChild: true, className: "rounded-full bg-lemon-400 hover:bg-lemon-500 text-foreground font-semibold border-none", children: /* @__PURE__ */ jsx("a", { href: "#zamow", onClick: () => setIsMenuOpen(false), children: "Zamów Nasze Usługi" }) })
      ] })
    ] }) })
  ] }) });
};
const Separator = React.forwardRef(
  ({ className, orientation = "horizontal", decorative = true, ...props }, ref) => /* @__PURE__ */ jsx(
    SeparatorPrimitive.Root,
    {
      ref,
      decorative,
      orientation,
      className: cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      ),
      ...props
    }
  )
);
Separator.displayName = SeparatorPrimitive.Root.displayName;
const Footer = () => {
  return /* @__PURE__ */ jsx("footer", { id: "kontakt", className: "bg-foreground text-background", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 py-16", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsx("div", { className: "flex items-center space-x-2", children: /* @__PURE__ */ jsx("img", { src: "/104933_LemonShine_Flat_HP_R_01_1.png", alt: "lemonshine logo", className: "h-8 object-contain rounded-2xl" }) }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Profesjonalne sprzątanie, pranie tapicerki i mycie okien we Wrocławiu. Gwarancja najwyższej jakości usług." }),
        /* @__PURE__ */ jsxs("div", { className: "flex space-x-4", children: [
          /* @__PURE__ */ jsx("a", { href: "https://www.facebook.com/profile.php?id=61576970773440", target: "_blank", className: "w-10 h-10 rounded-full flex items-center justify-center hover:bg-lemon-600 transition-colors", children: /* @__PURE__ */ jsx(Facebook, { className: "w-5 h-5 text-white" }) }),
          /* @__PURE__ */ jsx("a", { href: "https://www.instagram.com/lemonshine_pl/", target: "_blank", className: "w-10 h-10 rounded-full flex items-center justify-center hover:bg-lemon-600 transition-colors", children: /* @__PURE__ */ jsx(Instagram, { className: "w-5 h-5 text-white" }) }),
          /* @__PURE__ */ jsx("a", { href: "https://www.tiktok.com/@lemonshine_pl", target: "_blank", className: "w-10 h-10 rounded-full flex items-center justify-center hover:bg-lemon-600 transition-colors", children: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 text-white", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" }) }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-heading font-bold", children: "Znajdziesz nas na:" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-muted-foreground", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://www.facebook.com/profile.php?id=61576970773440", className: "hover:text-lemon-400 transition-colors", children: "Facebook" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://www.instagram.com/lemonshine_pl/", className: "hover:text-lemon-400 transition-colors", children: "Instagram" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://www.tiktok.com/@lemonshine_pl", className: "hover:text-lemon-400 transition-colors", children: "TikTok" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-heading font-bold", children: "Szybkie Linki" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-muted-foreground", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/pranie-tapicerki/", className: "hover:text-lemon-400 transition-colors", children: "Pranie tapicerki" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/mycie-okien/", className: "hover:text-lemon-400 transition-colors", children: "Mycie okien" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/cennik/", className: "hover:text-lemon-400 transition-colors", children: "Cennik" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/biznes/", className: "hover:text-lemon-400 transition-colors", children: "Sprzątanie dla firm" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/outsourcing/", className: "hover:text-lemon-400 transition-colors", children: "Outsourcing" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/blog/", className: "hover:text-lemon-400 transition-colors", children: "Blog" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/#zamow", className: "hover:text-lemon-400 transition-colors", children: "Kontakt" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-heading font-bold", children: "Kontakt" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4 text-muted-foreground", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
            /* @__PURE__ */ jsx(Phone, { className: "w-5 h-5 text-lemon-400 mt-0.5" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("a", { href: "tel:+48662117886", onClick: () => trackPhoneClick("footer"), className: "font-medium text-background", children: "+48 662 117 886" }),
              /* @__PURE__ */ jsx("div", { className: "text-sm", children: "Poniedziałek - Niedziela" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
            /* @__PURE__ */ jsx(Mail, { className: "w-5 h-5 text-lemon-400 mt-0.5" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("a", { href: "mailto:kontakt.lemonshine@gmail.com", className: "font-medium text-background", children: "kontakt.lemonshine@gmail.com" }),
              /* @__PURE__ */ jsx("div", { className: "text-sm", children: "Odpowiadamy w 24h" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
            /* @__PURE__ */ jsx(MapPin, { className: "w-5 h-5 text-lemon-400 mt-0.5" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "font-medium text-background", children: "Wrocław" }),
              /* @__PURE__ */ jsx("div", { className: "text-sm", children: "Promień 20 km" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
            /* @__PURE__ */ jsx(Clock, { className: "w-5 h-5 text-lemon-400 mt-0.5" }),
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "font-medium text-background", children: "Pn-Nd: 8:00-20:00" }) })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Separator, { className: "my-8 bg-muted-foreground/20" }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-muted-foreground", children: [
      /* @__PURE__ */ jsx("div", { children: "© 2025 Lemonshine. Wszystkie prawa zastrzeże." }),
      /* @__PURE__ */ jsxs("div", { className: "flex space-x-6", children: [
        /* @__PURE__ */ jsx(Link, { to: "/polityka-prywatnosci/", className: "hover:text-lemon-400 transition-colors", children: "Polityka prywatności" }),
        /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-lemon-400 transition-colors", children: "Cookies" })
      ] })
    ] })
  ] }) });
};
const indicators = [
  {
    icon: ShieldCheck,
    title: "0% Ryzyka",
    description: "Płatność dopiero po wykonaniu usługi."
  },
  {
    icon: SprayCan,
    title: "Własny sprzęt i chemia",
    description: "Przyjeżdżamy z pełnym wyposażeniem."
  },
  {
    icon: Clock,
    title: "Terminowość",
    description: "Zawsze na czas, zgodnie z ustaleniami."
  },
  {
    icon: Sparkles,
    title: "Zrobimy to za Ciebie",
    description: "Przyjeżdżamy, robimy swoje i zostawiamy porządek."
  }
];
const TrustIndicators = () => {
  return /* @__PURE__ */ jsx("section", { className: "py-12 bg-background", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto", children: indicators.map((item, index) => {
    const IconComponent = item.icon;
    return /* @__PURE__ */ jsxs(
      "div",
      {
        className: "text-center space-y-3 rounded-2xl border border-border bg-card p-6",
        children: [
          /* @__PURE__ */ jsx("div", { className: "w-14 h-14 rounded-full bg-lemon-100 flex items-center justify-center mx-auto", children: /* @__PURE__ */ jsx(IconComponent, { className: "w-7 h-7 text-lemon-600" }) }),
          /* @__PURE__ */ jsx("h3", { className: "font-heading font-bold text-foreground text-sm md:text-base", children: item.title }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-xs md:text-sm", children: item.description })
        ]
      },
      index
    );
  }) }) }) });
};
const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({ className, variant, ...props }) {
  return /* @__PURE__ */ jsx("div", { className: cn(badgeVariants({ variant }), className), ...props });
}
const frequencyTabs = [
  { id: "weekly", label: "Raz w tygodniu", discount: 0.2, badge: "-20%" },
  { id: "biweekly", label: "Raz na dwa tygodnie", discount: 0.15, badge: "-15%" },
  { id: "monthly", label: "Raz na miesiąc", discount: 0.1, badge: "-10%" },
  { id: "once", label: "Jednorazowo", discount: 0, badge: null }
];
const apartmentPlans = [
  {
    id: "one-room",
    title: "Mieszkanie <40m²",
    basePrice: 248.9,
    description: "Utrzymanie czystości w całym mieszkaniu: odkurzanie, mycie podłóg, łazienka, kuchnia i ścieranie kurzu."
  },
  {
    id: "two-room",
    title: "Mieszkanie <60m²",
    basePrice: 298.9,
    description: "Utrzymanie czystości w całym mieszkaniu: odkurzanie, mycie podłóg, łazienka, kuchnia i ścieranie kurzu."
  },
  {
    id: "three-room",
    title: "Mieszkanie <80m²",
    basePrice: 348.9,
    description: "Utrzymanie czystości w całym mieszkaniu: odkurzanie, mycie podłóg, łazienka, kuchnia i ścieranie kurzu."
  }
];
const calculatePrice = (basePrice, discount) => {
  const price = basePrice * (1 - discount);
  return price.toFixed(2).replace(".", ",");
};
const CleaningPricing = ({ showHeading = true, className }) => {
  const [selectedFrequency, setSelectedFrequency] = useState("weekly");
  const currentTab = frequencyTabs.find((t) => t.id === selectedFrequency);
  const scrollToOrder = () => {
    var _a;
    (_a = document.getElementById("zamow")) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
  };
  return /* @__PURE__ */ jsx("section", { className: cn("py-16 md:py-24 bg-background", className), children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto", children: [
    showHeading && /* @__PURE__ */ jsxs("div", { className: "text-center mb-10", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-heading font-bold text-foreground mb-3", children: "Cennik sprzątania mieszkania" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-base md:text-lg", children: "Sprawdź cenę w zależności od częstotliwości sprzątania" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:flex md:flex-wrap justify-center gap-2 mb-12", children: frequencyTabs.map((tab, index) => /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => setSelectedFrequency(tab.id),
        className: cn(
          "flex items-center justify-center gap-1.5 px-3 py-3 rounded-xl text-sm font-medium transition-all duration-200 border min-h-[60px] md:min-h-0 md:px-5 md:gap-2",
          frequencyTabs.length % 2 !== 0 && index === frequencyTabs.length - 1 && "col-span-2 max-w-[50%] mx-auto md:max-w-none",
          selectedFrequency === tab.id ? "bg-lemon-100 border-lemon-400 text-foreground" : "bg-card border-border text-muted-foreground hover:border-lemon-300"
        ),
        children: [
          tab.badge && /* @__PURE__ */ jsx(Badge, { className: cn(
            "rounded-full text-xs font-bold px-2.5 py-0.5",
            selectedFrequency === tab.id ? "bg-mint-500 text-card" : "bg-mint-400 text-card"
          ), children: tab.badge }),
          /* @__PURE__ */ jsx("span", { className: "text-center", children: tab.label })
        ]
      },
      tab.id
    )) }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6", children: apartmentPlans.map((plan) => {
      const price = calculatePrice(plan.basePrice, currentTab.discount);
      return /* @__PURE__ */ jsxs(
        "div",
        {
          className: "bg-card rounded-2xl border border-border p-6 flex flex-col relative overflow-hidden",
          children: [
            /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-6 w-8 bg-mint-500 rounded-b-lg", style: { height: "52px" } }),
            /* @__PURE__ */ jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsx("h3", { className: "text-xl md:text-2xl font-heading font-bold text-foreground", children: plan.title }) }),
            /* @__PURE__ */ jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsxs("span", { className: "text-3xl md:text-4xl font-heading font-bold text-foreground", children: [
              price,
              " zł"
            ] }) }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-6 flex-1", children: plan.description }),
            /* @__PURE__ */ jsx(
              Button,
              {
                onClick: scrollToOrder,
                className: "w-full rounded-xl bg-lemon-300 hover:bg-lemon-400 text-foreground font-semibold shadow-none",
                children: "Zamów sprzątanie"
              }
            )
          ]
        },
        plan.id
      );
    }) })
  ] }) }) });
};
const checklistItems = [
  { icon: Wind, label: "Odkurzanie podłóg", description: "Odkurzamy wszystkie dostępne powierzchnie" },
  { icon: Droplets, label: "Mycie podłóg", description: "Myjemy wszystkie dostępne powierzchnie" },
  { icon: Feather, label: "Usuwanie kurzu z mebli", description: "Przecieramy meble oraz inne dostępne elementy" },
  { icon: Hand, label: "Czyszczenie elementów dotykowych", description: "Myjemy poręcze, listwy, drzwi oraz włączniki światła" },
  { icon: GlassWater, label: "Mycie luster", description: "Czyścimy lustra, pozostawiając je bez smug" },
  { icon: Trash2, label: "Zbieranie i wynoszenie śmieci", description: "Zbieramy odpady i wynosimy je po sprzątaniu" },
  { icon: Shirt, label: "Składanie i rozwieszanie odzieży", description: "Porządkujemy odzież pozostawioną w widocznych miejscach" },
  { icon: UtensilsCrossed, label: "Mycie naczyń", description: "Myjemy naczynia znajdujące się w zlewie" },
  { icon: CookingPot, label: "Czyszczenie kuchni", description: "Myjemy powieszchownie kuchenkę, zlew oraz blat roboczy" },
  { icon: Refrigerator, label: "Przecieranie AGD", description: "Przecieramy na zewnątrz sprzęty AGD: lodówkę, mikrofale oraz okap" },
  { icon: Bath, label: "Mycie i dezynfekcja toalety", description: "Dokładnie myjemy i dezynfekujemy sedes" },
  { icon: ShowerHead, label: "Czyszczenie łazienki", description: "Myjemy umywalne, wannę lub prysznic (przy dużym stopniu zabrudzenia - liczymy osobno)" }
];
const CleaningChecklist = () => {
  return /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24 bg-muted/30", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
    /* @__PURE__ */ jsxs("h2", { className: "text-2xl md:text-4xl font-heading font-bold text-foreground text-center mb-10", children: [
      "Co obejmuje",
      /* @__PURE__ */ jsx("br", { className: "md:hidden" }),
      " sprzątanie mieszkania?"
    ] }),
    /* @__PURE__ */ jsx("div", { className: "bg-card rounded-2xl border border-border p-4 md:p-0 md:border-0 md:bg-transparent", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-4", children: checklistItems.map((item, index) => {
      const IconComponent = item.icon;
      return /* @__PURE__ */ jsxs(
        "div",
        {
          className: "flex items-center gap-3 md:gap-4 py-3 md:py-0 md:bg-card md:rounded-xl md:p-4 md:border md:border-border border-b border-border last:border-b-0 md:last:border-b md:border-b-border",
          children: [
            /* @__PURE__ */ jsx("div", { className: "w-8 h-8 md:w-10 md:h-10 rounded-lg bg-lemon-100 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsx(IconComponent, { className: "w-4 h-4 md:w-5 md:h-5 text-lemon-600" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("span", { className: "text-foreground font-semibold block text-sm md:text-base", children: item.label }),
              /* @__PURE__ */ jsx("span", { className: "text-xs md:text-sm text-muted-foreground", children: item.description })
            ] })
          ]
        },
        index
      );
    }) }) })
  ] }) }) });
};
const Card = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    ),
    ...props
  }
));
Card.displayName = "Card";
const CardHeader = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5 p-6", className),
    ...props
  }
));
CardHeader.displayName = "CardHeader";
const CardTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "h3",
  {
    ref,
    className: cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  }
));
CardTitle.displayName = "CardTitle";
const CardDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "p",
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
const CardContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("p-6 pt-0", className), ...props }));
CardContent.displayName = "CardContent";
const CardFooter = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("flex items-center p-6 pt-0", className),
    ...props
  }
));
CardFooter.displayName = "CardFooter";
const services$1 = [
  {
    title: "Pranie kanapy",
    subtitle: "Profesjonalne czyszczenie kanap metodą ekstrakcyjną",
    price: "od 200 zł",
    image: "/furniture/23.jpg"
  },
  {
    title: "Pranie narożnika",
    subtitle: "Głębokie pranie narożników z usuwaniem plam",
    price: "od 250 zł",
    image: "/furniture/34.jpg"
  },
  {
    title: "Pranie materaca",
    subtitle: "Czyszczenie i dezynfekcja materacy",
    price: "od 200 zł",
    image: "/furniture/35.jpg"
  },
  {
    title: "Pranie wykładziny",
    subtitle: "Czyszczenie wykładzin i dywanów",
    price: "15-20 zł/m²",
    image: "/furniture/wykladzina.jpg"
  }
];
const AdditionalServices = () => {
  const handleOrderClick = () => {
    var _a;
    (_a = document.getElementById("zamow")) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
  };
  return /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24 bg-background", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-heading font-bold text-foreground mb-4", children: "Dodatkowe usługi" }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-muted-foreground max-w-2xl mx-auto", children: "Profesjonalne pranie tapicerki meblowej i wykładzin w przystępnych cenach." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-8", children: services$1.map((service, index) => /* @__PURE__ */ jsxs(Card, { className: "bg-white shadow-md hover-lift border-0 overflow-hidden rounded-xl", children: [
      /* @__PURE__ */ jsx("div", { className: "aspect-[4/3]", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: service.image,
          alt: service.title,
          className: "w-full h-full object-cover",
          loading: "lazy",
          decoding: "async"
        }
      ) }),
      /* @__PURE__ */ jsxs(CardContent, { className: "p-3 md:p-4", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-heading font-semibold text-foreground text-xs md:text-sm mb-0.5", children: service.title }),
        /* @__PURE__ */ jsx("p", { className: "text-[10px] md:text-xs text-muted-foreground mb-2", children: service.subtitle }),
        /* @__PURE__ */ jsx("p", { className: "text-sm md:text-lg font-bold text-mint-600 mb-2", children: service.price }),
        /* @__PURE__ */ jsx(
          Button,
          {
            size: "sm",
            variant: "outline",
            className: "w-full text-xs px-3 py-1 bg-lemon-100 border-lemon-200 hover:bg-lemon-200 text-foreground",
            onClick: handleOrderClick,
            children: "Zamów →"
          }
        )
      ] })
    ] }, index)) }),
    /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsx(Button, { variant: "outline", size: "lg", className: "border-mint-600 text-mint-600 hover:bg-mint-50", asChild: true, children: /* @__PURE__ */ jsxs(Link, { to: "/cennik/", children: [
      "Zobacz pełny cennik",
      /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 ml-2" })
    ] }) }) })
  ] }) });
};
const Promotions = () => {
  const promotions = [
    {
      icon: /* @__PURE__ */ jsx(Percent, { className: "w-7 h-7 text-card" }),
      title: "Zamówienie powyżej 300zł",
      description: "Na czyszczenie powyżej 300zł - 10% rabatu na całą usługę.",
      badges: ["10% RABATU"]
    },
    {
      icon: /* @__PURE__ */ jsx(Star, { className: "w-7 h-7 text-card" }),
      title: "Zostaw opinię, dostań zniżkę",
      description: "Napisz opinię ze zdjęciem na google, a dostaniesz 10% zniżki!",
      badges: ["10% RABATU"]
    },
    {
      icon: /* @__PURE__ */ jsx(Users, { className: "w-7 h-7 text-card" }),
      title: "Razem z sąsiadem",
      description: "Zamów sprzątanie z sąsiadem, a oboje otrzymacie 20% rabatu!",
      badges: ["20% RABATU"]
    }
  ];
  return /* @__PURE__ */ jsx("section", { className: "py-20 bg-background", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center space-y-4 mb-16", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-heading font-bold text-foreground", children: "Aktualne Promocje" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Skorzystaj z naszych wyjątkowych ofert i oszczędź na sprzątaniu mieszkania" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6", children: promotions.map((promo, index) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "relative border-2 border-mint-400 rounded-2xl p-6 pt-10 bg-card",
        children: [
          /* @__PURE__ */ jsx("div", { className: "absolute -top-4 left-6 flex gap-2", children: promo.badges.map((badge, i) => /* @__PURE__ */ jsx(
            Badge,
            {
              className: `px-3 py-1 font-bold text-xs rounded-full border-none ${i === 0 && promo.badges.length > 1 ? "bg-lemon-400 text-foreground" : "bg-lemon-400 text-foreground"}`,
              children: badge
            },
            i
          )) }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-mint-500 flex items-center justify-center flex-shrink-0", children: promo.icon }),
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-heading font-bold text-foreground", children: promo.title })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: promo.description })
        ]
      },
      index
    )) }),
    /* @__PURE__ */ jsx("div", { className: "mt-10 text-center", children: /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "* Promocje nie łączą się ze sobą. Szczegóły u konsultanta telefonicznego." }) })
  ] }) }) });
};
const testimonials = [
  {
    name: "Anna K.",
    location: "Wrocław",
    text: "Jestem bardzo zadowolona z usługi. Panowie przyjechali punktualnie, pracowali szybko i dokładnie. Kanapa wygląda jak nowa!",
    rating: 5
  },
  {
    name: "Piotr N.",
    location: "Wrocław",
    text: "Profesjonalne podejście do klienta. Sprzątanie mieszkania wykonane perfekcyjnie, wrócę na pewno.",
    rating: 5
  },
  {
    name: "Maria W.",
    location: "Opole",
    text: "Polecam serdecznie! Świetna komunikacja, uczciwa cena i doskonały efekt końcowy. Na pewno skorzystam ponownie.",
    rating: 5
  }
];
const Testimonials = () => {
  return /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24 bg-background", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-heading font-bold text-foreground text-center mb-8", children: "Opinie naszych klientów" }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6", children: testimonials.map((t, index) => /* @__PURE__ */ jsx(Card, { className: "border-0 shadow-lg bg-card", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6 space-y-4", children: [
      /* @__PURE__ */ jsx("div", { className: "flex items-center space-x-1 mb-3", children: [...Array(t.rating)].map((_, i) => /* @__PURE__ */ jsx(Star, { className: "w-5 h-5 fill-yellow-400 text-yellow-400" }, i)) }),
      /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground italic", children: [
        '"',
        t.text,
        '"'
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "pt-3 border-t border-lemon-200", children: [
        /* @__PURE__ */ jsx("div", { className: "font-semibold text-foreground", children: t.name }),
        /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: t.location })
      ] })
    ] }) }, index)) })
  ] }) }) });
};
const stats = [
  { value: "1500+", label: "Wykonanych usług" },
  { value: "100%", label: "Zadowolonych klientów" },
  { value: "5★", label: "Ocen Google" }
];
const StatsBar = () => {
  return /* @__PURE__ */ jsx("section", { className: "py-8", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsx("div", { className: "bg-gradient-to-r from-lemon-100 to-mint-100 rounded-3xl p-8", children: /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-8 text-center", children: stats.map((stat, index) => /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-mint-600 mb-2", children: stat.value }),
    /* @__PURE__ */ jsx("div", { className: "text-muted-foreground", children: stat.label })
  ] }, index)) }) }) }) });
};
const Input = React.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";
const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
const Label = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  LabelPrimitive.Root,
  {
    ref,
    className: cn(labelVariants(), className),
    ...props
  }
));
Label.displayName = LabelPrimitive.Root.displayName;
const Textarea = React.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "textarea",
      {
        className: cn(
          "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Textarea.displayName = "Textarea";
const Checkbox = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  CheckboxPrimitive.Root,
  {
    ref,
    className: cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx(
      CheckboxPrimitive.Indicator,
      {
        className: cn("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" })
      }
    )
  }
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;
const SUPABASE_URL = "https://cdqolplrdwwxdbnlgize.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNkcW9scGxyZHd3eGRibmxnaXplIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYyMDgxNzUsImV4cCI6MjA2MTc4NDE3NX0.NKfhlpfZgrWw5O53DqSvvpr43xgTJyryt4pqCk_bwKg";
const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true
  }
});
const OrderForm = ({ source = "website" }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    date: "",
    time: "",
    description: "",
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.consent) {
      toast.error("Musisz wyrazić zgodę na przetwarzanie danych osobowych");
      return;
    }
    setIsSubmitting(true);
    try {
      const leadData = {
        name: formData.name,
        phone: formData.phone,
        address: formData.address,
        city: formData.city || null,
        preferred_date: formData.date || null,
        preferred_time: formData.time || null,
        description: formData.description || null
      };
      const leadId = crypto.randomUUID();
      console.log("Submitting lead data:", leadData);
      const { error } = await supabase.from("leads").insert({ ...leadData, id: leadId, source });
      if (error) {
        console.error("Database error:", error);
        toast.error("Wystąpił błąd podczas zapisywania. Spróbuj ponownie.");
        return;
      }
      console.log("Lead created successfully, id:", leadId);
      const sendNotification = async (retryCount = 0) => {
        try {
          await supabase.functions.invoke("send-lead-gleb", {
            body: {
              leadId,
              name: formData.name,
              phone: formData.phone,
              address: formData.address,
              city: formData.city,
              preferred_date: formData.date,
              preferred_time: formData.time,
              description: formData.description,
              source
            }
          });
          console.log("Telegram notification sent successfully");
        } catch (telegramError) {
          console.error(`Failed to send Telegram notification (attempt ${retryCount + 1}):`, telegramError);
          if (retryCount < 1) {
            setTimeout(() => sendNotification(retryCount + 1), 2e3);
          }
        }
      };
      sendNotification();
      trackFormSubmission({
        preferred_date: formData.date,
        preferred_time: formData.time
      });
      trackConversion();
      toast.success("Dziękujemy! Skontaktujemy się z Tobą w ciągu 30 minut.");
      setFormData({
        name: "",
        phone: "",
        address: "",
        city: "",
        date: "",
        time: "",
        description: "",
        consent: false
      });
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Wystąpił błąd podczas wysyłania formularza.");
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };
  return /* @__PURE__ */ jsx("section", { id: "zamow", className: "py-16 gradient-hero scroll-mt-28", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-2xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center space-y-4 mb-12", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-heading font-bold text-foreground", children: "Zamów Sprzątanie" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground", children: "Wypełnij formularz, a wkrótce się z Tobą skontaktujemy" })
    ] }),
    /* @__PURE__ */ jsxs(Card, { className: "shadow-2xl border-0 bg-white/95 backdrop-blur-sm", children: [
      /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { className: "text-2xl font-heading text-center text-foreground", children: "Dane kontaktowe" }) }),
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("form", { lang: "pl", onSubmit: handleSubmit, className: "space-y-5", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "name", children: "Imię i nazwisko *" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              id: "name",
              value: formData.name,
              onChange: (e) => handleInputChange("name", e.target.value),
              required: true,
              className: "border-lemon-200"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "phone", children: "Telefon *" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              id: "phone",
              type: "tel",
              value: formData.phone,
              onChange: (e) => handleInputChange("phone", e.target.value),
              required: true,
              placeholder: "+48 123 456 789",
              className: "border-lemon-200"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "address", children: "Adres *" }),
          /* @__PURE__ */ jsx(
            Textarea,
            {
              id: "address",
              value: formData.address,
              onChange: (e) => handleInputChange("address", e.target.value),
              required: true,
              placeholder: "Ulica, numer, kod pocztowy",
              className: "border-lemon-200"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "city", children: "Miasto *" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              id: "city",
              value: formData.city,
              onChange: (e) => handleInputChange("city", e.target.value),
              required: true,
              placeholder: "np. Wrocław, Opole",
              className: "border-lemon-200"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "description", children: "Dodatkowe informacje" }),
          /* @__PURE__ */ jsx(
            Textarea,
            {
              id: "description",
              value: formData.description,
              onChange: (e) => handleInputChange("description", e.target.value),
              placeholder: "Dodatkowe uwagi, szczegóły...",
              className: "border-lemon-200"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-2 p-4 bg-lemon-50 rounded-lg", children: [
          /* @__PURE__ */ jsx(
            Checkbox,
            {
              id: "consent",
              checked: formData.consent,
              onCheckedChange: (checked) => handleInputChange("consent", checked)
            }
          ),
          /* @__PURE__ */ jsx(Label, { htmlFor: "consent", className: "text-sm text-muted-foreground leading-relaxed", children: "Wyrażam zgodę na przetwarzanie moich danych osobowych w celu realizacji zamówienia oraz kontaktu związanego z usługą. *" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxs(
            Button,
            {
              type: "submit",
              size: "lg",
              className: "hover:opacity-90 hover-lift px-12 w-full sm:w-auto",
              disabled: isSubmitting,
              children: [
                /* @__PURE__ */ jsx(Phone, { className: "w-5 h-5 mr-2" }),
                isSubmitting ? "Wysyłanie..." : "Wyślij zamówienie"
              ]
            }
          ),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mt-2", children: "Wkrótce się z Tobą skontaktujemy!" })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-8 grid md:grid-cols-3 gap-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center p-4 bg-white/80 rounded-lg", children: [
        /* @__PURE__ */ jsx(Phone, { className: "w-8 h-8 mx-auto mb-2 text-mint-600" }),
        /* @__PURE__ */ jsx("div", { className: "font-semibold", children: "Telefon" }),
        /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: /* @__PURE__ */ jsx("a", { href: "tel:+48662117886", onClick: () => trackPhoneClick("order_form"), className: "font-medium", children: "+48 662 117 886" }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "text-center p-4 bg-white/80 rounded-lg", children: [
        /* @__PURE__ */ jsx(Clock, { className: "w-8 h-8 mx-auto mb-2 text-mint-600" }),
        /* @__PURE__ */ jsx("div", { className: "font-semibold", children: "Godziny pracy" }),
        /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: "Pn-Nd: 8:00-20:00" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "text-center p-4 bg-white/80 rounded-lg", children: [
        /* @__PURE__ */ jsx(MapPin, { className: "w-8 h-8 mx-auto mb-2 text-mint-600" }),
        /* @__PURE__ */ jsx("div", { className: "font-semibold", children: "Obszar działania" }),
        /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: "Wrocław (20 km)" })
      ] })
    ] })
  ] }) }) });
};
const Accordion = AccordionPrimitive.Root;
const AccordionItem = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AccordionPrimitive.Item,
  {
    ref,
    className: cn("border-b", className),
    ...props
  }
));
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(AccordionPrimitive.Header, { className: "flex", children: /* @__PURE__ */ jsxs(
  AccordionPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 shrink-0 transition-transform duration-200" })
    ]
  }
) }));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(
  AccordionPrimitive.Content,
  {
    ref,
    className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props,
    children: /* @__PURE__ */ jsx("div", { className: cn("pb-4 pt-0", className), children })
  }
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;
const FAQ = () => {
  const handleOrderClick = () => {
    const orderSection = document.getElementById("zamow");
    if (orderSection) {
      orderSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const faqs2 = [
    {
      question: "Jak długo trwa sprzątanie mieszkania?",
      answer: "Czas sprzątania zależy od metrażu i stopnia zabrudzenia. Zazwyczaj trwa od 2 do 4 godzin."
    },
    {
      question: "Czy muszę być w mieszkaniu podczas sprzątania?",
      answer: "Nie, nie ma takiej potrzeby. Wiele osób przekazuje nam klucze lub udostępnia mieszkanie pod swoją nieobecność."
    },
    {
      question: "Czy muszę mieć własny sprzęt i chemię?",
      answer: "Nie, przyjeżdżamy z własnym sprzętem oraz profesjonalnymi środkami czystości."
    },
    {
      question: "Jak wygląda płatność za usługę?",
      answer: "Płatność odbywa się po wykonaniu usługi gotówką, blikiem, lub przelewem."
    },
    {
      question: "Jak mogę zamówić sprzątanie?",
      answer: "Wystarczy skontaktować się z nami telefonicznie lub przez formularz na stronie."
    },
    {
      question: "Czy sprzątacie w weekendy lub wieczorami?",
      answer: "Tak, oferujemy elastyczne terminy, również w weekendy i po godzinach pracy."
    }
  ];
  return /* @__PURE__ */ jsx("section", { className: "py-20 bg-background", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center space-y-4 mb-12", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-heading font-bold text-foreground", children: "Często Zadawane Pytania" }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-muted-foreground", children: "Znajdź odpowiedzi na najczęściej zadawane pytania" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "bg-white rounded-3xl shadow-xl p-8", children: /* @__PURE__ */ jsx(Accordion, { type: "single", collapsible: true, className: "space-y-4", children: faqs2.map((faq, index) => /* @__PURE__ */ jsxs(AccordionItem, { value: `item-${index}`, className: "border border-lemon-200 rounded-lg px-6", children: [
      /* @__PURE__ */ jsx(AccordionTrigger, { className: "text-left font-semibold text-foreground hover:text-mint-600", children: faq.question }),
      /* @__PURE__ */ jsx(AccordionContent, { className: "text-muted-foreground pb-4", children: faq.answer })
    ] }, index)) }) }),
    /* @__PURE__ */ jsxs("div", { className: "mt-12 text-center space-y-6", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-2xl font-heading font-bold text-foreground", children: "Nie znalazłeś odpowiedzi na swoje pytanie?" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Skontaktuj się z nami bezpośrednio - chętnie udzielimy szczegółowych informacji" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
        /* @__PURE__ */ jsxs(Button, { onClick: handleOrderClick, size: "lg", className: "hover:opacity-90", children: [
          /* @__PURE__ */ jsx(MessageCircle, { className: "w-5 h-5 mr-2" }),
          "Zadaj pytanie"
        ] }),
        /* @__PURE__ */ jsx(Button, { size: "lg", variant: "outline", className: "border-mint-600 text-mint-600 hover:bg-mint-50", asChild: true, children: /* @__PURE__ */ jsx("a", { href: "tel:+48662117886", onClick: () => trackPhoneClick("faq"), children: "Zadzwoń: +48 662 117 886" }) })
      ] })
    ] })
  ] }) }) });
};
const Home = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Lemonshine",
    "description": "Profesjonalne usługi sprzątania i czyszczenia tapicerki w Opolu i Wrocławiu",
    "url": "https://lemonshine.pl",
    "logo": "https://lemonshine.pl/lemonshine.png",
    "telephone": "+48 662 117 886",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Wrocław",
      "addressRegion": "Dolnośląskie",
      "addressCountry": "PL"
    },
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61576970773440",
      "https://www.instagram.com/lemonshine_pl/",
      "https://www.tiktok.com/@lemonshine_pl"
    ]
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen flex flex-col bg-background", children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: "Lemonshine - Sprzątanie Wrocław | Profesjonalne Usługi",
        description: "Profesjonalne sprzątanie mieszkań i obiektów we Wrocławiu i Opolu. Robimy porządki w mieszkaniach i na dużych obiektach. Zamów online!",
        canonical: "https://lemonshine.pl/",
        jsonLd: [jsonLd]
      }
    ),
    /* @__PURE__ */ jsx(Header, { variant: "home" }),
    /* @__PURE__ */ jsxs("main", { className: "flex-1 pt-16", children: [
      /* @__PURE__ */ jsxs("section", { className: "relative min-h-[480px] md:min-h-[560px] flex items-center overflow-hidden", children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute inset-0 bg-cover bg-center",
            style: { backgroundImage: "url(/heroImg-home.png)" }
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-background/10" }),
        /* @__PURE__ */ jsx("div", { className: "relative z-10 container mx-auto px-4 py-16 md:py-24", children: /* @__PURE__ */ jsxs("div", { className: "max-w-2xl mx-auto text-center", children: [
          /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-3", children: "Sprzątanie Wrocław" }),
          /* @__PURE__ */ jsx("p", { className: "text-base md:text-lg text-foreground/70 mb-8", children: "Robimy porządki w mieszkaniach i na dużych obiektach" }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
            /* @__PURE__ */ jsx(
              Button,
              {
                size: "lg",
                className: "bg-lemon-400 hover:bg-lemon-500 text-foreground font-bold text-base md:text-xl px-8 py-4 md:px-16 md:py-7 shadow-none border border-lemon-400 hover-lift font-[Poppins] h-auto",
                asChild: true,
                children: /* @__PURE__ */ jsx("a", { href: "#zamow", children: "Zamów sprzątanie" })
              }
            ),
            /* @__PURE__ */ jsx(
              Button,
              {
                size: "lg",
                variant: "outline",
                className: "bg-card/80 backdrop-blur-sm border-2 border-mint-600 text-foreground hover:bg-card font-bold text-base md:text-xl px-8 py-4 md:px-16 md:py-7 hover-lift font-[Poppins] h-auto",
                asChild: true,
                children: /* @__PURE__ */ jsx("a", { href: "#cennik", children: "Sprawdź cennik" })
              }
            )
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx(TrustIndicators, {}),
      /* @__PURE__ */ jsx("div", { id: "cennik", children: /* @__PURE__ */ jsx(CleaningPricing, {}) }),
      /* @__PURE__ */ jsx(CleaningChecklist, {}),
      /* @__PURE__ */ jsx(AdditionalServices, {}),
      /* @__PURE__ */ jsx(Promotions, {}),
      /* @__PURE__ */ jsx(Testimonials, {}),
      /* @__PURE__ */ jsx(StatsBar, {}),
      /* @__PURE__ */ jsx(OrderForm, { source: "sprzątanie" }),
      /* @__PURE__ */ jsx(FAQ, {})
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
const Hero = () => {
  const handleOrderClick = () => {
    const orderSection = document.getElementById("zamow");
    if (orderSection) {
      orderSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return /* @__PURE__ */ jsxs("section", { className: "pt-28 md:pt-36 pb-16 gradient-hero relative overflow-hidden", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 opacity-20 pointer-events-none -z-10", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-20 left-10 w-20 h-20 rounded-full bg-lemon-400 animate-float" }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-40 right-20 w-16 h-16 rounded-full bg-mint-400 animate-float", style: { animationDelay: "1s" } }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-20 left-1/4 w-12 h-12 rounded-full bg-lemon-300 animate-float", style: { animationDelay: "2s" } })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("h1", { className: "text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight text-foreground", children: [
            "Profesjonalne",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-mint-600", children: "Pranie Tapicerki" }),
            " ",
            "meblowej i wykładzin"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xl leading-relaxed text-muted-foreground", children: "Usuwamy plamy, roztocze i nieprzyjemny zapach z kanap i wykładzin. Gwarancja widocznego efektu już po pierwszym praniu." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-3", children: [
          /* @__PURE__ */ jsx(
            Button,
            {
              onClick: handleOrderClick,
              className: "w-full sm:flex-1 hover-lift h-10 text-sm md:h-11 md:text-base md:px-8",
              children: "Zamów Pranie Tapicerki"
            }
          ),
          /* @__PURE__ */ jsx(
            Button,
            {
              variant: "outline",
              className: "w-full sm:flex-1 border-mint-600 text-mint-600 hover:bg-mint-50 hover-lift h-10 text-sm md:h-11 md:text-base md:px-8",
              asChild: true,
              children: /* @__PURE__ */ jsx(Link, { to: "/cennik/?tab=upholstery", children: "Zobacz zakres usług" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "block text-center", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: "/heroImg.webp",
          alt: "Profesjonalne pranie tapicerki - nowoczesny sprzęt i bezpieczne środki",
          className: "mx-auto mb-4 w-full max-w-md lg:max-w-xl object-contain rounded-2xl shadow-lg",
          loading: "eager",
          fetchPriority: "high",
          width: "600",
          height: "400",
          decoding: "sync"
        }
      ) })
    ] }) })
  ] });
};
const About = () => {
  const problems = [
    {
      icon: Droplets,
      title: "Widoczne plamy",
      description: "Plamy, których nie da się usunąć zwykłym odkurzaniem ani domowymi środkami"
    },
    {
      icon: Wind,
      title: "Nieprzyjemne zapachy",
      description: "Tapicerka chłonie zapachy zwierząt, dymu lub wilgoci, nawet po sprzątaniu"
    },
    {
      icon: Bug,
      title: "Kurz i alergeny",
      description: "W tkaninach gromadzi się kurz i alergeny, niewidoczne na pierwszy rzut oka"
    },
    {
      icon: XCircle,
      title: "Brak efektu",
      description: "Samodzielne pranie nie usuwa zabrudzeń, a tapicerka szybko wraca do poprzedniego stanu"
    }
  ];
  const steps = [
    { icon: Search, label: "Przegląd mebla", color: "bg-lemon-400 text-foreground" },
    { icon: SprayCan, label: "Nanoszenie presprayu", color: "bg-lemon-400 text-foreground" },
    { icon: Waves, label: "Ekstrakcja", color: "bg-lemon-400 text-foreground" },
    { icon: Fan, label: "Suszenie", color: "bg-mint-500 text-card", badge: "Opcjonalnie" },
    { icon: ShieldCheck, label: "Impregnacja", color: "bg-mint-500 text-card", badge: "Opcjonalnie" }
  ];
  return /* @__PURE__ */ jsx("section", { id: "onas", className: "py-16 bg-lemon-50/50 scroll-mt-28", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center space-y-4 mb-12", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-heading font-bold text-foreground", children: "Najczęstsze problemy z tapicerką w domu" }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-muted-foreground mx-auto max-w-[48rem] text-balance leading-snug", children: "Codzienne użytkowanie sprawia, że tapicerka traci świeżość, chłonie zapachy i z czasem przestaje wyglądać tak, jak powinna." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 items-stretch", children: problems.map((problem, index) => /* @__PURE__ */ jsx(Card, { className: "h-full border-0 shadow-lg hover-lift bg-white/80 backdrop-blur-sm", children: /* @__PURE__ */ jsx(CardContent, { className: "h-full p-6", children: /* @__PURE__ */ jsxs("div", { className: "flex h-full flex-col items-center text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "w-16 h-16 mb-2 rounded-full bg-mint-100 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsx(problem.icon, { className: "w-8 h-8 text-mint-600" }) }),
      /* @__PURE__ */ jsx("h3", { className: "mt-2 text-xl font-heading font-semibold text-foreground leading-7 min-h-14 overflow-hidden", children: problem.title }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-muted-foreground leading-6 min-h-[72px] overflow-hidden", children: problem.description }),
      /* @__PURE__ */ jsx("div", { className: "mt-auto" })
    ] }) }) }, index)) }),
    /* @__PURE__ */ jsx("div", { className: "md:hidden bg-card rounded-2xl shadow-lg overflow-hidden", children: problems.map((problem, index) => /* @__PURE__ */ jsxs("div", { className: `flex items-start gap-4 p-4 ${index < problems.length - 1 ? "border-b border-border" : ""}`, children: [
      /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-full bg-mint-100 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsx(problem.icon, { className: "w-6 h-6 text-mint-600" }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-base font-heading font-semibold text-foreground", children: problem.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-muted-foreground leading-snug", children: problem.description })
      ] })
    ] }, index)) }),
    /* @__PURE__ */ jsx("div", { className: "mt-16 bg-card rounded-3xl p-8 md:p-12 shadow-xl", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-10 items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-2xl md:text-3xl font-heading font-bold text-foreground", children: "Nasze rozwiązanie" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Oferujemy profesjonalne pranie tapicerki meblowej, dopasowane do rodzaju tkaniny i stopnia zabrudzeń." }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Usuwamy plamy, zapachy oraz alergeny, bez ryzyka uszkodzeń, gwarantując efekt świeżości na tapicerce. Dzięki odpowiedniej technologii prania meble szybko schną i wracają do codziennego użytkowania." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-col items-start gap-0 lg:pl-24", children: steps.map((step, index) => {
        const IconComp = step.icon;
        return /* @__PURE__ */ jsxs(React__default.Fragment, { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsx("div", { className: `w-14 h-14 rounded-full ${step.color} flex items-center justify-center flex-shrink-0`, children: /* @__PURE__ */ jsx(IconComp, { className: "w-7 h-7" }) }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-foreground font-semibold text-lg", children: step.label }),
              step.badge && /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs font-medium border-border text-muted-foreground", children: step.badge })
            ] })
          ] }),
          index < steps.length - 1 && /* @__PURE__ */ jsx("div", { className: `w-0.5 h-6 ml-7 ${index < 2 ? "bg-lemon-400" : "bg-mint-500"}` })
        ] }, index);
      }) })
    ] }) })
  ] }) });
};
const pricingItems = [
  {
    name: "Pranie 2-osobowej kanapy",
    subtitle: "do 1,7 m.",
    price: "200 zł",
    image: "/furniture/23.jpg",
    popular: true
  },
  {
    name: "Pranie 3-osobowej kanapy",
    subtitle: "1,7-2.5 m.",
    price: "230 zł",
    image: "/furniture/25.jpg",
    popular: true
  },
  {
    name: "Pranie średniego naróżnika",
    subtitle: "do 2,5×1,5 m.",
    price: "250 zł",
    image: "/furniture/34.jpg",
    popular: false
  },
  {
    name: "Pranie dużego narożnika",
    subtitle: "od 2,5×1,5 m.",
    price: "300+ zł",
    image: "/furniture/33.jpg",
    popular: false
  },
  {
    name: "Pranie fotela",
    subtitle: "dużego",
    price: "100 zł",
    image: "/furniture/28.jpg",
    popular: false
  },
  {
    name: "Pranie elementu rozkładanego",
    subtitle: "kanapy",
    price: "50 zł",
    image: "/furniture/30.jpg",
    popular: false
  },
  {
    name: "Pranie materaca",
    subtitle: "z jednej strony",
    price: "250+ zł",
    image: "/furniture/35.jpg",
    popular: true
  },
  {
    name: "Pranie osobnej poduszki",
    subtitle: "od kanapy",
    price: "30+ zł",
    image: "/furniture/pranie_osobnej_poduszki.jpg",
    popular: false
  },
  {
    name: "Pranie krzesła",
    subtitle: "konferencyjnego",
    price: "30 zł",
    image: "/furniture/pranie_krzesla.jpg",
    popular: false
  },
  {
    name: "Pranie krzesła tapicerowanego",
    subtitle: "siedzenie",
    price: "20 zł",
    image: "/furniture/pranie_krzesla_tapicerowanego.jpg",
    popular: false
  },
  {
    name: "Pranie fotela małego",
    subtitle: "bez oparć tapicerowanych",
    price: "50 zł",
    image: "/furniture/pranie_fotela_malego.jpg",
    popular: false
  },
  {
    name: "Pranie krzesła biurowego",
    subtitle: "obrotowego",
    price: "30 zł",
    image: "/furniture/pranie_krzesla_biurowego.jpg",
    popular: false
  },
  {
    name: "Pranie krzesła z oparciem",
    subtitle: "okrągłe",
    price: "40 zł",
    image: "/furniture/pranie_krzesla_z_oparciem.jpg",
    popular: false
  },
  {
    name: "Pranie kanapy w krztałcie U",
    subtitle: "duża",
    price: "350+ zł",
    image: "/furniture/36.jpg",
    popular: false
  },
  {
    name: "Pranie wykładziny",
    subtitle: "1m2",
    price: "15 - 20 zł",
    image: "/furniture/wykladzina.jpg",
    popular: true
  }
];
const cleaningPricingItems = [
  {
    name: "Mycie naczyń",
    subtitle: "leżące w umywalce",
    price: "20 zł",
    image: "/cleaning/mycie_naczyn.jpg",
    popular: true
  },
  {
    name: "Mycie mikrofali",
    subtitle: "",
    price: "15 zł",
    image: "/cleaning/mycie_mikrofali.jpg",
    popular: true
  },
  {
    name: "Mycie piekarnika",
    subtitle: "",
    price: "10-60 zł",
    image: "/cleaning/mycie_piekarnika.jpg",
    popular: true
  },
  {
    name: "Mycie okapu",
    subtitle: "",
    price: "10-60 zł",
    image: "/cleaning/mycie_okapu.jpg",
    popular: false
  },
  {
    name: "Sprzątanie szafek kuchennych",
    subtitle: "",
    price: "10-40 zł",
    image: "/cleaning/sprzatanie_szafek_kuchennych.jpg",
    popular: false
  },
  {
    name: "Czyszczenie lodówki",
    subtitle: "",
    price: "50 zł",
    image: "/cleaning/czyszczenie_lodowki.jpg",
    popular: false
  },
  {
    name: "Sprzątanie balkonu",
    subtitle: "",
    price: "10 zł",
    image: "/cleaning/sprzatanie_balkonu.jpg",
    popular: false
  },
  {
    name: "Mycie zmywarki",
    subtitle: "",
    price: "20-50 zł",
    image: "/cleaning/mycie_zmywarki.jpg",
    popular: false
  },
  {
    name: "Mycie prysznicu/wanny",
    subtitle: "",
    price: "20-100 zł",
    image: "/cleaning/mycie_prysznicuwanny.jpg",
    popular: false
  }
];
const windowPricingItems = [
  {
    name: "Mycie okna",
    subtitle: "",
    price: "30-100 zł",
    image: "/window/window-1.jpg",
    popular: true
  },
  {
    name: "Umycie obudowy balkonu",
    subtitle: "szyby",
    price: "od 20 zł",
    image: "/window/window-2.jpg",
    popular: true
  },
  {
    name: "Mycie paneli szklanych",
    subtitle: "1 m²",
    price: "20 zł",
    image: "/window/window-3.jpg",
    popular: false
  }
];
const Services = () => {
  const popularItems = pricingItems.filter((item) => item.popular).slice(0, 4);
  const handleOrderClick = () => {
    var _a;
    (_a = document.getElementById("zamow")) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
  };
  return /* @__PURE__ */ jsx("section", { id: "oferta", className: "py-20 bg-gradient-subtle", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-heading font-bold text-foreground mb-4", children: "Cennik Prania Tapicerki" }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-muted-foreground max-w-2xl mx-auto", children: "Sprawdź cennik na pranie tapicerki meblowej i zamów usługę już teraz!" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-8", children: popularItems.map((item, index) => /* @__PURE__ */ jsxs(Card, { className: "bg-white shadow-md hover-lift border-0 overflow-hidden rounded-xl", children: [
      /* @__PURE__ */ jsx("div", { className: "aspect-[4/3]", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: item.image,
          alt: item.name,
          className: "w-full h-full object-cover",
          loading: "lazy",
          decoding: "async"
        }
      ) }),
      /* @__PURE__ */ jsxs(CardContent, { className: "p-3 md:p-4", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-heading font-semibold text-foreground text-xs md:text-sm mb-0.5", children: item.name }),
        item.subtitle && /* @__PURE__ */ jsx("p", { className: "text-[10px] md:text-xs text-muted-foreground mb-2", children: item.subtitle }),
        /* @__PURE__ */ jsx("p", { className: "text-sm md:text-lg font-bold text-mint-600 mb-2", children: item.price }),
        /* @__PURE__ */ jsx(
          Button,
          {
            size: "sm",
            variant: "outline",
            className: "w-full text-xs px-3 py-1 bg-lemon-100 border-lemon-200 hover:bg-lemon-200 text-foreground",
            onClick: handleOrderClick,
            children: "Zamów →"
          }
        )
      ] })
    ] }, index)) }),
    /* @__PURE__ */ jsxs("div", { className: "mt-8 text-center space-y-4", children: [
      /* @__PURE__ */ jsx("div", { className: "inline-block bg-lemon-100 text-foreground px-6 py-3 rounded-lg text-sm font-semibold", children: "⚠️ Minimalna kwota zamówienia: 150 zł" }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Link, { to: "/cennik/", className: "text-mint-600 hover:text-mint-700 font-medium underline underline-offset-4", children: "Zobacz pełny cennik →" }) })
    ] })
  ] }) });
};
const Results = () => {
  const handleOrderClick = () => {
    const orderSection = document.getElementById("zamow");
    if (orderSection) {
      orderSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const results = [
    { id: 1, before: "/before_after/9.jpg", after: "/before_after/10.jpg" },
    { id: 2, before: "/before_after/11.jpg", after: "/before_after/12.jpg" },
    { id: 3, before: "/before_after/13.jpg", after: "/before_after/14.jpg" },
    { id: 4, before: "/before_after/15.jpg", after: "/before_after/16.jpg" },
    { id: 5, before: "/before_after/17.jpg", after: "/before_after/18.jpg" },
    { id: 6, before: "/before_after/19.jpg", after: "/before_after/20.jpg" },
    { id: 7, before: "/before_after/21.jpg", after: "/before_after/22.jpg" },
    { id: 8, before: "/before_after/24.jpg", after: "/before_after/23.jpg" }
  ];
  const testimonials2 = [
    {
      name: "Anna K.",
      location: "Wrocław",
      text: "Niesamowity efekt! Kanapa wygląda jak nowa. Profesjonalna obsługa i terminowość na najwyższym poziomie.",
      rating: 5
    },
    {
      name: "Piotr N.",
      location: "Wrocław",
      text: "Polecam! Trudne plamy zniknęły bez śladu. Szybko, profesjonalnie i w dobrej cenie.",
      rating: 5
    },
    {
      name: "Maria W.",
      location: "Opole",
      text: "Fantastyczny serwis! Dywan po czyszczeniu pachnie świeżością. Na pewno będę korzystać ponownie.",
      rating: 5
    }
  ];
  return /* @__PURE__ */ jsx("section", { id: "realizacje", className: "py-16 bg-background scroll-mt-28", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center space-y-4 mb-12", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-heading font-bold text-foreground", children: "Zobacz Efekt Prania Tapicerki" }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-muted-foreground max-w-2xl mx-auto", children: "Nasze realizacje mówią same za siebie. Każdy projekt to transformacja Twoich mebli." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16", children: results.map((r) => /* @__PURE__ */ jsx(Card, { className: "border-0 shadow-lg hover-lift overflow-hidden bg-white p-0", children: /* @__PURE__ */ jsx(
      ReactBeforeSliderComponent,
      {
        firstImage: { imageUrl: r.before, alt: "Przed czyszczeniem" },
        secondImage: { imageUrl: r.after, alt: "Po czyszczeniu" },
        currentPercentPosition: 50,
        delimiterColor: "#ffffff",
        className: "w-full"
      }
    ) }, r.id)) }),
    /* @__PURE__ */ jsx("div", { className: "text-center mb-16", children: /* @__PURE__ */ jsxs(
      Button,
      {
        onClick: handleOrderClick,
        size: "lg",
        className: "hover:opacity-90 hover-lift",
        children: [
          "Zamów pranie dla swojej tapicerki",
          /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5 ml-2" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-2xl md:text-3xl font-heading font-bold text-center text-foreground", children: "Opinie naszych klientów" }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6", children: testimonials2.map((testimonial, index) => /* @__PURE__ */ jsx(Card, { className: "border-0 shadow-lg bg-white", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6 space-y-4", children: [
        /* @__PURE__ */ jsx("div", { className: "flex items-center space-x-1 mb-3", children: [...Array(testimonial.rating)].map((_, i) => /* @__PURE__ */ jsx(Star, { className: "w-5 h-5 fill-yellow-400 text-yellow-400" }, i)) }),
        /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground italic", children: [
          '"',
          testimonial.text,
          '"'
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "pt-3 border-t border-lemon-200", children: [
          /* @__PURE__ */ jsx("div", { className: "font-semibold text-foreground", children: testimonial.name }),
          /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: testimonial.location })
        ] })
      ] }) }, index)) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-16 bg-gradient-to-r from-lemon-100 to-mint-100 rounded-3xl p-8", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-8 text-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-mint-600 mb-2", children: "1500+" }),
        /* @__PURE__ */ jsx("div", { className: "text-muted-foreground", children: "Wykonanych usług" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-mint-600 mb-2", children: "100%" }),
        /* @__PURE__ */ jsx("div", { className: "text-muted-foreground", children: "Zadowolonych klientów" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-mint-600 mb-2", children: "5★" }),
        /* @__PURE__ */ jsx("div", { className: "text-muted-foreground", children: "Średnia ocen Google" })
      ] })
    ] }) })
  ] }) });
};
const Equipment = () => {
  return /* @__PURE__ */ jsxs("section", { className: "relative py-20 overflow-hidden", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute inset-0 bg-cover bg-center bg-fixed bg-no-repeat",
        style: {
          backgroundImage: `url(/IMG_6664.JPG)`
        },
        children: /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/60" })
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "relative z-10 container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center text-white", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-heading font-bold mb-6", children: "Profesjonalna chemia i sprzęt od sprawdzonych producentów" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl leading-relaxed opacity-90", children: "Stosujemy wyłącznie skuteczne i bezpieczne środki czyszczące oraz sprzęt klasy premium, używany przez profesjonalistów w branży prania tapicerki." }),
      /* @__PURE__ */ jsxs("div", { className: "flex justify-center items-center gap-8 mt-12", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "/karcher_logo.png",
            alt: "Kärcher",
            className: "h-[150px] w-auto object-contain"
          }
        ),
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "/chemspec_logo.png",
            alt: "ChemSpec",
            className: "h-[150px] w-auto"
          }
        )
      ] })
    ] }) })
  ] });
};
const blogPosts = [
  {
    id: 1,
    slug: "czy-warto-samemu-prac-tapicerke-meblowa",
    title: "Czy warto samemu prać tapicerkę meblową?",
    subtitle: "Domowe sposoby kontra profesjonalne czyszczenie – sprawdź, co naprawdę działa.",
    excerpt: "Wiele osób próbuje radzić sobie samemu z czyszczeniem tapicerki. Sprawdź, kiedy domowe metody mają sens, a kiedy lepiej zaufać profesjonalistom.",
    author: "Ekspert Lemonshine",
    date: "2024-01-20",
    category: "Porady",
    readTime: "6 min",
    mainPicture: "/Czy_warto_samemu_prac_tapicerke_meblowa.jpg",
    content: [
      {
        type: "paragraph",
        content: "Wiele osób próbuje radzić sobie samemu - trochę wody, płyn do naczyń, soda albo wynajęty odkurzacz piorący. Przy świeżych plamach to działa - jeśli rozleje się kawa czy sok, szybka reakcja w domu potrafi lekko oświetlić plamę - ale nie zawsze ostatecznie usunąć."
      },
      {
        type: "image",
        content: "/blogPic/cup.jpg",
        alt: "Porównanie efektów domowego i profesjonalnego czyszczenia tapicerki",
        caption: "Różnica między domowym a profesjonalnym czyszczeniem"
      },
      {
        type: "paragraph",
        content: "Gorzej, gdy plama jest starsza albo w tapicerkę wniknął zapach. Środki domowe działają tylko powierzchniowo - wewnątrz materiału zostaje brud i bakterie. Często po wyschnięciu kanapa pachnie gorzej niż przed praniem, a plama wraca."
      },
      {
        type: "paragraph",
        content: "Do tego dochodzi czas schnięcia. Po domowym czyszczeniu sofa bywa mokra nawet dwa dni, co sprzyja stęchliźnie."
      },
      {
        type: "image",
        content: "/blogPic/divan.jpg",
        alt: "Mokra tapicerka po domowym czyszczeniu",
        caption: "Tapicerka po domowym czyszczeniu może być mokra przez długi czas"
      },
      {
        type: "paragraph",
        content: "Każda tkanina reaguje inaczej. Welur, welwet czy mikrofibra wymagają delikatnego podejścia. Zbyt mocny środek albo gorąca woda mogą zostawić ślady lub odbarwienia."
      },
      {
        type: "paragraph",
        content: "Jeśli plama jest stara, materiał intensywnie pachnie albo mebel jest delikatny - warto oddać go w ręce fachowców. Profesjonalne pranie usuwa brud i zapachy głęboko w tkaninie, a kanapa po czyszczeniu zostaje sucha. Efekt utrzymuje się znacznie dłużej niż po domowych metodach."
      }
    ]
  },
  {
    id: 2,
    slug: "plama-wraca-po-praniu-kanapy",
    title: "Plama wraca po praniu kanapy? Najczęstsze przyczyny",
    excerpt: "Dlaczego plamy powracają po samodzielnym czyszczeniu tapicerki? Poznaj główne przyczyny tego zjawiska i sposoby zapobiegania.",
    author: "Ekspert Lemonshine",
    date: "2024-01-18",
    category: "Problemy",
    readTime: "8 min",
    mainPicture: "/Plama_wraca_po_praniu_kanapy_Najczestsze_przyczyny.jpg",
    content: [
      {
        type: "paragraph",
        content: 'Wielu klientów po samodzielnym praniu tapicerki zauważa, że plamy, które wydawały się usunięte, po kilku dniach znowu „wychodzą" na powierzchnię. To zjawisko jest dość częste i ma kilka przyczyn, o których warto wiedzieć, aby uniknąć rozczarowania.'
      },
      {
        type: "heading",
        content: "1. Resztki brudu i detergentu w głębi materiału",
        level: 2
      },
      {
        type: "paragraph",
        content: 'Najczęstsza przyczyna powracających plam to niedokładne wypłukanie kanapy. Kiedy podczas prania środek czyszczący wnika w gąbkę i nie zostaje całkowicie odessany, pozostaje w głębi tkaniny. Gdy tapicerka wysycha, brud i resztki chemii są „podciągane" z powrotem na powierzchnię, tworząc szarą obwódkę lub ciemniejsze przebarwienie.'
      },
      {
        type: "heading",
        content: "2. Zbyt duża ilość wody",
        level: 2
      },
      {
        type: "paragraph",
        content: "Przy samodzielnym praniu często stosuje się zbyt dużo wody, co powoduje przemoczenie gąbki i pianki w środku kanapy. Woda transportuje zanieczyszczenia w głąb, a w trakcie schnięcia brud migruje z powrotem ku górze. Efekt? Plama znika tylko na chwilę, by po kilku dniach znowu się pojawić."
      },
      {
        type: "heading",
        content: "3. Tłuste i trudne plamy",
        level: 2
      },
      {
        type: "paragraph",
        content: "Niektóre zabrudzenia - szczególnie tłuste, olejowe czy po kawie - wymagają specjalistycznej chemii i metod neutralizacji. Jeśli użyje się wyłącznie domowych środków, plama może zostać rozbita, ale nie całkowicie usunięta. Po wyschnięciu resztki zanieczyszczenia są znowu widoczne."
      },
      {
        type: "heading",
        content: "4. Nieodpowiednia chemia czyszcząca",
        level: 2
      },
      {
        type: "paragraph",
        content: 'Uniwersalne środki dostępne w marketach często zostawiają osad, który działa jak magnes na nowe zabrudzenia. Kanapa po takim praniu nie tylko szybciej się brudzi, ale też może pokazać „stare" plamy, które nie zostały dokładnie wyczyszczone.'
      },
      {
        type: "heading",
        content: "5. Zbyt wolne schnięcie tapicerki",
        level: 2
      },
      {
        type: "paragraph",
        content: "Jeśli kanapa schnie kilka dni w wilgotnym pomieszczeniu, zanieczyszczenia mają więcej czasu, aby przemieścić się ku powierzchni. Dodatkowo wilgoć sprzyja rozwojowi nieprzyjemnego zapachu, a nawet pleśni."
      },
      {
        type: "heading",
        content: "Jak zapobiec powracaniu plam?",
        level: 2
      },
      {
        type: "list",
        content: "Sposoby zapobiegania powracaniu plam",
        listType: "unordered",
        items: [
          "Stosować profesjonalne metody ekstrakcyjne – odsysanie brudu i chemii w tym samym czasie",
          "Nie używać nadmiernej ilości wody – pranie powinno być kontrolowane i precyzyjne",
          "Dobierać odpowiednie środki do rodzaju plamy – inne działają na tłuszcz, inne na barwniki czy kawę",
          "Zapewnić szybkie schnięcie – np. poprzez wietrzenie pomieszczenia, użycie osuszacza lub nawiewu"
        ]
      }
    ]
  },
  {
    id: 3,
    slug: "rodzaje-plam-na-tapicerce-jak-sobie-z-nimi-poradzic",
    title: "Rodzaje plam na tapicerce. Jak sobie z nimi poradzić?",
    subtitle: "Przewodnik po najczęstszych plamach i skutecznych metodach ich usuwania.",
    excerpt: "Plamy na tapicerce to codzienność w domach z dziećmi i zwierzętami. Dowiedz się, z którymi plamami poradzisz się sam, a kiedy lepiej wezwać profesjonalistów.",
    author: "Ekspert Lemonshine",
    date: "2025-08-20",
    category: "Porady",
    readTime: "9 min",
    mainPicture: "/Rodzaje_plam.jpg",
    content: [
      {
        type: "paragraph",
        content: "Plamy na tapicerce - to codzienność, szczególnie w domach z dziećmi, zwierzętami albo wśród miłośników kawy i słodyczy. W tym artykule dowiesz się, z jakimi plamami da się poradzić domowymi sposobami, a kiedy lepiej nie ryzykować i wezwać profesjonalną pomoc."
      },
      {
        type: "heading",
        content: "Plama z kawy",
        level: 2
      },
      {
        type: "paragraph",
        content: "Plamy z kawy należą do jednych z najczęstszych i najbardziej uporczywych zabrudzeń na tapicerce. Zawierają taniny, które wnikają głęboko w strukturę tkaniny i mogą powodować trwałe przebarwienia. Czas reakcji jest tutaj kluczowy – im szybciej zareagujemy, tym większa szansa na całkowite usunięcie śladu. Najlepiej unikać gorącej wody – może ona utrwalić plamę. W warunkach domowych warto użyć chłodnej wody z dodatkiem łagodnego detergentu, ale przy zaschniętych lub wielowarstwowych zabrudzeniach pomoc specjalisty może okazać się niezbędna."
      },
      {
        type: "image",
        content: "/blogPic/lemonshine_1.webp",
        alt: "Usuwanie plamy z kawy z tapicerki - przed i po",
        caption: "Efekt profesjonalnego usuwania plamy z kawy"
      },
      {
        type: "heading",
        content: "Plama z krwi",
        level: 2
      },
      {
        type: "paragraph",
        content: "Krew to białko – a białka pod wpływem ciepła się ścinają. Dlatego najważniejszą zasadą przy tego typu plamach jest unikanie ciepłej lub gorącej wody, która tylko pogłębi problem. Świeżą plamę najlepiej delikatnie osuszyć papierowym ręcznikiem, a następnie przemyć zimną wodą z odrobiną mydła. Starsze plamy z krwi są trudne do usunięcia bez odpowiednich enzymatycznych środków czyszczących, które rozkładają białko i pomagają w usunięciu tego typu plam."
      },
      {
        type: "image",
        content: "/blogPic/lemonshine_2.webp",
        alt: "Usuwanie plamy z krwi z tapicerki",
        caption: "Profesjonalne czyszczenie plam z krwi wymaga specjalnych środków"
      },
      {
        type: "heading",
        content: "Plama z moczu",
        level: 2
      },
      {
        type: "paragraph",
        content: "Plamy z moczu – szczególnie zwierzęcego – są problematyczne nie tylko ze względu na wygląd, ale przede wszystkim na zapach. Mocz wnika w głąb struktury tapicerki i przy nieprawidłowym czyszczeniu może powodować powracający zapach amoniaku. Domowe sposoby często jedynie maskują problem. Profesjonalne środki z enzymami nie tylko rozkładają plamę, ale neutralizują zapachy. Warto działać szybko, zanim płyn zdąży wyschnąć i wniknąć głębiej. Polecamy jak najszybciej zwrócić się do specjalisty, gdy plama z moczu pojawi się na tapicerce."
      },
      {
        type: "heading",
        content: "Plama z czekolady",
        level: 2
      },
      {
        type: "paragraph",
        content: "Czekolada łączy w sobie tłuszcz, cukier i barwniki, co czyni ją wyjątkowo złożonym przeciwnikiem. Pocieranie na sucho może tylko pogorszyć sytuację – cząsteczki tłuszczu wnikają wtedy głębiej. Jeśli plama jest świeża, najlepiej delikatnie usunąć jej nadmiar łyżeczką, a następnie przemyć tkaninę zimną wodą. Starsze ślady wymagają działania środkiem tłuszczowym oraz środkiem do rozpuszczania cukru. W przypadku jasnych materiałów może być konieczne zastosowanie środka o właściwościach oksydacyjnych."
      },
      {
        type: "heading",
        content: "Plama z czerwonego wina",
        level: 2
      },
      {
        type: "paragraph",
        content: "Plamy z czerwonego wina to jedne z najbardziej uporczywych. Zawierają silne barwniki pochodzenia naturalnego (antocyjany), które głęboko wnikają w strukturę materiału. Jeśli nie zareagujemy natychmiast, mogą pozostać na tapicerce na stałe. Trik z zasypaniem plamy solą działa jedynie wtedy, gdy reagujemy natychmiast — sól absorbuje część cieczy, ale nie usuwa barwnika. W praktyce domowe metody rzadko dają zadowalające efekty. Wino często wymaga użycia kwaśnych środków do usuwania barwników. Plamy z czerwonego wina na jasnej tapicerce to jeden z najczęstszych powodów zgłoszeń do profesjonalnych firm czyszczących."
      },
      {
        type: "heading",
        content: "Plama z atramentu, długopisu, markera",
        level: 2
      },
      {
        type: "paragraph",
        content: "Plamy po tuszu i długopisach to najczęstszy problem w domach z dziećmi. Tusz zawiera bardzo intensywne pigmenty i alkohole, które natychmiast barwią materiał. Przypadkowe narysowanie linii na kanapie może stać się permanentnym problemem, jeśli nie zareagujemy odpowiednio. Zwykła woda nic nie zdziała — potrzeba rozpuszczalników lub specjalnych preparatów do barwników. Zmywacz do paznokci (aceton) może pomóc, ale nie zalecamy go stosować, gdzyż istnieje duże ryzyko uszkodzenia materiału."
      },
      {
        type: "image",
        content: "/blogPic/lemonshine_3.webp",
        alt: "Usuwanie różnych rodzajów plam z tapicerki",
        caption: "Różne rodzaje plam wymagają specjalistycznego podejścia"
      }
    ]
  }
];
const Blog = () => {
  return /* @__PURE__ */ jsx("section", { id: "blog", className: "py-16 bg-lemon-50/30", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center space-y-4 mb-12", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-heading font-bold text-foreground", children: "Ciekawe Artykuły o Tapicerce" }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-muted-foreground max-w-2xl mx-auto", children: "Praktyczne porady, ciekawostki i wszystko co powinieneś wiedzieć o pielęgnacji tapicerki" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch", children: blogPosts.map((article) => /* @__PURE__ */ jsxs(
      Card,
      {
        className: "border-0 shadow-lg hover-lift bg-white overflow-hidden h-full flex flex-col",
        children: [
          /* @__PURE__ */ jsx("img", { src: article.mainPicture, alt: article.title, loading: "lazy", decoding: "async" }),
          /* @__PURE__ */ jsxs(CardHeader, { className: "pb-2", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-sm text-muted-foreground mb-2 leading-5 min-h-5", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-1", children: [
                /* @__PURE__ */ jsx(Calendar, { className: "w-4 h-4" }),
                /* @__PURE__ */ jsx("span", { children: new Date(article.date).toLocaleDateString("pl-PL") })
              ] }),
              /* @__PURE__ */ jsx("span", { children: article.readTime })
            ] }),
            /* @__PURE__ */ jsx(CardTitle, { className: "text-lg font-heading leading-tight line-clamp-2", children: article.title })
          ] }),
          /* @__PURE__ */ jsx(CardContent, { className: "flex-1", children: /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm leading-6 line-clamp-3", children: article.excerpt }) }),
          /* @__PURE__ */ jsxs(CardFooter, { className: "mt-auto pt-2 flex items-center justify-between", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2 text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsx(User, { className: "w-3 h-3" }),
              /* @__PURE__ */ jsx("span", { children: article.author })
            ] }),
            /* @__PURE__ */ jsx(Button, { asChild: true, variant: "ghost", size: "sm", className: "text-mint-600 hover:text-mint-700", children: /* @__PURE__ */ jsxs(Link, { to: `/blog/${article.slug}`, children: [
              "Czytaj więcej",
              /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 ml-1" })
            ] }) })
          ] })
        ]
      },
      article.id
    )) }),
    /* @__PURE__ */ jsx("div", { className: "text-center mt-12", children: /* @__PURE__ */ jsx(
      Button,
      {
        asChild: true,
        size: "lg",
        variant: "outline",
        className: "border-mint-600 text-mint-600 hover:bg-mint-50 hover-lift",
        children: /* @__PURE__ */ jsx(Link, { to: "/blog/", children: "Zobacz wszystkie artykuły" })
      }
    ) })
  ] }) });
};
const SeoSection = () => {
  return /* @__PURE__ */ jsx("section", { className: "py-16", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsx("h4", { className: "text-lg", children: "Pranie tapicerki meblowej, samochodowej i wykładzin - Lemonshine" }),
    /* @__PURE__ */ jsxs("div", { className: "text-muted-foreground text-sm leading-relaxed space-y-4", children: [
      /* @__PURE__ */ jsx("p", { children: "Pranie tapicerki meblowej, samochodowej i wykładzin - Lemonshine to firma, która od początku swojej działalności skupia się na usłudze prania tapicerki, dlatego mamy w niej duże doświadczenie i dopracowane metody działania." }),
      /* @__PURE__ */ jsx("p", { children: "Oferujemy profesjonalne pranie tapicerki meblowej, pranie kanap, narożników, foteli oraz pranie tapicerki samochodowej we Wrocławiu, Opolu i okolicach. Wykonujemy także pranie wykładzin i dywanów. Podejmujemy się każdego zlecenia związanego z tapicerką - niezależnie od materiału i stopnia zabrudzenia." }),
      /* @__PURE__ */ jsx("p", { children: "Korzystamy z wysokiej jakości sprzętu oraz skutecznych środków do czyszczenia tapicerki, dzięki czemu usuwamy nawet trudne plamy i zapachy. Pranie tapicerki kanapy, narożnika czy samochodu wykonujemy dokładnie i bezpiecznie dla tkanin." }),
      /* @__PURE__ */ jsx("p", { children: "Świadczymy kompleksowe czyszczenie tapicerki dla klientów indywidualnych i firm. Jeśli potrzebne jest skuteczne pranie tapicerki we Wrocławiu lub Opolu - skontaktuj się z nami i zamów usługę dopasowaną do swoich potrzeb." })
    ] })
  ] }) }) });
};
const Klient = () => {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Jak często warto prać tapicerkę meblową?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zalecamy pranie co 6–12 miesięcy, w zależności od intensywności użytkowania mebla. Regularne pranie pozwala utrzymać tkaninę w dobrym stanie i zapobiega gromadzeniu się alergenów."
        }
      },
      {
        "@type": "Question",
        "name": "Czy metoda ekstrakcyjna naprawdę działa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tak! Pranie ekstrakcyjne to jedna z najskuteczniejszych metod – usuwa brud, kurz, alergeny i większość plam, docierając głęboko w strukturę materiału."
        }
      },
      {
        "@type": "Question",
        "name": "Od czego zależy cena czyszczenia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Koszt usługi zależy od rodzaju mebla, jego wielkości, stopnia zabrudzenia oraz rodzaju tkaniny. Dodatkowe opcje, takie pełne suszenie, czy usuwanie gum, kleju, cieżkich plam również wpływają na cenę."
        }
      },
      {
        "@type": "Question",
        "name": "Ile czasu trwa pranie mebli?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Czas zależy od liczby i wielkości mebli, ale zazwyczaj jedna kanapa jest gotowa w ciągu 1–2 godzin."
        }
      },
      {
        "@type": "Question",
        "name": "Czy używane środki są bezpieczne dla dzieci i zwierząt?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tak, korzystamy z certyfikowanej, bezpiecznej chemii, która jest delikatna dla materiału, a jednocześnie skutecznie usuwa zabrudzenia. Po wyschnięciu meble są w pełni bezpieczne."
        }
      }
    ]
  };
  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Profesjonalne pranie tapicerki meblowej",
    "description": "Pełny proces profesjonalnego czyszczenia tapicerki metodą ekstrakcyjną",
    "totalTime": "PT2H",
    "supply": [
      {
        "@type": "HowToSupply",
        "name": "Profesjonalny ekstraktor"
      },
      {
        "@type": "HowToSupply",
        "name": "Certyfikowana chemia czyszcząca"
      }
    ],
    "step": [
      {
        "@type": "HowToStep",
        "name": "Przegląd mebla",
        "text": "Na początku dokładnie sprawdzamy rodzaj materiału, oceniamy stan tapicerki i lokalizujemy plamy. To pozwala dobrać najbezpieczniejsze i najskuteczniejsze środki czyszczące."
      },
      {
        "@type": "HowToStep",
        "name": "Usuwanie plam nierozpuszczalnych w wodzie",
        "text": "Zanim rozpoczniemy pranie właściwe, usuwamy najtrudniejsze plamy – np. tłuszcz, wosk, gumę czy zaschnięte resztki jedzenia – aby nie pozostawić po nich żadnego śladu."
      },
      {
        "@type": "HowToStep",
        "name": "Nanoszenie presprayu",
        "text": "Dobieramy prespray odpowiedni do materiału i rodzaju zabrudzeń. Dzięki temu brud zostaje rozpuszczony i przygotowany do skutecznego wypłukania."
      },
      {
        "@type": "HowToStep",
        "name": "Ekstrakcja",
        "text": "Za pomocą profesjonalnego ekstraktora dokładnie płuczemy materiał i usuwamy 90% zanieczyszczeń oraz resztek środków czyszczących."
      },
      {
        "@type": "HowToStep",
        "name": "Neutralizacja chemii",
        "text": "Stabilizujemy pH tkaniny i wypłukujemy pozostałości agresywnych środków, dzięki czemu materiał jest miękki, bezpieczny i ma przyjemny, świeży zapach."
      },
      {
        "@type": "HowToStep",
        "name": "Suszenie ekstraktorem",
        "text": "Odciągamy jak najwięcej wilgoci z wnętrza mebla, aby skrócić czas schnięcia i zapobiec rozwojowi niepożądanych zapachów."
      },
      {
        "@type": "HowToStep",
        "name": "Suszenie wentylatorem (opcjonalnie)",
        "text": "Na życzenie możemy całkowicie wysuszyć mebel, aby był gotowy do użytku od razu po czyszczeniu. Przy praniu materaca szczególnie zalecamy tę usługę - szybkie wysuszenie materiału pomaga uniknąć powstawania plam i nieprzyjemnych zapachów. Koszt tej opcji to 30% ceny prania mebla."
      }
    ]
  };
  const offersJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Rabat 10% na usługi powyżej 300zł",
        "description": "Na czyszczenie powyżej 300zł - 10% rabatu na całą usługę",
        "validFrom": "2025-01-01",
        "validThrough": "2025-12-31",
        "seller": {
          "@type": "LocalBusiness",
          "name": "Lemonshine"
        }
      },
      {
        "@type": "Offer",
        "name": "Bezpłatny dojazd",
        "description": "Bezpłatny dojazd do klienta",
        "validFrom": "2025-01-01",
        "validThrough": "2025-12-31",
        "seller": {
          "@type": "LocalBusiness",
          "name": "Lemonshine"
        }
      },
      {
        "@type": "Offer",
        "name": "Rabat dla sąsiadów 10%",
        "description": "Zamów pranie tapicerki z sąsiadem, a oba dostaniecie zniżke 10% rabatu na całą usługę",
        "validFrom": "2025-01-01",
        "validThrough": "2025-12-31",
        "seller": {
          "@type": "LocalBusiness",
          "name": "Lemonshine"
        }
      },
      {
        "@type": "Offer",
        "name": "Rabat dla firm do 20%",
        "description": "Oferujemy zniżkę dla firm i dużych obiektów aż do 20% rabatu od ceny zamówienia",
        "validFrom": "2025-01-01",
        "validThrough": "2025-12-31",
        "seller": {
          "@type": "LocalBusiness",
          "name": "Lemonshine"
        }
      }
    ]
  };
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Lemonshine",
    "description": "Profesjonalne pranie tapicerki meblowej w Opolu i Wrocławiu",
    "url": "https://lemonshine.pl",
    "telephone": "+48 662 117 886",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Wrocław",
      "addressRegion": "Dolnośląskie",
      "addressCountry": "PL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "51.1079",
      "longitude": "17.0385"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "08:00",
      "closes": "16:00"
    },
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61576970773440",
      "https://www.instagram.com/lemonshine_pl/",
      "https://www.tiktok.com/@lemonshine_pl"
    ],
    "serviceArea": {
      "@type": "Place",
      "name": ["Opole", "Wrocław", "Brzeg", "Nysa", "Kłodzko", "Kędzierzyn-Koźle"]
    },
    "priceRange": "150-500 PLN",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Usługi prania tapicerki",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Pranie tapicerki meblowej",
            "description": "Profesjonalne czyszczenie kanap, foteli i narożników"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Czyszczenie materacy",
            "description": "Dokładne czyszczenie i dezynfekcja materacy"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Pranie dywanów",
            "description": "Skuteczne usuwanie plam z dywanów i wykładzin"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127"
    },
    "logo": {
      "@type": "ImageObject",
      "url": "https://lemonshine.pl/lemonshine.png"
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: "Pranie Tapicerki dla Klientów Indywidualnych | Lemonshine Opole, Wrocław",
        description: "Profesjonalne pranie kanap, foteli, materacy i dywanów w Twoim domu. Bezpieczna chemia, szybkie schnięcie, gwarancja jakości.",
        canonical: "https://lemonshine.pl/pranie-tapicerki/",
        jsonLd: [faqJsonLd, localBusinessJsonLd, howToJsonLd, offersJsonLd]
      }
    ),
    /* @__PURE__ */ jsx(Header, { variant: "klient" }),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx(Hero, {}),
      /* @__PURE__ */ jsx(About, {}),
      /* @__PURE__ */ jsx(Services, {}),
      /* @__PURE__ */ jsx(Promotions, {}),
      /* @__PURE__ */ jsx(Results, {}),
      /* @__PURE__ */ jsx(OrderForm, { source: "pranie-tapicerki" }),
      /* @__PURE__ */ jsx(Equipment, {}),
      /* @__PURE__ */ jsx(Blog, {}),
      /* @__PURE__ */ jsx(FAQ, {})
    ] }),
    /* @__PURE__ */ jsx(SeoSection, {}),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
const tabs = [
  { id: "cleaning", label: "Sprzątanie" },
  { id: "upholstery", label: "Pranie tapicerki" },
  { id: "windows", label: "Mycie okien" }
];
const isPricingTab = (tab) => tabs.some((pricingTab) => pricingTab.id === tab);
const tabData = {
  cleaning: cleaningPricingItems,
  upholstery: pricingItems,
  windows: windowPricingItems
};
const priceFactors = [
  { icon: Ruler, title: "Wielkość powierzchni", description: "Cena zależy od metrażu mieszkania lub liczby mebli do czyszczenia." },
  { icon: Sparkles, title: "Stopień zabrudzenia", description: "Silne zabrudzenia mogą wymagać dodatkowych środków i czasu pracy." },
  { icon: ClipboardList, title: "Zakres prac", description: "Możesz wybrać podstawowe sprzątanie lub rozszerzony pakiet usług." },
  { icon: MapPin, title: "Lokalizacja zlecenia", description: "Dojazd poza Wrocław może wiązać się z dodatkową opłatą." }
];
const Pricing = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialTab = searchParams.get("tab");
  const [activeTab, setActiveTab] = useState(isPricingTab(initialTab) ? initialTab : "cleaning");
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSearchParams({ tab });
  };
  const items = tabData[activeTab];
  const offerCatalogJsonLd = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    "name": "Cennik usług sprzątania - Lemonshine",
    "itemListElement": pricingItems.map((item, index) => ({
      "@type": "Offer",
      "position": index + 1,
      "itemOffered": {
        "@type": "Service",
        "name": item.name,
        "description": item.subtitle || `Profesjonalne pranie: ${item.name}`
      },
      "priceCurrency": "PLN",
      "price": item.price.replace(/[^\d]/g, "") || "0"
    }))
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: "Cennik Usług Sprzątania - Wrocław | Lemonshine",
        description: "Sprawdź cennik usług sprzątania, prania tapicerki i mycia okien we Wrocławiu. Przejrzyste ceny, profesjonalna obsługa.",
        keywords: "cennik sprzątania wrocław, cennik prania tapicerki, cennik mycia okien, sprzątanie mieszkań ceny",
        canonical: "https://lemonshine.pl/cennik/",
        jsonLd: offerCatalogJsonLd
      }
    ),
    /* @__PURE__ */ jsx(Header, { variant: "klient" }),
    /* @__PURE__ */ jsxs("main", { className: "pt-20", children: [
      /* @__PURE__ */ jsx("section", { className: "py-16 bg-background", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 text-center space-y-4", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-3xl md:text-4xl font-heading font-bold text-foreground", children: "Cennik na usługi sprzątania we Wrocławiu" }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground max-w-3xl mx-auto", children: "Przejrzysty cennik naszych usług. Ostateczna cena zależy od wielkości powierzchni i stopnia zabrudzenia." })
      ] }) }),
      /* @__PURE__ */ jsx(CleaningPricing, { showHeading: false, className: "pt-0" }),
      /* @__PURE__ */ jsx("section", { className: "pb-16 bg-background", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsx("div", { className: "sticky top-14 z-40 -mx-4 mb-8 border-b border-border bg-background/95 px-4 py-3 backdrop-blur supports-[backdrop-filter]:bg-background/80 md:static md:mx-0 md:mb-10 md:border-b-0 md:bg-transparent md:px-0 md:py-0 md:backdrop-blur-none", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 gap-2 md:flex md:flex-wrap md:justify-center md:gap-3", children: tabs.map((tab) => /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => handleTabChange(tab.id),
            className: `min-w-0 rounded-full px-3 py-2.5 text-xs font-semibold transition-all sm:text-sm md:px-6 md:py-3 ${activeTab === tab.id ? "bg-lemon-300 text-foreground shadow-md" : "bg-muted text-muted-foreground hover:bg-muted/80"}`,
            children: tab.label
          },
          tab.id
        )) }) }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6", children: items.map((item, index) => /* @__PURE__ */ jsxs(Card, { className: "bg-white shadow-md hover-lift border-0 overflow-hidden rounded-xl", children: [
          /* @__PURE__ */ jsx("div", { className: "aspect-[4/3]", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: item.image,
              alt: item.name,
              className: "w-full h-full object-cover",
              loading: "lazy"
            }
          ) }),
          /* @__PURE__ */ jsxs(CardContent, { className: "p-3 md:p-4", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-heading font-semibold text-foreground text-xs md:text-sm mb-0.5", children: item.name }),
            item.subtitle && /* @__PURE__ */ jsx("p", { className: "text-[10px] md:text-xs text-muted-foreground mb-2", children: item.subtitle }),
            /* @__PURE__ */ jsx("p", { className: "text-sm md:text-lg font-bold text-mint-600 mb-2", children: item.price }),
            /* @__PURE__ */ jsx(
              Button,
              {
                size: "sm",
                variant: "outline",
                className: "w-full text-xs px-3 py-1 bg-lemon-100 border-lemon-200 hover:bg-lemon-200 text-foreground",
                onClick: () => {
                  var _a;
                  return (_a = document.getElementById("zamow")) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
                },
                children: "Zamów →"
              }
            )
          ] })
        ] }, `${activeTab}-${index}`)) }),
        /* @__PURE__ */ jsxs("div", { className: "text-center mt-12", children: [
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-4", children: "Potrzebujesz wyceny dla czegoś innego?" }),
          /* @__PURE__ */ jsx(
            Button,
            {
              size: "lg",
              className: "hover:opacity-90",
              onClick: () => {
                var _a;
                return (_a = document.getElementById("zamow")) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
              },
              children: "Skontaktuj się z nami"
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-16 bg-muted/30", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-heading font-bold text-foreground text-center mb-10", children: "Co wpływa na cenę?" }),
        /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6", children: priceFactors.map((factor, index) => /* @__PURE__ */ jsxs(Card, { className: "bg-white border-0 shadow-sm text-center p-6", children: [
          /* @__PURE__ */ jsx(factor.icon, { className: "w-10 h-10 mx-auto mb-4 text-mint-600" }),
          /* @__PURE__ */ jsx("h3", { className: "font-heading font-semibold text-foreground mb-2", children: factor.title }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: factor.description })
        ] }, index)) })
      ] }) }),
      /* @__PURE__ */ jsx(OrderForm, { source: "cennik" }),
      /* @__PURE__ */ jsx("section", { className: "py-16 bg-background", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-3xl", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-heading font-bold text-foreground text-center mb-10", children: "Odpowiedzi na częste pytania" }),
        /* @__PURE__ */ jsx(Accordion, { type: "single", collapsible: true, className: "space-y-3", children: [
          { q: "Czy oferujecie rabaty przy większych zleceniach?", a: "Tak, przy większym zakresie prac możemy zaproponować zniżkę." },
          { q: "Czy są zniżki przy stałej współpracy?", a: "Tak, dla stałych klientów oferujemy korzystniejsze warunki cenowe." },
          { q: "Czy dojazd jest wliczony w cenę?", a: "W większości przypadków tak, przy dalszych lokalizacjach może być doliczony koszt." },
          { q: "Jak mogę zapłacić za usługę?", a: "Akceptujemy płatność gotówką lub przelewem." },
          { q: "Czy cena podana na stronie jest ostateczna?", a: "Nie zawsze - ostateczna cena zależy od wielkości i stopnia zabrudzenia." },
          { q: "Czy minimalna kwota zamówienia obowiązuje?", a: "Tak, przy małych zleceniach obowiązuje minimalna wartość usługi - 150 zł." }
        ].map((faq, i) => /* @__PURE__ */ jsxs(AccordionItem, { value: `faq-${i}`, className: "bg-white rounded-lg border-0 shadow-sm px-6", children: [
          /* @__PURE__ */ jsx(AccordionTrigger, { className: "text-left font-semibold text-foreground", children: faq.q }),
          /* @__PURE__ */ jsx(AccordionContent, { className: "text-muted-foreground", children: faq.a })
        ] }, i)) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
const BlogIndex = () => {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Strona główna",
        "item": "https://lemonshine.pl/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog o praniu tapicerki",
        "item": "https://lemonshine.pl/blog/"
      }
    ]
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: "Blog o praniu tapicerki – porady i artykuły",
        description: "Praktyczne porady o pielęgnacji tapicerki, usuwaniu plam i czyszczeniu mebli. Dowiedz się więcej o profesjonalnym praniu kanap i foteli.",
        keywords: "blog pranie tapicerki, porady czyszczenie kanap, jak usunąć plamy z tapicerki, pielęgnacja mebli tapicerowanych",
        canonical: "https://lemonshine.pl/blog/",
        ogType: "website",
        jsonLd: breadcrumbJsonLd
      }
    ),
    /* @__PURE__ */ jsx(Header, { variant: "klient" }),
    /* @__PURE__ */ jsx("main", { className: "pt-28 pb-16", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-3xl md:text-4xl font-heading font-bold text-foreground", children: "Wszystkie Artykuły o Tapicerce" }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-muted-foreground max-w-2xl mx-auto", children: "Praktyczne porady, ciekawostki i wszystko co powinieneś wiedzieć o pielęgnacji tapicerki" }),
        /* @__PURE__ */ jsx(Button, { asChild: true, variant: "outline", className: "border-mint-600 text-mint-600 hover:bg-mint-60", children: /* @__PURE__ */ jsxs(Link, { to: "/", children: [
          /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4 mr-2" }),
          "Wróć do strony głównej"
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: blogPosts.map((article) => /* @__PURE__ */ jsxs(Card, { className: "border-0 shadow-lg hover-lift bg-white overflow-hidden", children: [
        /* @__PURE__ */ jsx("img", { src: article.mainPicture, alt: article.title, loading: "lazy", decoding: "async" }),
        /* @__PURE__ */ jsxs(CardHeader, { className: "pb-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-sm text-muted-foreground mb-2", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-1", children: [
              /* @__PURE__ */ jsx(Calendar, { className: "w-4 h-4" }),
              /* @__PURE__ */ jsx("span", { children: new Date(article.date).toLocaleDateString("pl-PL") })
            ] }),
            /* @__PURE__ */ jsx("span", { children: article.readTime })
          ] }),
          /* @__PURE__ */ jsx(CardTitle, { className: "text-lg font-heading leading-tight", children: article.title })
        ] }),
        /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: article.excerpt }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between pt-2", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2 text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsx(User, { className: "w-3 h-3" }),
              /* @__PURE__ */ jsx("span", { children: article.author })
            ] }),
            /* @__PURE__ */ jsx(Button, { asChild: true, variant: "ghost", size: "sm", className: "text-mint-600 hover:text-mint-700 p-0", children: /* @__PURE__ */ jsxs(Link, { to: `/blog/${article.slug}`, children: [
              "Czytaj więcej",
              /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 ml-1" })
            ] }) })
          ] })
        ] })
      ] }, article.id)) })
    ] }) }),
    /* @__PURE__ */ jsx(SeoSection, {}),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
const NotFound = () => {
  const location = useLocation();
  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen flex items-center justify-center bg-gray-100", children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("meta", { name: "robots", content: "noindex,nofollow" }),
      /* @__PURE__ */ jsx("title", { children: "404 - Strona nie znaleziona | Lemonshine" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold mb-4", children: "404" }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 mb-4", children: "Oops! Page not found" }),
      /* @__PURE__ */ jsx(Link, { to: "/", className: "text-blue-500 hover:text-blue-700 underline", children: "Return to Home" })
    ] })
  ] });
};
const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((post2) => post2.slug === slug);
  if (!post) {
    return /* @__PURE__ */ jsx(NotFound, {});
  }
  const blogPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": `https://lemonshine.pl/${post.mainPicture}`,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "datePublished": new Date(post.date).toISOString(),
    "dateModified": new Date(post.date).toISOString(),
    "mainEntityOfPage": `https://lemonshine.pl/blog/${post.slug}/`,
    "articleSection": post.category,
    "publisher": {
      "@type": "Organization",
      "name": "Lemonshine",
      "logo": {
        "@type": "ImageObject",
        "url": "https://lemonshine.pl/lemonshine.png"
      }
    }
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Strona główna",
        "item": "https://lemonshine.pl/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://lemonshine.pl/blog/"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `https://lemonshine.pl/blog/${post.slug}/`
      }
    ]
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: post.title,
        description: post.excerpt,
        keywords: `${post.title}, pranie tapicerki, czyszczenie kanap, ${post.category.toLowerCase()}`,
        canonical: `/blog/${post.slug}/`,
        ogImage: post.mainPicture,
        ogImageAlt: `${post.title} - Lemonshine`,
        ogType: "article",
        jsonLd: [blogPostingJsonLd, breadcrumbJsonLd]
      }
    ),
    /* @__PURE__ */ jsx(Header, { variant: "klient" }),
    /* @__PURE__ */ jsx("main", { className: "pt-28 pb-16", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsx(Button, { asChild: true, variant: "outline", className: "mb-8 border-mint-600 text-mint-600 hover:bg-mint-50", children: /* @__PURE__ */ jsxs(Link, { to: "/blog/", children: [
        "\\n                ",
        /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4 mr-2" }),
        "\\n                Wróć do bloga\\n              "
      ] }) }),
      /* @__PURE__ */ jsxs("article", { className: "prose prose-lg max-w-none", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center space-y-4 mb-12", children: [
          /* @__PURE__ */ jsx("div", { className: "inline-block px-3 py-1 bg-mint-100 text-mint-700 text-sm rounded-full font-medium", children: post.category }),
          /* @__PURE__ */ jsx("h1", { className: "text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-tight", children: post.title }),
          post.subtitle && /* @__PURE__ */ jsx("p", { className: "text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed", children: post.subtitle }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center justify-center gap-6 text-muted-foreground", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
              /* @__PURE__ */ jsx(User, { className: "w-4 h-4" }),
              /* @__PURE__ */ jsx("span", { children: post.author })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
              /* @__PURE__ */ jsx(Calendar, { className: "w-4 h-4" }),
              /* @__PURE__ */ jsx("span", { children: new Date(post.date).toLocaleDateString("pl-PL") })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
              /* @__PURE__ */ jsx(Clock, { className: "w-4 h-4" }),
              /* @__PURE__ */ jsx("span", { children: post.readTime })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "aspect-video w-full rounded-2xl overflow-hidden shadow-lg mb-5", children: /* @__PURE__ */ jsx("img", { src: `/${post.mainPicture}`, alt: post.title }) }),
        /* @__PURE__ */ jsx("div", { className: "space-y-8", children: post.content.map((block, index) => {
          var _a;
          if (block.type === "paragraph") {
            return /* @__PURE__ */ jsx("p", { className: "text-lg leading-relaxed text-foreground", children: block.content }, index);
          }
          if (block.type === "heading") {
            const HeadingTag = `h${block.level || 2}`;
            return /* @__PURE__ */ jsx(
              HeadingTag,
              {
                className: "text-2xl md:text-3xl font-heading font-bold text-foreground mt-12 mb-6 first:mt-8",
                children: block.content
              },
              index
            );
          }
          if (block.type === "list") {
            const ListTag = block.listType === "ordered" ? "ol" : "ul";
            return /* @__PURE__ */ jsx("div", { className: "my-6", children: /* @__PURE__ */ jsx(ListTag, { className: `space-y-3 text-lg leading-relaxed text-foreground ${block.listType === "ordered" ? "list-decimal list-inside" : "list-disc list-inside"}`, children: (_a = block.items) == null ? void 0 : _a.map((item, itemIndex) => /* @__PURE__ */ jsx("li", { className: "leading-relaxed", children: item }, itemIndex)) }) }, index);
          }
          if (block.type === "image") {
            return /* @__PURE__ */ jsxs("div", { className: "w-full my-8", children: [
              /* @__PURE__ */ jsx("div", { className: "aspect-video w-full rounded-2xl overflow-hidden shadow-lg", children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: `/${block.content}`,
                  alt: block.alt || "Artykuł o czyszczeniu tapicerki",
                  className: "w-full h-full object-cover",
                  onError: (e) => {
                    const target = e.target;
                    target.src = "/placeholder.svg";
                  }
                }
              ) }),
              block.caption && /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground text-center mt-3 italic", children: block.caption })
            ] }, index);
          }
          return null;
        }) }),
        /* @__PURE__ */ jsx("div", { className: "border-t border-gray-200 pt-8 mt-12", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-between gap-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-sm text-muted-foreground", children: [
            "Autor: ",
            /* @__PURE__ */ jsx("span", { className: "font-medium text-foreground", children: post.author })
          ] }),
          /* @__PURE__ */ jsx(Button, { asChild: true, className: "hover:opacity-90", children: /* @__PURE__ */ jsx(Link, { to: "/#zamow", children: "Zamów Pranie Tapicerki" }) })
        ] }) })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx(SeoSection, {}),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
const PrivacyPolicy = () => {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: "Polityka Prywatności",
        description: "Polityka prywatności LemonShine - informacje o przetwarzaniu danych osobowych podczas korzystania z naszych usług prania tapicerki.",
        canonical: "https://lemonshine.pl/polityka-prywatnosci/"
      }
    ),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx("main", { className: "pt-20", children: /* @__PURE__ */ jsx("section", { className: "py-16 bg-background", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-4xl", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-3xl md:text-4xl font-heading font-bold text-foreground", children: "Polityka Prywatności" }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-muted-foreground", children: "Informacje o przetwarzaniu danych osobowych przez LemonShine" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow-lg p-8 space-y-8", children: [
        /* @__PURE__ */ jsxs("section", { className: "space-y-4", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-heading font-bold text-foreground", children: "1. Administrator danych" }),
          /* @__PURE__ */ jsxs("div", { className: "text-muted-foreground space-y-2", children: [
            /* @__PURE__ */ jsxs("p", { children: [
              "Administratorem Twoich danych osobowych jest ",
              /* @__PURE__ */ jsx("strong", { children: "LemonShine" })
            ] }),
            /* @__PURE__ */ jsx("p", { children: "ul. Józefa Hallera 1/20, 45-867 Opole" }),
            /* @__PURE__ */ jsx("p", { children: "NIP: 7543359677" }),
            /* @__PURE__ */ jsx("p", { children: "E-mail: kontakt.lemonshine@gmail.com" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("section", { className: "space-y-4", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-heading font-bold text-foreground", children: "2. Zakres zbieranych danych" }),
          /* @__PURE__ */ jsxs("div", { className: "text-muted-foreground space-y-4", children: [
            /* @__PURE__ */ jsx("p", { children: "W celach realizacji usługi i kontaktu przetwarzamy:" }),
            /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 space-y-1", children: [
              /* @__PURE__ */ jsx("li", { children: "imię i nazwisko" }),
              /* @__PURE__ */ jsx("li", { children: "numer telefonu" }),
              /* @__PURE__ */ jsx("li", { children: "adres e-mail (jeśli podasz)" })
            ] }),
            /* @__PURE__ */ jsx("p", { children: "W celach marketingowych (newsletter) dodatkowo zbieramy Twój adres e-mail za Twoją odrębną zgodą." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("section", { className: "space-y-4", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-heading font-bold text-foreground", children: "3. Cele i podstawy prawne przetwarzania" }),
          /* @__PURE__ */ jsxs("div", { className: "text-muted-foreground space-y-2", children: [
            /* @__PURE__ */ jsxs("p", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Kontakt i realizacja usług" }),
              " – na podstawie prawnie uzasadnionego interesu administratora (Art. 6 ust. 1 lit. f RODO) lub umowy (Art. 6 ust. 1 lit. b RODO)."
            ] }),
            /* @__PURE__ */ jsxs("p", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Newsletter" }),
              " – wyłącznie na podstawie dobrowolnej zgody (Art. 6 ust. 1 lit. a RODO)."
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("section", { className: "space-y-4", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-heading font-bold text-foreground", children: "4. Okres przechowywania danych" }),
          /* @__PURE__ */ jsxs("div", { className: "text-muted-foreground space-y-2", children: [
            /* @__PURE__ */ jsxs("p", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Dane kontaktowe:" }),
              " do momentu zakończenia świadczenia usługi i upływu okresu przedawnienia ewentualnych roszczeń (5 lat)."
            ] }),
            /* @__PURE__ */ jsxs("p", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Dane do newslettera:" }),
              " do czasu wycofania zgody."
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("section", { className: "space-y-4", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-heading font-bold text-foreground", children: "5. Odbiorcy danych" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Twoje dane mogą być udostępniane podwykonawcom (np. firmie kurierskiej, usługodawcy IT) wyłącznie w zakresie niezbędnym do realizacji usługi." })
        ] }),
        /* @__PURE__ */ jsxs("section", { className: "space-y-4", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-heading font-bold text-foreground", children: "6. Pliki cookies i narzędzia analityczne" }),
          /* @__PURE__ */ jsxs("div", { className: "text-muted-foreground space-y-4", children: [
            /* @__PURE__ */ jsx("p", { children: "Na stronie korzystamy z:" }),
            /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 space-y-1", children: [
              /* @__PURE__ */ jsx("li", { children: "plików cookies niezbędnych do prawidłowego działania serwisu," }),
              /* @__PURE__ */ jsx("li", { children: "Google Analytics (analityka ruchu)," }),
              /* @__PURE__ */ jsx("li", { children: "wbudowanych narzędzi Tilda (analiza statystyk)," }),
              /* @__PURE__ */ jsx("li", { children: "opcjonalnie plików cookies marketingowych (jeśli wyrazisz zgodę)." })
            ] }),
            /* @__PURE__ */ jsx("p", { children: "Możesz w każdej chwili zarządzać zgodami na pliki cookies w ustawieniach przeglądarki lub poprzez panel zgód na stronie." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("section", { className: "space-y-4", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-heading font-bold text-foreground", children: "7. Twoje prawa" }),
          /* @__PURE__ */ jsxs("div", { className: "text-muted-foreground space-y-4", children: [
            /* @__PURE__ */ jsx("p", { children: "Przysługuje Ci prawo do:" }),
            /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 space-y-1", children: [
              /* @__PURE__ */ jsx("li", { children: "dostępu do treści swoich danych," }),
              /* @__PURE__ */ jsx("li", { children: "sprostowania i usunięcia danych," }),
              /* @__PURE__ */ jsx("li", { children: "ograniczenia przetwarzania," }),
              /* @__PURE__ */ jsx("li", { children: "wniesienia sprzeciwu wobec przetwarzania," }),
              /* @__PURE__ */ jsx("li", { children: "przenoszenia danych," }),
              /* @__PURE__ */ jsx("li", { children: "cofnięcia zgody (dot. newslettera) w dowolnym momencie." })
            ] }),
            /* @__PURE__ */ jsx("p", { children: "W celu realizacji swoich praw skontaktuj się z nami pod adresem kontakt.lemonshine@gmail.com." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("section", { className: "space-y-4", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-heading font-bold text-foreground", children: "8. Zabezpieczenia" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Stosujemy środki techniczne i organizacyjne zapewniające ochronę Twoich danych przed nieuprawnionym dostępem, ujawnieniem lub utratą." })
        ] }),
        /* @__PURE__ */ jsxs("section", { className: "space-y-4", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-heading font-bold text-foreground", children: "9. Zmiany Polityki Prywatności" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Zastrzegamy sobie prawo do zmiany niniejszej polityki. O każdej istotnej zmianie poinformujemy na stronie internetowej." }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground font-medium", children: "Data ostatniej aktualizacji: 26-06-2025" })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx(SeoSection, {}),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
const Biznes = () => {
  const handleOrderClick = () => {
    const element = document.getElementById("zamow");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const services2 = [
    {
      icon: Building2,
      title: "Biura i przestrzenie coworkingowe",
      description: "Regularne czyszczenie krzeseł biurowych, kanap w strefach relaksu i wykładzin."
    },
    {
      icon: Hotel,
      title: "Hotele i apartamenty",
      description: "Kompleksowa obsługa materacy, tapicerki i dywanów w pokojach hotelowych."
    },
    {
      icon: UtensilsCrossed,
      title: "Restauracje i kawiarnie",
      description: "Czyszczenie tapicerowanych krzeseł, kanap i sof w lokalach gastronomicznych."
    },
    {
      icon: Stethoscope,
      title: "Placówki medyczne",
      description: "Dezynfekcja i czyszczenie mebli tapicerowanych w przychodniach i gabinetach."
    }
  ];
  const benefits = [
    { icon: FileText, text: "Faktura VAT" },
    { icon: Users, text: "Rabat do 20% dla firm" },
    { icon: Clock, text: "Elastyczne godziny pracy" },
    { icon: Shield, text: "Umowa na stałą współpracę" }
  ];
  const faqItems = [
    {
      question: "Czy wystawiacie faktury VAT?",
      answer: "Tak, dla wszystkich klientów biznesowych wystawiamy pełne faktury VAT."
    },
    {
      question: "Czy możecie pracować poza godzinami pracy biura?",
      answer: "Oczywiście! Oferujemy elastyczne godziny pracy - możemy przyjechać wieczorem lub w weekend, aby nie zakłócać pracy Twojego zespołu."
    },
    {
      question: "Czy oferujecie umowy na stałą współpracę?",
      answer: "Tak, dla firm oferujemy atrakcyjne warunki długoterminowej współpracy z rabatami do 20%."
    },
    {
      question: "Jak szybko możecie obsłużyć duży obiekt?",
      answer: "Dysponujemy zespołem, który może obsłużyć nawet duże obiekty w krótkim czasie. Szczegóły ustalamy indywidualnie."
    }
  ];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Profesjonalne czyszczenie tapicerki dla firm - Lemonshine",
    "description": "Kompleksowe usługi czyszczenia tapicerki meblowej dla biur, hoteli, restauracji i obiektów komercyjnych w Opolu i Wrocławiu.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Lemonshine",
      "telephone": "+48 662 117 886"
    },
    "areaServed": ["Opole", "Wrocław", "Brzeg", "Nysa", "Kędzierzyn-Koźle"]
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: "Czyszczenie Tapicerki dla Firm B2B | Lemonshine Opole, Wrocław",
        description: "Profesjonalne usługi czyszczenia tapicerki meblowej dla firm. Biura, hotele, restauracje. Faktura VAT, rabaty do 20%, elastyczne godziny.",
        canonical: "https://lemonshine.pl/biznes/",
        jsonLd: [jsonLd]
      }
    ),
    /* @__PURE__ */ jsx(Header, { variant: "biznes" }),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx("section", { className: "pt-24 pb-16 gradient-hero", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 bg-mint-100 text-mint-700 px-4 py-2 rounded-full text-sm font-medium mb-6", children: [
          /* @__PURE__ */ jsx(Building2, { className: "w-4 h-4" }),
          "Dla firm i obiektów komercyjnych"
        ] }),
        /* @__PURE__ */ jsxs("h1", { className: "text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6", children: [
          "Profesjonalne czyszczenie",
          /* @__PURE__ */ jsx("span", { className: "block text-transparent bg-clip-text bg-gradient-to-r from-mint-500 to-mint-700", children: "dla Twojej firmy" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto", children: "Kompleksowa obsługa biur, hoteli, restauracji i innych obiektów komercyjnych. Zadbaj o czystość i higienę w miejscu pracy." }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center gap-4 mb-8", children: benefits.map((benefit, index) => {
          const IconComponent = benefit.icon;
          return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow-sm", children: [
            /* @__PURE__ */ jsx(IconComponent, { className: "w-4 h-4 text-mint-600" }),
            /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: benefit.text })
          ] }, index);
        }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
          /* @__PURE__ */ jsx(Button, { size: "lg", onClick: handleOrderClick, className: "hover-lift", children: "Zamów wycenę" }),
          /* @__PURE__ */ jsx(
            Button,
            {
              variant: "outline",
              size: "lg",
              className: "border-mint-600 text-mint-600 hover:bg-mint-50 hover-lift",
              asChild: true,
              children: /* @__PURE__ */ jsxs("a", { href: "tel:+48662117886", onClick: () => trackPhoneClick("biznes_hero"), children: [
                /* @__PURE__ */ jsx(Phone, { className: "w-5 h-5 mr-2" }),
                "+48 662 117 886"
              ] })
            }
          )
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "py-16 bg-muted/30", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-heading font-bold text-foreground mb-4", children: "Kogo obsługujemy?" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground max-w-2xl mx-auto", children: "Nasze usługi są dostosowane do potrzeb różnych branż i typów obiektów" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6", children: services2.map((service, index) => {
          const IconComponent = service.icon;
          return /* @__PURE__ */ jsxs("div", { className: "bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow", children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-gradient-to-br from-mint-500 to-mint-700 flex items-center justify-center mb-4", children: /* @__PURE__ */ jsx(IconComponent, { className: "w-6 h-6 text-white" }) }),
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-heading font-semibold text-foreground mb-2", children: service.title }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: service.description })
          ] }, index);
        }) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-16", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-heading font-bold text-foreground mb-6", children: "Dlaczego firmy wybierają Lemonshine?" }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-4", children: [
            "Rabaty do 20% dla stałych klientów biznesowych",
            "Elastyczne godziny pracy - również wieczorem i w weekendy",
            "Faktura VAT dla każdej usługi",
            "Możliwość podpisania umowy na stałą współpracę",
            "Profesjonalny sprzęt i certyfikowana chemia",
            "Szybka realizacja nawet dużych zleceń"
          ].map((item, index) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx(Check, { className: "w-5 h-5 text-mint-600 mt-0.5 flex-shrink-0" }),
            /* @__PURE__ */ jsx("span", { className: "text-foreground", children: item })
          ] }, index)) }),
          /* @__PURE__ */ jsx(Button, { size: "lg", onClick: handleOrderClick, className: "mt-8 hover-lift", children: "Poproś o wycenę" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "/furniture/wykladzina.jpg",
            alt: "Czyszczenie wykładzin w biurze",
            className: "rounded-2xl shadow-2xl"
          }
        ) })
      ] }) }) }),
      /* @__PURE__ */ jsx(Results, {}),
      /* @__PURE__ */ jsx(Equipment, {}),
      /* @__PURE__ */ jsx("section", { className: "py-16 bg-muted/30", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsx("div", { className: "text-center mb-12", children: /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-heading font-bold text-foreground mb-4", children: "Często zadawane pytania" }) }),
        /* @__PURE__ */ jsx("div", { className: "max-w-3xl mx-auto space-y-4", children: faqItems.map((faq, index) => /* @__PURE__ */ jsxs("div", { className: "bg-card rounded-xl p-6 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-foreground mb-2", children: faq.question }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: faq.answer })
        ] }, index)) })
      ] }) }),
      /* @__PURE__ */ jsx(OrderForm, { source: "biznes" })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
const Outsourcing = () => {
  const handleOrderClick = () => {
    const element = document.getElementById("zamow");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const targetAudience = [
    {
      icon: Building,
      title: "Firmy sprzątające",
      description: "Rozszerz swoją ofertę o profesjonalne pranie tapicerki bez inwestycji w sprzęt."
    },
    {
      icon: Home$1,
      title: "Zarządcy nieruchomości",
      description: "Oferuj kompleksowe usługi czyszczenia najemcom i właścicielom mieszkań."
    },
    {
      icon: Briefcase,
      title: "Agencje nieruchomości",
      description: "Przygotowuj mieszkania do sprzedaży lub wynajmu z profesjonalnym czyszczeniem."
    }
  ];
  const benefits = [
    {
      icon: Shield,
      title: "Usługi White-Label",
      description: "Działamy pod Twoją marką. Twoi klienci nie muszą wiedzieć, że korzystasz z naszych usług."
    },
    {
      icon: Percent,
      title: "Atrakcyjne ceny partnerskie",
      description: "Specjalne stawki dla partnerów, które pozwalają Ci zarabiać na każdym zleceniu."
    },
    {
      icon: HeartHandshake,
      title: "Pełne wsparcie",
      description: "Pomagamy w wycenach, doradzamy i wspieramy na każdym etapie współpracy."
    },
    {
      icon: GraduationCap,
      title: "Szkolenia i know-how",
      description: "Dzielimy się wiedzą o materiałach, plamach i metodach czyszczenia."
    }
  ];
  const howItWorks = [
    {
      step: 1,
      title: "Nawiąż kontakt",
      description: "Skontaktuj się z nami, aby omówić warunki współpracy."
    },
    {
      step: 2,
      title: "Ustal warunki",
      description: "Określamy ceny partnerskie, obszar działania i zakres usług."
    },
    {
      step: 3,
      title: "Przyjmuj zlecenia",
      description: "Oferujesz usługi prania tapicerki swoim klientom."
    },
    {
      step: 4,
      title: "My wykonujemy",
      description: "Realizujemy zlecenia profesjonalnie, pod Twoją marką lub naszą."
    }
  ];
  const faqItems = [
    {
      question: "Czy muszę mieć własny sprzęt?",
      answer: "Nie! To właśnie przewaga outsourcingu - my przywozimy cały sprzęt i chemię. Ty tylko pozyskujesz klientów."
    },
    {
      question: "Jak wygląda rozliczenie?",
      answer: "Rozliczamy się na podstawie faktury. Możemy ustalić płatność po każdym zleceniu lub miesięczne rozliczenia zbiorcze."
    },
    {
      question: "Czy klienci dowiedzą się, że korzystam z podwykonawcy?",
      answer: "Tylko jeśli chcesz! Oferujemy usługi white-label - możemy działać całkowicie pod Twoją marką."
    },
    {
      question: "Jaki jest minimalny próg współpracy?",
      answer: "Nie ma minimalnej ilości zleceń. Możemy zacząć od pojedynczych usług i rozwijać współpracę."
    }
  ];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Outsourcing usług czyszczenia tapicerki - Lemonshine",
    "description": "Partnerstwo dla firm chcących oferować usługi profesjonalnego czyszczenia tapicerki swoim klientom. White-label, atrakcyjne ceny partnerskie.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Lemonshine",
      "telephone": "+48 662 117 886"
    },
    "areaServed": ["Opole", "Wrocław", "Brzeg", "Nysa", "Kędzierzyn-Koźle"]
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: "Outsourcing Usług Czyszczenia Tapicerki | Lemonshine Partner",
        description: "Rozszerz ofertę swojej firmy o profesjonalne pranie tapicerki. Usługi white-label, atrakcyjne ceny partnerskie, pełne wsparcie.",
        canonical: "https://lemonshine.pl/outsourcing/",
        jsonLd: [jsonLd]
      }
    ),
    /* @__PURE__ */ jsx(Header, { variant: "outsourcing" }),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx("section", { className: "pt-24 pb-16 gradient-hero", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 bg-lemon-100 text-lemon-700 px-4 py-2 rounded-full text-sm font-medium mb-6", children: [
          /* @__PURE__ */ jsx(Handshake, { className: "w-4 h-4" }),
          "Program partnerski"
        ] }),
        /* @__PURE__ */ jsxs("h1", { className: "text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6", children: [
          "Outsourcing usług",
          /* @__PURE__ */ jsx("span", { className: "block text-transparent bg-clip-text bg-gradient-to-r from-lemon-500 to-mint-500", children: "czyszczenia tapicerki" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto", children: "Rozszerz ofertę swojej firmy bez inwestycji w sprzęt i szkolenia. My zajmujemy się wykonaniem - Ty zarabiasz na marży." }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
          /* @__PURE__ */ jsx(Button, { size: "lg", onClick: handleOrderClick, className: "hover-lift", children: "Zostań partnerem" }),
          /* @__PURE__ */ jsx(
            Button,
            {
              variant: "outline",
              size: "lg",
              className: "border-mint-600 text-mint-600 hover:bg-mint-50 hover-lift",
              asChild: true,
              children: /* @__PURE__ */ jsxs("a", { href: "tel:+48662117886", onClick: () => trackPhoneClick("outsourcing_hero"), children: [
                /* @__PURE__ */ jsx(Phone, { className: "w-5 h-5 mr-2" }),
                "+48 662 117 886"
              ] })
            }
          )
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "py-16 bg-muted/30", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-heading font-bold text-foreground mb-4", children: "Dla kogo jest outsourcing?" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground max-w-2xl mx-auto", children: "Nasze partnerstwo jest idealne dla firm, które chcą poszerzyć swoją ofertę" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-8", children: targetAudience.map((item, index) => {
          const IconComponent = item.icon;
          return /* @__PURE__ */ jsxs("div", { className: "bg-card rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow text-center", children: [
            /* @__PURE__ */ jsx("div", { className: "w-16 h-16 rounded-2xl bg-gradient-to-br from-lemon-400 to-mint-500 flex items-center justify-center mx-auto mb-6", children: /* @__PURE__ */ jsx(IconComponent, { className: "w-8 h-8 text-white" }) }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-heading font-semibold text-foreground mb-3", children: item.title }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: item.description })
          ] }, index);
        }) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-16", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsx("div", { className: "text-center mb-12", children: /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-heading font-bold text-foreground mb-4", children: "Co zyskujesz jako partner?" }) }),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-8 max-w-4xl mx-auto", children: benefits.map((benefit, index) => {
          const IconComponent = benefit.icon;
          return /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-gradient-to-br from-lemon-400 to-lemon-600 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsx(IconComponent, { className: "w-6 h-6 text-white" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "text-lg font-heading font-semibold text-foreground mb-1", children: benefit.title }),
              /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: benefit.description })
            ] })
          ] }, index);
        }) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-16 bg-muted/30", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsx("div", { className: "text-center mb-12", children: /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-heading font-bold text-foreground mb-4", children: "Jak to działa?" }) }),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-4 gap-6 max-w-5xl mx-auto", children: howItWorks.map((item, index) => /* @__PURE__ */ jsxs("div", { className: "text-center relative", children: [
          /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-full bg-gradient-to-br from-mint-500 to-mint-700 flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg", children: item.step }),
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-heading font-semibold text-foreground mb-2", children: item.title }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: item.description }),
          index < howItWorks.length - 1 && /* @__PURE__ */ jsx("div", { className: "hidden md:block absolute top-6 left-[60%] w-[80%] h-0.5 bg-border" })
        ] }, index)) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-16", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-heading font-bold text-foreground mb-6", children: "Dlaczego warto z nami współpracować?" }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-4", children: [
            "Brak inwestycji w sprzęt i szkolenia",
            "Profesjonalne wykonanie każdego zlecenia",
            "Elastyczne warunki rozliczeń",
            "Wsparcie przy wycenach i konsultacjach",
            "Możliwość pracy pod Twoją marką (white-label)",
            "Gwarancja jakości naszych usług"
          ].map((item, index) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx(Check, { className: "w-5 h-5 text-mint-600 mt-0.5 flex-shrink-0" }),
            /* @__PURE__ */ jsx("span", { className: "text-foreground", children: item })
          ] }, index)) }),
          /* @__PURE__ */ jsx(Button, { size: "lg", onClick: handleOrderClick, className: "mt-8 hover-lift", children: "Skontaktuj się z nami" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "/furniture/31.jpg",
            alt: "Profesjonalne czyszczenie tapicerki",
            className: "rounded-2xl shadow-2xl"
          }
        ) })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "py-16 bg-muted/30", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsx("div", { className: "text-center mb-12", children: /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-heading font-bold text-foreground mb-4", children: "Często zadawane pytania" }) }),
        /* @__PURE__ */ jsx("div", { className: "max-w-3xl mx-auto space-y-4", children: faqItems.map((faq, index) => /* @__PURE__ */ jsxs("div", { className: "bg-card rounded-xl p-6 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-foreground mb-2", children: faq.question }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: faq.answer })
        ] }, index)) })
      ] }) }),
      /* @__PURE__ */ jsx(OrderForm, { source: "outsourcing" })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
const WindowHero = () => {
  const handleOrderClick = () => {
    const orderSection = document.getElementById("zamow");
    if (orderSection) {
      orderSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return /* @__PURE__ */ jsxs("section", { className: "pt-28 md:pt-36 pb-16 gradient-hero relative overflow-hidden", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 opacity-20 pointer-events-none -z-10", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-20 left-10 w-20 h-20 rounded-full bg-cyan-400 animate-float" }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-40 right-20 w-16 h-16 rounded-full bg-mint-400 animate-float", style: { animationDelay: "1s" } }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-20 left-1/4 w-12 h-12 rounded-full bg-cyan-300 animate-float", style: { animationDelay: "2s" } })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("h1", { className: "text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight text-foreground", children: [
            "Profesjonalne",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-cyan-600", children: "mycie okien" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xl leading-relaxed text-muted-foreground", children: "Dokładnie myjemy okna w mieszkaniach, domach i obiektach firmowych." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4", children: [
          /* @__PURE__ */ jsx(
            Button,
            {
              onClick: handleOrderClick,
              size: "lg",
              className: "w-full sm:flex-1 hover-lift",
              children: "Zamów Mycie Okien"
            }
          ),
          /* @__PURE__ */ jsx(
            Button,
            {
              size: "lg",
              variant: "outline",
              className: "w-full sm:flex-1 border-mint-600 text-mint-600 hover:bg-mint-50 hover-lift",
              asChild: true,
              children: /* @__PURE__ */ jsx(Link, { to: "/cennik/?tab=windows", children: "Zobacz zakres usług" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "hidden md:flex items-center justify-center", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: "/heroImg-window.png",
          alt: "Profesjonalne mycie okien - czyste okna w kuchni",
          className: "w-full max-w-md rounded-2xl object-cover shadow-lg",
          loading: "eager"
        }
      ) })
    ] }) })
  ] });
};
const services = [
  {
    image: "/window/window-1.jpg",
    title: "Umycie jednego okna",
    subtitle: "Szyba + rama + parapet",
    price: "30",
    unit: "za sztukę"
  },
  {
    image: "/window/window-2.jpg",
    title: "Umycie obudowy balkonu",
    subtitle: "Szyby balkonowe + ramy",
    price: "20",
    unit: "za sztukę"
  },
  {
    image: "/window/window-3.jpg",
    title: "Mycie paneli szklanych",
    subtitle: "Balustrady, ścianki szklane",
    price: "10",
    unit: "za 1 m²"
  }
];
const WindowPricing = () => {
  const handleOrderClick = () => {
    const orderSection = document.getElementById("zamow");
    if (orderSection) {
      orderSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return /* @__PURE__ */ jsx("section", { className: "py-20 bg-background", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center space-y-4 mb-12", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-heading font-bold text-foreground", children: "Cennik Mycia Okien" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground", children: "Sprawdź cennik na mycie okien i zamów usługę już teraz!" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 mb-8", children: services.map((service, index) => /* @__PURE__ */ jsxs(Card, { className: "bg-white shadow-md hover-lift border-0 overflow-hidden rounded-xl", children: [
      /* @__PURE__ */ jsx("div", { className: "aspect-[4/3]", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: service.image,
          alt: service.title,
          className: "w-full h-full object-cover",
          loading: "lazy",
          decoding: "async"
        }
      ) }),
      /* @__PURE__ */ jsxs(CardContent, { className: "p-3 md:p-4", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-heading font-semibold text-foreground text-xs md:text-sm mb-0.5", children: service.title }),
        /* @__PURE__ */ jsx("p", { className: "text-[10px] md:text-xs text-muted-foreground mb-2", children: service.subtitle }),
        /* @__PURE__ */ jsxs("p", { className: "text-sm md:text-lg font-bold text-mint-600 mb-2", children: [
          service.price,
          " zł ",
          /* @__PURE__ */ jsx("span", { className: "text-[10px] md:text-xs font-normal text-muted-foreground", children: service.unit })
        ] }),
        /* @__PURE__ */ jsx(
          Button,
          {
            size: "sm",
            variant: "outline",
            className: "w-full text-xs px-3 py-1 bg-lemon-100 border-lemon-200 hover:bg-lemon-200 text-foreground",
            onClick: handleOrderClick,
            children: "Zamów →"
          }
        )
      ] })
    ] }, index)) }),
    /* @__PURE__ */ jsxs("div", { className: "mt-8 text-center space-y-4", children: [
      /* @__PURE__ */ jsx("div", { className: "inline-block bg-lemon-100 text-foreground px-6 py-3 rounded-lg text-sm font-semibold", children: "⚠️ Minimalna kwota zamówienia: 150 zł" }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Link, { to: "/cennik/", className: "text-mint-600 hover:text-mint-700 font-medium underline underline-offset-4", children: "Zobacz pełny cennik →" }) })
    ] })
  ] }) }) });
};
const faqs = [
  {
    question: "Czy potrzebuję mieć własny sprzęt lub chemię?",
    answer: "Nie, przyjeżdżamy z własnym profesjonalnym sprzętem oraz skutecznymi środkami do mycia szyb i ram."
  },
  {
    question: "Czy myjecie okna z obu stron?",
    answer: "Tak, myjemy okna z obu stron, pod warunkiem że mamy bezpieczny dostęp do zewnętrznej części szyby lub okno otwiera się w sposób umożliwiający jej dokładne umycie."
  },
  {
    question: "Czy usuwacie zabrudzenia znajdujące się wewnątrz okna oraz na ramach?",
    answer: "Tak, czyścimy nie tylko powierzchnię szyb, ale również ramy, uszczelki oraz trudno dostępne miejsca wokół okna, zapewniając kompleksowy efekt."
  },
  {
    question: "Jakie są dostępne formy płatności?",
    answer: "Akceptujemy płatność gotówką, przelewem, BLIK-iem oraz wystawiamy fakturę na życzenie klienta."
  }
];
const WindowFAQ = () => {
  const handleOrderClick = () => {
    const orderSection = document.getElementById("zamow");
    if (orderSection) {
      orderSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return /* @__PURE__ */ jsx("section", { className: "py-20 bg-background", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center space-y-4 mb-12", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-heading font-bold text-foreground", children: "Często Zadawane Pytania" }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-muted-foreground", children: "Znajdź odpowiedzi na najczęściej zadawane pytania o myciu okien" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "bg-white rounded-3xl shadow-xl p-8", children: /* @__PURE__ */ jsx(Accordion, { type: "single", collapsible: true, className: "space-y-4", children: faqs.map((faq, index) => /* @__PURE__ */ jsxs(AccordionItem, { value: `item-${index}`, className: "border border-lemon-200 rounded-lg px-6", children: [
      /* @__PURE__ */ jsx(AccordionTrigger, { className: "text-left font-semibold text-foreground hover:text-mint-600", children: faq.question }),
      /* @__PURE__ */ jsx(AccordionContent, { className: "text-muted-foreground pb-4", children: faq.answer })
    ] }, index)) }) }),
    /* @__PURE__ */ jsxs("div", { className: "mt-12 text-center space-y-6", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-2xl font-heading font-bold text-foreground", children: "Nie znalazłeś odpowiedzi na swoje pytanie?" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Skontaktuj się z nami bezpośrednio - chętnie udzielimy szczegółowych informacji" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
        /* @__PURE__ */ jsxs(Button, { onClick: handleOrderClick, size: "lg", className: "hover:opacity-90", children: [
          /* @__PURE__ */ jsx(MessageCircle, { className: "w-5 h-5 mr-2" }),
          "Zadaj pytanie"
        ] }),
        /* @__PURE__ */ jsx(Button, { size: "lg", variant: "outline", className: "border-mint-600 text-mint-600 hover:bg-mint-50", asChild: true, children: /* @__PURE__ */ jsx("a", { href: "tel:+48662117886", onClick: () => trackPhoneClick("faq_window"), children: "Zadzwoń: +48 662 117 886" }) })
      ] })
    ] })
  ] }) }) });
};
const MycieOkien = () => {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Czy potrzebuję mieć własny sprzęt lub chemię?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nie, przyjeżdżamy z własnym profesjonalnym sprzętem oraz skutecznymi środkami do mycia szyb i ram."
        }
      },
      {
        "@type": "Question",
        "name": "Czy myjecie okna z obu stron?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tak, myjemy okna z obu stron, pod warunkiem że mamy bezpieczny dostęp do zewnętrznej części szyby lub okno otwiera się w sposób umożliwiający jej dokładne umycie."
        }
      },
      {
        "@type": "Question",
        "name": "Czy usuwacie zabrudzenia znajdujące się wewnątrz okna oraz na ramach?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tak, czyścimy nie tylko powierzchnię szyb, ale również ramy, uszczelki oraz trudno dostępne miejsca wokół okna, zapewniając kompleksowy efekt."
        }
      },
      {
        "@type": "Question",
        "name": "Jakie są dostępne formy płatności?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Akceptujemy płatność gotówką, przelewem, BLIK-iem oraz wystawiamy fakturę na życzenie klienta."
        }
      }
    ]
  };
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Lemonshine",
    "description": "Profesjonalne mycie okien we Wrocławiu i Opolu",
    "url": "https://lemonshine.pl/mycie-okien/",
    "telephone": "+48 662 117 886",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Wrocław",
      "addressRegion": "Dolnośląskie",
      "addressCountry": "PL"
    },
    "priceRange": "150-500 PLN"
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: "Mycie Okien - Profesjonalne usługi | Lemonshine Wrocław, Opole",
        description: "Profesjonalne mycie okien bez smug i zacieków. Szyby, ramy, parapety — szybko i dokładnie. Zamów mycie okien we Wrocławiu i Opolu.",
        canonical: "https://lemonshine.pl/mycie-okien/",
        jsonLd: [faqJsonLd, localBusinessJsonLd]
      }
    ),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx(WindowHero, {}),
      /* @__PURE__ */ jsx(TrustIndicators, {}),
      /* @__PURE__ */ jsx(WindowPricing, {}),
      /* @__PURE__ */ jsx(Promotions, {}),
      /* @__PURE__ */ jsx(OrderForm, { source: "mycie-okien" }),
      /* @__PURE__ */ jsx(Testimonials, {}),
      /* @__PURE__ */ jsx(StatsBar, {}),
      /* @__PURE__ */ jsx(WindowFAQ, {})
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
const queryClient = new QueryClient();
const RootLayout = () => /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxs(TooltipProvider, { children: [
  /* @__PURE__ */ jsx(ScrollToTop, {}),
  /* @__PURE__ */ jsx(Outlet, {}),
  /* @__PURE__ */ jsx(Toaster, {})
] }) });
const routes = [
  {
    path: "/",
    element: /* @__PURE__ */ jsx(RootLayout, {}),
    children: [
      { index: true, Component: Home },
      { path: "pranie-tapicerki", Component: Klient },
      { path: "klient", Component: Klient },
      { path: "biznes", Component: Biznes },
      { path: "mycie-okien", Component: MycieOkien },
      { path: "outsourcing", Component: Outsourcing },
      { path: "cennik", Component: Pricing },
      { path: "blog", Component: BlogIndex },
      {
        path: "blog/:slug",
        Component: BlogPost,
        getStaticPaths: () => blogPosts.map((p) => `blog/${p.slug}`)
      },
      { path: "polityka-prywatnosci", Component: PrivacyPolicy },
      { path: "*", Component: NotFound }
    ]
  }
];
const createRoot = ViteReactSSG({
  routes,
  basename: "/"
});
export {
  createRoot
};
