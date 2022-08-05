import React, { useContext, useState } from "react";
import { FaCamera } from "react-icons/fa";

import { ContextProvider } from "../../Global/Context";

const CreatePost = () => {
  // by context api
  const { create, user, loader } = useContext(ContextProvider);

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  // ---------to upload file

  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };

  //--------- create post on clone
  const createPost = (e) => {
    e.preventDefault();
    create({ title, image });
    setTitle("");
    setImage("");
  };
  // ----------------------------

  return (
    <>
      {!loader && user ? (
        <div className="create_post">
          <form onSubmit={createPost}>
            <div>
              <input
                type="text"
                className="create__input"
                placeholder="What are in your mind ?"
                required
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </div>
            {/* add image and sent  */}
            <div className="create__second">
              <div className="create__second-a">
                <label htmlFor="file">
                  <FaCamera className="camera" />
                </label>
                <input
                  type="file"
                  className="file"
                  id="file"
                  onChange={handleImage}
                />
              </div>
              <div className="create__second-b">
                <input
                  type="submit"
                  className="btn-sweet"
                  value="Create"
                  id="file"
                />
              </div>
            </div>
          </form>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default CreatePost;
