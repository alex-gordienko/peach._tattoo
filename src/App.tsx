import React from "react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles"
import { BrowserRouter as Router, Routes, Route, useRoutes } from "react-router-dom";

import { AuthProvider } from "./contexts/FirebaseAuthContext"
import createTheme from "./theme";
import routes from "./routes"

import "./locales/i18n"
import useTheme from "./hooks/useTheme"

const App: React.FC = () => {

  const { theme } = useTheme()

  const content = useRoutes(routes)

  return (
		<MuiThemeProvider theme={createTheme(theme)}>
			<AuthProvider>{content}</AuthProvider>
		</MuiThemeProvider>
	)
}

export default App
