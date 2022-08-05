import React, { useState, useContext } from "react";
import { ContextProvider } from "../../Global/Context";
const Sidebar = () => {
  const { loader, user } = useContext(ContextProvider);
  const userName = !loader && user ? user.displayName : "";
  const [state] = useState([
    { id: 3, name: "JS", img: "" },
    { id: 1, name: "Python", img: "" },
    { id: 2, name: "React ", img: "" },
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
        <div className="sidebar__list-user">
          <div className="sidebar__list-a">
            <div className="sidebar__list-a-img"></div>
          </div>
          <div className="sidebar__list-b">
            <div className="sidebar__list-b-img"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
