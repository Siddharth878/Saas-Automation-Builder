"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { ThemeProviderProps } from "next-themes/dist/types"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {

   

    //  this is the fix for (Cannot be used as jsx element)

    // const NextThemesProvider = {children} as any

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
