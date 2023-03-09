import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import RelatedVideos from "./RelatedVideos";
import useRelatedVideos from "../utils/useRelatedVideos";
import useVideoInfo from "../utils/useVideoInfo";
import WatchVideoInfo from "./WatchVideoInfo";

const Watch = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const videos = useRelatedVideos(videoId);
  const videoInfo = useVideoInfo(videoId);

  return (
    <>
      <div className=" relative top-[-52px] lg:grid gap-5 lg:grid-cols-[1fr_400px]  ">
        <div>
          <iframe
            className="w-full aspect-video self-start mb-3 "
            src={
              "https://www.youtube.com/embed/" +
              searchParams.get("v") +
              "?autoplay=1"
            }
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>

          <WatchVideoInfo videoInfo={videoInfo} />
          <section className="">Comments</section>
        </div>
        <aside className="hidden lg:block">
          {videos?.map((video) => (
            <RelatedVideos key={video?.id?.videoId} video={video} />
          ))}
        </aside>
      </div>
    </>
  );
};

export default Watch;
