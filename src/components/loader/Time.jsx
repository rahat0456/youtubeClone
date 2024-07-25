import moment from "moment";
import React from "react";

function Time({ time }) {
  const videoTime = moment()?.startOf("day")?.seconds(time)?.format("HH:mm:ss");
  return (
    <div>
      <span className="absolute bottom-2 right-2 bg-black text-white px-2 py-1 text-xs rounded-md">
        {videoTime !== "null" && videoTime}
      </span>
    </div>
  );
}

export default Time;
