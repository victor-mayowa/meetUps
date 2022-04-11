import React, { useEffect, useState } from "react";
import MeetUpList from "../meetups/MeetUpList";
import Axios from "../Api/axios";
import Spinner from "../spinner/Spinner";

const AllMeetUps = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const getMeetups = async () => {
      const response = await Axios.get("meetups.json");
      //  console.log(response)
      const data = response.data;
      //  console.log(data)

      const meetups = [];

      for (const key in data) {
        const meetup = {
          id: key,
          ...data[key],
        };
        meetups.push(meetup);
      }

      setIsLoading(false);

      setLoadedMeetups(meetups);
    };
    getMeetups();
  }, []);

  if (isLoading) {
    return(
      <div style={{ marginTop: "6rem" }}>
      <Spinner />
    </div>
    )
   
  }

  return (
    <div style={{ marginTop: "6rem" }}>
      <h3>All Meetups</h3>
      <MeetUpList meetups={loadedMeetups} />
    </div>
  );
};

export default AllMeetUps;
