import React from "react";
import { Link } from "react-router-dom";
import Time from "./loader/Time";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { abbreviateNumber } from "js-abbreviation-number";

function Video({ video }) {
  return (
    <div className="">
      <Link key={video?.videoId} to={`/video/${video?.videoId}`}>
        <div className="flex flex-col">
          {/* thumbnail & duration */}
          <div className="relative h-48 md:h-56 md: rounded-xl hover:rounded-none duration-200 overflow-hidden">
            <img
              className="h-full w-full"
              src={video?.thumbnails[0]?.url}
              alt=""
            />
            {video?.lengthSeconds && <Time time={video?.lengthSeconds} />}
          </div>
          {/* channerl logo & title */}
          <div className="flex mt-3 space-x-2 ">
            <div className="flex items-start">
              <div className="flex h-9 w-9 rounded-full overflow-hidden border">
                <img
                  className="h-full w-full rounded-full overflow-hidden"
                  src={video?.author?.avatar[0].url}
                  alt=""
                />
              </div>
            </div>
            <div>
              <span className="text-[16px] font-bold line-clamp-2">
                {video?.title}
              </span>
              <span className="flex items-center font-semibold mt-1 text-[14px] text-[#606060]">
                {video?.author?.title}
                {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                  <BsFillCheckCircleFill className="text-gray-600 ml-1 text-[14px]" />
                )}
              </span>
              <div className="flex text-gray-500 text-[14px]">
                {video?.stats?.views == null ? (
                  <span></span>
                ) : (
                  <span>{`${abbreviateNumber(
                    video?.stats?.views,
                    0
                  )} views`}</span>
                )}
                {video?.stats?.views != null && (
                  <span className="flex text-[24px] leading-none font-bold relative top-[-08px] mx-1">
                    .
                  </span>
                )}
                {video?.publishedTimeText != null && (
                  <span>{video?.publishedTimeText}</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Video;
