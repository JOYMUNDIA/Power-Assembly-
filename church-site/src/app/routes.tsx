// src/app/routes.tsx
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/home";
//import PrayerPage from "../pages/prayer/PrayerPage";
//import GivingPage from "../pages/giving/GivingPage";
import TestimonyMenu from "../pages/testimonies/testimonies";
//import ArticlesPage from "../pages/articles/ArticlesPage";
//import ContactPage from "../pages/contact/ContactPage";
//import AppointmentsPage from "../pages/appointments/AppointmentsPage";
//import ServicesPage from "../pages/services/ServicesPage";

//Under Construction Page
import UnderConstruction from "../components/layout/underConstruction"

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  //{ path: "/prayer", element: <PrayerPage /> },
  //{ path: "/giving", element: <GivingPage /> },
  { path: "/testimonies", element: <TestimonyMenu /> },
  //{ path: "/articles", element: <ArticlesPage /> },
  //{ path: "/contact", element: <ContactPage /> },
  //{ path: "/appointments", element: <AppointmentsPage /> },
  //{ path: "/services", element: <ServicesPage /> },

  { path: "/under-construction", element: <UnderConstruction /> },
]);