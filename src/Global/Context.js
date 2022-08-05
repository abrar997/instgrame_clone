import React, { createContext, useState, useEffect } from "react";
import { auth, db, storage } from "../config.js";
// import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import firebase from "firebase/compat/app";

export const ContextProvider = createContext();

const Context = (props) => {
  const [model, setModel] = useState(false);
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);
  const [posts, setPosts] = useState([]);
  // ---------------------------------------------
  const openModel = () => {
    setModel(true);
  };
  // ---------------------------------------------
  const closeModel = () => {
    setModel(false);
  };
  // ---------------------------------------------
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
  // ---------------------------------------------
  const login = async (user) => {
    const { email, password } = user;
    const res = await auth.signInWithEmailAndPassword(email, password);
    setModel(false);
    // console.log("user login", user);
  };
  // ---------------------------------------------
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
  // ---------------------------------------------
  // to post data in instgram vlone
  const create = (data) => {
    const { title, image } = data;
    const upload = storage.ref(`images/${image.name}`).put(image);
    upload.on(
      "state_changed",
      (snp) => {
        let progress = (snp.bytesTransferred / snp.totalBytes) * 100;
        // console.log(progress);
      },
      (err) => {
        console.log(err);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            db.collection("posts").add({
              title,
              image: url,
              userName: user.displayName,
              currentTime: firebase.firestore.FieldValue.serverTimestamp(),
            });
          });

        //success function/complete function
      }
    );
  };
  // ---------------------------------------------
  // publish comment
  const publishComment = (data) => {
    const { id, comment } = data;
    db.collection("posts").doc(id).collection("comments").add({
      comment,
      userName: user.displayName,
      currentTime: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

  // ---------------------------------------------
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoader(false);
    });
    // fecth posts from firebase storage
    db.collection("posts")
      .orderBy("currentTime", "desc")
      .onSnapshot((snp) => {
        // console.log("my data", snp.docs);
        setPosts(
          snp.docs.map((doc) => ({
            id: doc.id,
            title: doc.data().title,
            image: doc.data().image,
            userName: doc.data().userName,
            // currentTime
          }))
        );
      });
  }, [user, loader]);

  // ---------------------------------------------
  return (
    // data trans to all web
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
        create,
        posts,
        publishComment,
      }}
    >
      {props.children}
    </ContextProvider.Provider>
  );
};

export default Context;
