// Layout
import ClientLayout from "./layout/ClientLayout";
// Component
// import NotFound from "./components/not-found/NotFound";

// Pages
import Home from "./pages/Home";

interface RouteConfig {
  path: string;
  element: React.ReactNode;
  children?: RouteConfig[];
}

const routerConfig: Record<string, RouteConfig[]> = {
  guest: [
    {
      path: "/",
      element: <ClientLayout />,
      children: [
        // PAGES
        {
          path: "/",
          element: <Home />,
        },
        // {
        //   path: "/jerico-nino-portfolio/projects",
        //   element: <Projects />,
        // },
        // {
        //   path: "/jerico-nino-portfolio/services",
        //   element: <Services />,
        // },
        // {
        //   path: "/jerico-nino-portfolio/about",
        //   element: <About />,
        // },
        // {
        //   path: "/jerico-nino-portfolio/cv",
        //   element: <Cv />,
        // },
        // {
        //   path: "*", // Wildcard for unmatched routes
        //   element: <NotFound />,
        // },
      ],
    },
    // {
    //   path: "*",
    //   element: <NotFound />,
    // },
  ],
};

export default routerConfig;
