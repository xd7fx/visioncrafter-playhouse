import { createContext, useContext, useState, ReactNode } from 'react';

type Platform = 'youtube';

interface PlatformContextType {
  platform: Platform;
  setPlatform: (p: Platform) => void;
}

const PlatformContext = createContext<PlatformContextType>({
  platform: 'youtube',
  setPlatform: () => {},
});

export const usePlatform = () => useContext(PlatformContext);

export const PlatformProvider = ({ children }: { children: ReactNode }) => {
  const [platform, setPlatform] = useState<Platform>('youtube');
  return (
    <PlatformContext.Provider value={{ platform, setPlatform }}>
      {children}
    </PlatformContext.Provider>
  );
};
