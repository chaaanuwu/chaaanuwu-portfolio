"use client";

import { createContext, useContext, useState } from "react";

interface LayoutContextType {
  noSidebarMargin: boolean;
  setNoSidebarMargin: (value: boolean) => void;
}

const LayoutContext = createContext<LayoutContextType>({
  noSidebarMargin: false,
  setNoSidebarMargin: () => {},
});

export function LayoutProvider({ children }: { children: React.ReactNode }) {
  const [noSidebarMargin, setNoSidebarMargin] = useState(false);

  return (
    <LayoutContext.Provider value={{ noSidebarMargin, setNoSidebarMargin }}>
      {children}
    </LayoutContext.Provider>
  );
}

export function useLayout() {
  return useContext(LayoutContext);
}