import React, { useContext, useState, useEffect } from "react";
import { ContextProvider } from "../../Global/Context";
import { db } from "../../config";
const Commnets = (props) => {
  const [state, setState] = useState("");
  const [comments, setComments] = useState([]);
  const { loader, user, publishComment } = useContext(ContextProvider);

  const postComment = (e) => {
    e.preventDefault();
    publishComment({ id: props.id, comment: state });
    setState("");
  };
  useEffect(() => {
    db.collection("posts")
      .doc(props.id)
      .collection("comments")
      .orderBy("currentTime", "desc")
      .onSnapshot((snp) => {
        setComments(snp.docs.map((doc) => doc.data()));
      });
  }, []);

  return (
    // to fetch all comments
    <div className="comments">
      {comments.map((comments) => {
        return (
          <div className="comments__container" key={comments.id}>
            <div className="comments_contaienr-name">{comments.userName}</div>
            <div className="comments_contaienr-msg ">{comments.comment}</div>
          </div>
        );
      })}

      {/* to add commnet input if user Login */}
      <div className="comments__section">
        {!loader && user ? (
          <form onSubmit={postComment}>
            <input
              type="text"
              className="comments__input"
              placeholder="Add comment..."
              required
              onChange={(e) => setState(e.target.value)}
              value={state}
            />
          </form>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Commnets;
