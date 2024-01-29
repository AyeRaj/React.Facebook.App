import "./decard.css";
import React from "react";
// import ThumbUpIcon from "@mui/icons-material/ThumbUp";
// import CommentIcon from "@mui/icons-material/Comment";
// import ShareIcon from "@mui/icons-material/Share";
// import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
export default function (prop) {
  let patj =
    "https://images.pexels.com/photos/18509060/pexels-photo-18509060/free-photo-of-woman-in-elegant-white-jacket-posing-with-lantern-under-storm-clouds-in-field.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load";
  let recArr = prop.prop;
  console.log(recArr);
  return (
    <div>
      <div className="card">
        <div className="post-head">
          <div className="user-details">
            <img
              className="profile"
              src={recArr.userImage}
              alt="profile-picture"
            />
            <div>
              <div className="user-name">
                <h3>{recArr.userName}</h3>
              </div>
              <div>
                <p className="time">{recArr.time}</p>
              </div>
            </div>
          </div>
          <div>
            <span class="material-symbols-outlined">more_horiz</span>
          </div>
        </div>
        <div>
          <img className="image-part" src={recArr.postImage} alt="post" />
        </div>
        <div>
          <div className="icons-section">
            <div>
              <span class="material-symbols-outlined">thumb_up</span>
            </div>
            <div>
              <span class="material-symbols-outlined">comment</span>
            </div>
            <div>
              <span class="material-symbols-outlined">send</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
