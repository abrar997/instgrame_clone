import React, { useState, useEffect } from "react";
import axios from "axios";
const Slider = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("./Json/json.json").then((res) => setData(res.data));
  }, []);
  return (
    <div className="slider d-flex">
      {data.map((user) => {
        return (
          <div className="slider_info" key={user.id}>
            <div className="Slider_img">
              <span>
                <img src={user.img} alt={user.name} />
              </span>
            </div>
            <div className="slider_name">{user.name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
