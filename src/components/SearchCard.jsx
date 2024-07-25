import { abbreviateNumber } from "js-abbreviation-number";
import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import Time from "./loader/Time";
import { Link } from "react-router-dom";

function SearchCard({ video }) {
  return (
    <div>
      <Link to={`/video/${video?.videoId}`}>
        <div className="flex flex-col md:flex-row  mb-1 md:mb-1  md:p-1">
          <div className="relative flex h-48  w-full md:w-80   ">
            <img
              className="h-full w-full rounded-lg "
              src={video?.thumbnails[0]?.url}
            />
            {video?.lengthSeconds && <Time time={video?.lengthSeconds} />}
          </div>
          <div className="flex flex-col  mt-2 md:mt-0 overflow-hidden ml-3">
            <span className="text-lg md:text-xl font-semibold line-clamp-2 ">
              {video?.title}
            </span>
            <div className="flex font-[#606060] text-sm  truncate overflow-hidden">
              <span>{`${abbreviateNumber(video?.stats?.views, 0)} views`}</span>
              <span className="flex text-[24px] leading-none font-bold  relative top-[-8px] mx-1">
                .
              </span>
              <span className="truncate">{video?.publishedTimeText}</span>
            </div>
            <div className=" md:flex items-center">
              <div className="flex flex-col">
                <div className="flex items-start mr-1 my-1">
                  <div className="flex flex-row h-6 w-6 mt-3 rounded-full overflow-hidden items-center">
                    <img
                      className="h-full w-full object-cover"
                      src={video?.author?.avatar[0]?.url}
                    />
                  </div>
                  <span className="text-sm from-neutral-400 mt-3 ml-2  flex items-center">
                    {video?.author?.title}
                    {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                      <BsFillCheckCircleFill className=" text-[12px] lg:text-[10px] xl:text-[12px] ml-2 mt-1 from-neutral-400" />
                    )}
                  </span>
                </div>

                <span className="empty:hidden text-sm line-clamp-3 md:line-clamp-2md:pr-24 md:my-2">
                  {video?.descriptionSnippet}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default SearchCard;
