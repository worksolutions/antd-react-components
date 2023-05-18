import React from "react";
import { Grid } from "antd";
import { Breakpoint } from "antd/es/_util/responsiveObserver";

const BreakpointContext = React.createContext<Partial<Record<Breakpoint, boolean>>>(null!);

export function BreakpointProvider({ children }: { children: React.ReactNode }) {
  const screens = Grid.useBreakpoint();

  return <BreakpointContext.Provider value={screens}>{children}</BreakpointContext.Provider>;
}

export const useBreakpoint = () => {
  return React.useContext(BreakpointContext);
};
