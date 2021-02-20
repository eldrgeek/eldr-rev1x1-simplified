import React from "react";
import ReactPlayer from "react-player";
import { Box } from "@chakra-ui/react";

const Player = ({ url }) => {
  return (
    <Box>
      <ReactPlayer url={url} playing />
    </Box>
  );
};
export default Player;
