import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://www.kino-teatr.ru/acter/album/51586/1252819.jpg" alt="" />
        {props.message}
        <div>
          <span>Like</span>
        </div>
    </div>
  );
};

export default Post;
