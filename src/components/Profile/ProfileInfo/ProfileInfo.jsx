import React from "react";
import classes from './ProfileInfo.module.css';


const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        <img className={classes.img} src="https://sportishka.com/uploads/posts/2021-12/1639461424_40-sportishka-com-p-mototsikl-minsk-na-oboi-sport-krasivo-foto-42.jpg" alt="dsads"></img>
      </div>
      <div className={classes.descriptionBlock}>ava + des</div>
    </div>
  );
};

export default ProfileInfo;