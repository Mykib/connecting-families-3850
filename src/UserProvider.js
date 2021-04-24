import React, { useContext, useState } from "react";

const UserContext = React.createContext();
const UserContextUpdate = React.createContext();

export function useUserContext() {
  return useContext(UserContext);
}

export function useUserContextUpdate() {
  return useContext(UserContextUpdate);
}

function UserProvider({ children }) {
  const [user, setUser] = useState([]);

  function setUserContext(u) {
    setUser(u);
  }

  return (
    <UserContext.Provider value={user}>
      <UserContextUpdate.Provider value={setUserContext}>
        {children}
      </UserContextUpdate.Provider>
    </UserContext.Provider>
  );
}

export default UserProvider;
