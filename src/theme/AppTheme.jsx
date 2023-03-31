import { ThemeProvider } from "@emotion/react"
import { CssBaseline } from "@mui/material"
import { purpleTheme } from "./purpleTheme"

export const AppTheme = ({ children }) => {
  return (
    
    <ThemeProvider theme={purpleTheme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      { children } {/*  Se convierte en un higher order component y el children en este caso es APP   */}
    </ThemeProvider>

  )
}
