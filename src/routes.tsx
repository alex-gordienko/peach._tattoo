import React from "react";

// All pages that rely on 3rd party components (other than MUI) are
// loaded asynchronously, to keep the initial JS bundle to a minimum size

// Layouts
import DashboardLayout from "./pages/Layouts/Layout";
import NotificationPageLayout from "./pages/Layouts/NotificationPageLayout";

// Guards
import AuthGuard from "./guards/AuthGuard";

// Auth components
import SignIn from "./components/SignIn";
import ResetPassword from "./components/ResetPassword";

// Page components
import { Main, NoMatch } from "./pages";

import { availableRoutes } from "./constants";

const routers = [
  {
    path: availableRoutes.PUBLIC.PATH,
    element: (
      <DashboardLayout>
        <Main />
      </DashboardLayout>
    ),
  },
  {
    path: "*",
    element: <NotificationPageLayout />,
    children: [
      {
        path: "*",
        element: <NoMatch />,
      },
    ],
  },
];

export default routers;
