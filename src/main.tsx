import React from "react";
import ReactDOM from "react-dom/client";
import type { StyleFunctionProps } from "@chakra-ui/styled-system";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { checkboxTheme } from "../src/components/checkbox.ts";
import App from "./App.tsx";
// import './index.css'

const config = {
  useSystemColorMode: false,
  initialColorMode: "light",
};
// 3. extend the theme
const customTheme = extendTheme({
  config,
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: mode("#EEF5FF", "string")(props),
      },
    }),
  },
  components: { Checkbox: checkboxTheme },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={customTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
