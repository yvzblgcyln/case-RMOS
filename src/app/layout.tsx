"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { theme } from "../../theme";
import { ToastContainer } from "react-toastify";
import Navbar from "../components/Navbar";
import "@mantine/charts/styles.css";
import "@mantine/core/styles.css";
import "react-toastify/dist/ReactToastify.css";
import "../styles/global.css";

export default function RootLayout({ children }: { children: any }) {
  const path = usePathname();
  const notShowNavbar = ["/"];

  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <title>RMOS Case Study</title>
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no" />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <ToastContainer />
          {!notShowNavbar.includes(path) && <Navbar />}
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
