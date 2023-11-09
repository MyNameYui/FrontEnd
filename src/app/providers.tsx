"use client";

import React, { useEffect } from "react";
import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "react-query";

import { ThemeProviderProps } from "next-themes/dist/types";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { Toaster } from "react-hot-toast";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const [queryClient] = React.useState(() => new QueryClient());


  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <NextUIProvider>
          <NextThemesProvider {...themeProps}>
            {children}
            <Toaster />
          </NextThemesProvider>
        </NextUIProvider>
      </QueryClientProvider>
    </RecoilRoot>
  );
}
