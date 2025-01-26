import {
  createContext,
  useState,
} from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, setState] = useState({
	// Add your initial state properties here
	isLoading: false,
	data: null,
	error: null
  });

  return (
	<AppContext.Provider value={{ state, setState }}>
	  {children}
	</AppContext.Provider>
  );
};
