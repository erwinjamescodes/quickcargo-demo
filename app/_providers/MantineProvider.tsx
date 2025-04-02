"use client";

import { MantineProvider as MantineProviderOriginal } from "@mantine/core";
import "@mantine/core/styles.css";

export function Providers({ children }: { children: React.ReactNode }) {
  return <MantineProviderOriginal>{children}</MantineProviderOriginal>;
}
