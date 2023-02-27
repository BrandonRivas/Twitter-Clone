import { createContext, useEffect, useState } from "react";

export const CurrentUserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    fetch("/api/me/profile")
      .then((res) => res.json())
      .then((data) => {
        console.log(data); //delete this later
        setCurrentUser(data.profile);
        setStatus("idle");
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <CurrentUserContext.Provider
      value={{ currentUser, setCurrentUser, status, setStatus }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};
