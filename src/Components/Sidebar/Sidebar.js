import React, { useState, useContext } from "react";
import { ContextProvider } from "../../Global/Context";
const Sidebar = () => {
  const { loader, user } = useContext(ContextProvider);
  const userName = !loader && user && user.displayName ? user.displayName : "";
  const [state] = useState([
    { id: 1, name: "Python", img: "./images/suggest/3.jpg", type: "follwers " },
    {
      id: 2,
      name: "React ",
      img: "./images/suggest/4.jpg",
      type: "new instgram",
    },
    { id: 3, name: "JS", img: "./images/suggest/2.jpg", type: "new instgram" },
  ]);

  return (
    <div className="sidebar">
      {!loader && user ? (
        <div className="sider_user">
          <div className="sidebar__user-avator">{userName[0]}</div>
          <div className="sidebar__user-name">{userName}</div>
        </div>
      ) : (
        ""
      )}

      {/* list of suggestion followers */}

      <div className="sidebar__list">
        <h3> Suggestions for you </h3>
        {state.map((user) => {
          return (
            <div className="sidebar__list-user">
              <div className="sidebar__list-a" key={user.id}>
                <div className="sidebar__list-a-img">
                  <img src={user.img} alt={user.name} />
                </div>
                <div className="sidebar__list-a-details">
                  <span className="sidebar__list-a-name"> {user.name}</span>
                  <span className="sidebar__list-a-type">{user.type} </span>
                </div>
              </div>

              <div className="sidebar__list-b">
                <div className="sidebar__list-b-img">Follow </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
