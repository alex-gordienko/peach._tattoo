import React from "react";
import styled from "@emotion/styled";
import { Power } from "react-feather";
import { useNavigate } from "react-router-dom";

import {
  Tooltip,
  Menu,
  MenuItem,
  IconButton as MuiIconButton,
} from "@mui/material";

import useAuth from "../../hooks/useAuth";
import { availableRoutes } from "../../constants";

const IconButton = styled(MuiIconButton)`
  svg {
    width: 22px;
    height: 22px;
  }
`;

function NavbarUserDropdown() {
  const [anchorMenu, setAnchorMenu] = React.useState<any>(null);
  const { isAuthenticated, user, signIn, signOut } = useAuth();

  const toggleMenu = (event: React.SyntheticEvent) => {
    setAnchorMenu(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorMenu(null);
  };

  const handleSignIn = () => {
    closeMenu();
    // navigate(
    //   availableRoutes.ADMIN_AUTH.PATH + "/" + availableRoutes.ADMIN_AUTH.SIGN_IN
    // );
  };

  const handleSignOut = async () => {
    await signOut();
    // navigate("/" + availableRoutes.PUBLIC.MAIN);
  };

  const renderActionsList = () => {
    if (isAuthenticated) {
      if (user && user.role === "admin") {
        return (
          <>
            <MenuItem onClick={closeMenu}>Admin Dashboard</MenuItem>
            <MenuItem onClick={handleSignOut}>Sign out</MenuItem>
          </>
        );
      }
    }
    return (
      <>
        <MenuItem onClick={handleSignIn}>(For Admins) Sign in</MenuItem>
      </>
    );
  };

  return (
    <React.Fragment>
      <Tooltip title="Account">
        <IconButton
          aria-owns={Boolean(anchorMenu) ? "menu-appbar" : undefined}
          aria-haspopup="true"
          onClick={toggleMenu}
          color="inherit"
          size="large"
        >
          <Power />
        </IconButton>
      </Tooltip>
      <Menu
        id="menu-appbar"
        anchorEl={anchorMenu}
        open={Boolean(anchorMenu)}
        onClose={closeMenu}
      >
        {renderActionsList()}
      </Menu>
    </React.Fragment>
  );
}

export default NavbarUserDropdown;
