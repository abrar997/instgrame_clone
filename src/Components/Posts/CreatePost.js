import React from "react";
import { FaCamera, FiCamera } from "react-icons/fa";
const CreatePost = () => {
  return (
    <div className="create_post">
      <form>
        <div>
          <input
            type="text"
            className="create__input"
            placeholder="What are in your mind ?"
            required
          />
        </div>

        <div className="create__second">
          <div className="create__second-a">
            <label htmlFor="file">
              <FaCamera className="camera" />
            </label>
            <input type="file" className="file" id="file" />
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
  );
};

export default CreatePost;
