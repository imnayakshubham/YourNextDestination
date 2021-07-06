import React, { useRef, useState } from "react";
import "../Posts/Posts.css";
import DeleteIcon from "@material-ui/icons/Delete";
import { db } from "../../firebase";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
// import EditIcon from "@material-ui/icons/Edit";

import { useAuth } from "../../context/AuthContext";

function Posts({
  id,
  byuser,
  placename,
  cityname,
  country,
  typeofplace,
  likes,
  dislikes,
  username,
}) {
  const { currentUser } = useAuth();
  const [likesCount, setlikesCount] = useState(0);
  // let count = 0;
  //
  const like = () => {
    if (currentUser) {
      if (likesCount === 0) {
        setlikesCount(1);
        db.collection("posts").doc(id).update({
          likes: likesCount,
        });
      } else {
        setlikesCount(0);
        db.collection("posts").doc(id).update({
          likes: likesCount,
        });
        //   count = 0;
      }
    }

    // count++;
    // if (count === 1) {
    //   setlikesCount(0);
    //   count = 0;
    // }
  };
  // console.log("likesCount = ", likesCount, "count = ", count);

  const deletepost = () => {
    try {
      if (username === byuser) {
        db.collection("posts").doc(id).delete();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="posts">
        <div className="post__container">
          <div className="post__container__username">
            <h2> Suggested by : {byuser}</h2>
          </div>
          <div className="post__container__postdetails">
            <p>
              Place Name: <strong> {placename}</strong>
            </p>
            <p>City Name:{cityname}</p>
            <p>Country:{country}</p>
            <p>Type of Place:{typeofplace}</p>
          </div>
        </div>
        <div className="postfeedback">
          <div className="like">
            {!likesCount ? (
              <ThumbUpIcon onClick={like} />
            ) : (
              <ThumbDownIcon onClick={like} />
            )}
          </div>

          {/* <div className="edit">
            <EditIcon title="edit" onClick={() => update()} />
          </div> */}
          <div className="delete">
            <DeleteIcon title="Delete" onClick={deletepost} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Posts;
