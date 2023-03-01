import React, { useEffect } from "react";
import Chip from "./Chip";

const Chips = () => {
  // const [chips, setChips] = React.useState([]);
  useEffect(() => {
    //api call
    // getChannels()
  }, []);

  //   async function getChannels() {
  //     const response = await fetch(
  //       "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UC_x5XG1OV2P6uZZ5FSM9Ttw&key=AIzaSyBlHuRd6O-Ahns-A3CsSZOPGChtVu1WlNQ"
  //     );
  //     const data = await response.json();
  //     console.log(data);
  //   }
  return (
    <section className="chips">
      <Chip name="all" />
      <Chip name="music" />
      <Chip name="games" />
    </section>
  );
};

export default Chips;
