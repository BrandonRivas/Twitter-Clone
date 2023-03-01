import { createContext, useEffect, useState } from "react";

export const CurrentUserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [status, setStatus] = useState("loading");


  useEffect(() => {
    fetch("/api/me/profile")
      .then((res) => res.json())
      .then((data) => {
        setCurrentUser(data.profile);
        setStatus("idle");

      })
      .catch((error) => {
        console.log(error);
        setStatus("error");

      });
  }, []);
  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        status,
        setStatus,
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};
