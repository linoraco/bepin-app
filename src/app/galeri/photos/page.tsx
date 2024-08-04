import React from "react";
import { images } from "@/utils/images";

export default function page() {
  return (
    <div>
      <div className="px-[10%]">
        <div className="flex justify-center">
          {" "}
          <h1 className="lg:text-2xl  my-10 bg-yellow-400 w-[200px] text-center p-2 rounded-tl-3xl rounded-br-3xl text-black">
            Photos
          </h1>
        </div>
        <div className="grid  grid-cols-1 animate-slide-in-right   min-[570px]:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3  place-items-center gap-3">
          {images.map((image) => (
            <div
              key={image.id}
              className="flex flex-col items-center justify-center mb-4"
            >
              <img src={image.url} alt={image.alt} className="w-full h-auto" />
              <p>{image.alt}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
