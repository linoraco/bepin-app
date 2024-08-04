"use client";
import React from "react";
import { videos } from "../../../utils/videos";
import ReactPlayer from "react-player";

export default function page() {
  return (
    <div>
      <div className="px-[10%]">
        <div className="flex justify-center">
          {" "}
          <h1 className="lg:text-2xl  my-10 bg-yellow-400 w-[200px] text-center p-2 rounded-tl-3xl rounded-br-3xl text-black">
            Videos
          </h1>
        </div>
        <div className="grid  grid-cols-1 animate-slide-in-left   min-[570px]:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3  place-items-center gap-3">
          {videos.map((video) => (
            <div
              key={video.id}
              className="flex flex-col items-center justify-center mb-4"
            >
              <ReactPlayer
                url={video.url}
                controls
                width="100%"
                height="100%"
              />
              <p>{video.alt}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
