import React, {createContext, useState, ReactNode, useContext} from 'react';

interface AppLoading {
  isLoading: boolean;
  showLoader: () => void;
  hideLoader: () => void;
}

interface LoadingProps {
  children: ReactNode;
}

export const LoadingContext = createContext<AppLoading | undefined>(undefined);

export const useLoader = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoader must be used within a LoaderProvider');
  }
  return context;
};

export const LoaderContext: React.FC<LoadingProps> = ({children}) => {
  const [isLoading, setIsLoading] = useState(false);

  const showLoader = () => {
    setIsLoading(true);
  };

  const hideLoader = () => {
    setIsLoading(false);
  };

  return (
    <LoadingContext.Provider value={{isLoading, showLoader, hideLoader}}>
      {children}
    </LoadingContext.Provider>
  );
};
