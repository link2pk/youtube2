import { useState, useEffect } from "react";
import { YOUTUBE_API_BASE_URL } from "./constants";

const useChannel = (channelId) => {
  const [channel, setChannel] = useState([]);
  useEffect(() => {
    getChannels();
  }, []);

  async function getChannels() {
    // console.log("getChannels called");
    const response = await fetch(
      YOUTUBE_API_BASE_URL +
        "/channels?part=snippet%2CcontentDetails%2Cstatistics&id=" +
        channelId +
        "&key=" +
        process.env.REACT_APP_YOUTUBE_API_KEY
    );
    const data = await response.json();
    // console.log(data.items[0]);
    setChannel(data.items[0]);
  }
  return channel;
};

export default useChannel;
