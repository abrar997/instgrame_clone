import React, { createContext, useState, useEffect } from "react";
import { auth } from "../config.js";

export const ContextProvider = createContext();

const Context = (props) => {
  const [model, setModel] = useState(false);
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  const openModel = () => {
    setModel(true);
  };
  const closeModel = () => {
    setModel(false);
  };

  const register = async (user) => {
    const { name, email, password } = user;
    try {
      const res = await auth.createUserWithEmailAndPassword(email, password);
      res.user.updateProfile({ displayName: name });
      setModel(false);
    } catch (err) {
      // console.log(err)
    }
  };

  const login = async (user) => {
    const { email, password } = user;
    const res = await auth.signInWithEmailAndPassword(email, password);
    setModel(false);
    // console.log("user login", user);
  };

  const logout = () => {
    auth
      .signOut(
        // if signout successfully
        function () {
          setUser(null);
        }
      )
      // if logout happened error
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoader(false);
    });
  }, [user, loader]);

  return (
    <ContextProvider.Provider
      value={{
        model,
        openModel,
        closeModel,
        register,
        login,
        user,
        loader,
        logout,
      }}
    >
      {props.children}
    </ContextProvider.Provider>
  );
};

export default Context;
