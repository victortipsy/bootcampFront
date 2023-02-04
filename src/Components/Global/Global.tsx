import React, { createContext, useState } from "react";
interface User {
  name: string;
  email: string;
}
interface ContextData {
  currentUser: User;
  setCurrentUser: React.Dispatch<React.SetStateAction<User>>;
}
export const GlobalContext = createContext<ContextData>({
  currentUser: {
    name: "",
    email: "",
  },
  setCurrentUser: (currentUser: {}) => {},
});
export const MainContext: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [currentUser, setCurrentUser] = useState<User>({} as User);
  React.useEffect(() => {
    if (window.localStorage.getItem("userinfo"))
      setCurrentUser(JSON.parse(window.localStorage.getItem("userinfo") || ""));
  }, []);
  return (
    <GlobalContext.Provider
      value={{
        currentUser,
        setCurrentUser,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};
