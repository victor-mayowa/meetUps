import React from "react";
import MeetUpItem from "./MeetUpItem";
import styles from "./MeetUpList.module.css"

const MeetUpList = (props) => {
  const list = props.meetups.map((meetup) => {
    const { id, title, image, address, description } = meetup;
    return (
      <MeetUpItem
        key={id}
        id={id}
        title={title}
        image={image}
        address={address}
        description={description}
      />
    );
  });

  return <ul className={styles.list}>{list}</ul>;
};
export default MeetUpList;
