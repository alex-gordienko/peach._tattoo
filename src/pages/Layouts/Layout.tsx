import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import styled from "@emotion/styled";
import { useTheme } from "@mui/material/styles";

import {
  Box,
  CssBaseline,
  IconButton as MuiIconButton,
  Paper as MuiPaper,
  useMediaQuery,
} from "@mui/material";
import { spacing } from "@mui/system";

import Navbar from "../../components/Navbar/Navbar";
// import Sidebar from "../../components/Sidebar";

// import navItems from "../../components/Sidebar/constants";
import useAuth from "../../hooks/useAuth";
import GlobalStyle from "../../components/GlobalStyle";

const Root = styled.div`
  display: flex;
  min-height: 100vh;
  margin: 0;
`;

const AppContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  max-width: 100%;
`;

const MainContent = styled(Box)`
  flex: 1;
  background: ${(props) => props.theme.palette.background.default};

  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    flex: none;
  }

  .MuiPaper-root .MuiPaper-root {
    box-shadow: none;
  }
`;

interface DashboardType {
  children?: React.ReactNode;
}

const Layout: React.FC<DashboardType> = ({ children }) => {
  const router = useLocation();
  const { isAuthenticated } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Close mobile menu when navigation occurs
  useEffect(() => {
    setMobileOpen(false);
  }, [router.pathname]);

  const theme = useTheme();
  const isLgUp = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Root>
      <CssBaseline />
      <GlobalStyle />
      {/* <Drawer>
        <Box sx={{ display: { xs: "block", lg: "none" } }}>
          <Sidebar
            PaperProps={{ style: { width: drawerWidth } }}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            items={navItems(isAuthenticated)}
          />
        </Box>
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <Sidebar
            PaperProps={{ style: { width: drawerWidth } }}
            items={navItems(isAuthenticated)}
          />
        </Box>
      </Drawer> */}
      <AppContent>
        <Navbar onDrawerToggle={handleDrawerToggle} />
        <MainContent p={isLgUp ? 12 : 5}>
          {children}
          <Outlet />
        </MainContent>
      </AppContent>
    </Root>
  );
};

export default Layout;
