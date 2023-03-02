import React, { useEffect } from "react";
import { YOUTUBE_API_BASE_URL } from "../utils/constants";
import Chip from "./Chip";

const Chips = () => {
  const [chips, setChips] = React.useState([]);
  useEffect(() => {
    //api call
    getCategories();
  }, []);

  async function getCategories() {
    const response = await fetch(
      YOUTUBE_API_BASE_URL +
        "/videoCategories?part=snippet&regionCode=US&key=" +
        process.env.REACT_APP_YOUTUBE_API_KEY
    );
    const data = await response.json();
    // console.log(data?.items);
    setChips(data?.items);
  }
  return (
    <section className="chips flex fixed w-full top-12 py-4  z-10 bg-white">
      {chips.map((chip) => (
        <Chip key={chip.id} info={chip} />
      ))}
    </section>
  );
};

export default Chips;
