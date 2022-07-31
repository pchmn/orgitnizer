import { createContext, PropsWithChildren, useContext, useState } from 'react';

interface DrawerContextProps {
  opened: boolean;
  toggle: () => void;
}

const DrawerContext = createContext<DrawerContextProps>({} as DrawerContextProps);

export function DrawerProvider({ children }: PropsWithChildren<unknown>) {
  const [opened, setOpened] = useState(false);

  const toggle = () => setOpened((prev) => !prev);

  return <DrawerContext.Provider value={{ opened, toggle }}>{children}</DrawerContext.Provider>;
}

export const useDrawer = () => useContext(DrawerContext);
