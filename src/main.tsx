import React from "react";
import ReactDOM from "react-dom/client";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import App from "./App";

const theme = extendTheme({
  fonts: {
    body: "Poppins",
    heading: "Poppins",
    mono: "Poppins",
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
