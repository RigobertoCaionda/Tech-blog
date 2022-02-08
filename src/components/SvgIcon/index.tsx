import React, { useState } from "react";

type Props = {
  isLiked: boolean;
};

const SvgIcon: React.FC<Props> = ({ isLiked }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 257">
      <path
        d="M148.3 12.3l.5 40.5c-9.6 20.7-28.7 52.6-42.4 64.4l-1.7-2.2-94.7-.2c-4.9-.2-10.1 5.4-9.8 9.2l9.3 121.2c.3 4 4.5 9 9 9h84.3c3.3 0 7.8-3.3 8-7.3l.4-10.6c2.7 3.9 10.1 9.7 16.5 9.7h113.6c14.2 0 36.1-15.1 28.9-40.7 8.1-6.5 13-17.6 8.1-31.6 8.5-7 14.8-20.1 7.6-31.8 22.8-19.1 8-45.8-9.6-45.8h-76.5c2.9-12.5 7.4-25.3 7.1-42.1-.3-14.5-9.9-35.7-16.8-47-2.9-4.8-29.5-13.9-41.8 5.3z"
        style={{
          stroke: isLiked ? "#455c91" : "#444",
          fill: isLiked ? "#485c90" : "#444"
        }}
      />
      <path
        style={{
          fill: isLiked ? "#6e7fb3" : "#444"
        }}
        d="M11.2 126.5h79.7l.2 117.1h-71l-8.9-117.1z"
      />
      <path
        style={{
          fill: isLiked ? "#6475ab" : "#444"
        }}
        d="M19.7 142.3h63.1v94.2H27.7l-8-94.2z"
      />
      <path
        style={{
          fill: "#edf5f7"
        }}
        d="M186.8 107.1c3.6-14.7 6.3-31 8.1-46.6.4-3.8.4-7.2-.2-10.4-2.3-12.6-7.6-23.9-12.5-35.2-4.9-3.9-14.5-5.4-21.7.5v39.8c-12.1 23.7-25.7 46.5-42.5 67.4l-16 11v92.1h11s14.6 8.9 15.3 8.5c1.3.6 113.6.3 113.6.3 6.1.1 28-15.9 14.1-28.4-1.9-1.1-1.6-4.6.1-5.7 8.7-1.6 19.3-18 8.3-26.7-1.9-2.1-.5-5.4 1.7-5.6 6.5-3.2 17.7-13.7 7.6-26.5-2.1-1-2.1-3.7-.2-5.4 9.8-1.4 22.3-23.8 1.7-29.2l-88.4.1z"
      />
      <path
        style={{
          fill: "#dce4e7"
        }}
        d="M110.1 225.8V128l-8.1 5.5v92.3h8.1z"
      />
      <path
        style={{
          fill: "#dce4e7"
        }}
        d="M171 11.4l9.4 40.7-25 44.4c-2.6 4.6.5 9.3 4.3 9.4l27.1 1.3c4.1-18.7 9.1-41.5 8.1-55.6-1.9-9.8-5.8-22.2-12.8-36.8-3.9-2.7-7.1-3.4-11.1-3.4z"
      />
      <path
        style={{
          fill: "#dce4e7"
        }}
        d="M240.4 107c8.9 8.4 3.5 24.3-4.3 30-1.5.9-1.8 3-.7 4.3 8.6 9.8-2.8 26.4-6.5 28.1-1.2 1.1-1.3 2.3-1.1 3.6 9.8 13.7-1.5 25.2-5.4 27.8-1.3 1.2-1.7 3.1-.7 5 8.5 13.5-1.4 23-7 28.9l27.9.1c5.4.3 27.9-16.1 13-28.9-1.7-1.4-.6-5.2.6-5.4 7.4-1.3 20.4-16.9 8.2-26.8-.9-.7-1.6-4.1 1.7-5.6 10.1-4.5 16.3-15.2 7.7-26.5-2.3-1.3-2-4.1-.2-5.2 16.8-5 17.2-27.3 1.6-29.3l-34.8-.1z"
      />
      <g>
        <path
          style={{
            fill: "#fff"
          }}
          d="M78.2 224.6c.1 4.6-3.5 8.3-8.1 8.4-4.6.1-8.3-3.5-8.4-8.1-.1-4.6 3.5-8.3 8.1-8.4 4.5-.1 8.3 3.6 8.4 8.1"
        />
        <path d="M69.1 223.1c0 .6-.5 1-1 1-.6 0-1-.5-1-1s.5-1 1-1c.6-.1 1 .4 1 1" />
        <path d="M72.7 223.1c0 .6-.5 1-1 1-.6 0-1-.5-1-1s.5-1 1-1c.6-.1 1 .4 1 1" />
        <path d="M72.7 226.7c0 .6-.5 1-1 1-.6 0-1-.5-1-1s.5-1 1-1c.6 0 1 .4 1 1" />
        <path d="M69.1 226.7c0 .6-.5 1-1 1-.6 0-1-.5-1-1s.5-1 1-1c.6 0 1 .4 1 1" />
      </g>
    </svg>
  );
};

export default SvgIcon;
