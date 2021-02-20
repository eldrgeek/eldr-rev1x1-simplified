import React from "react";
import ReactPlayer from "react-player";
import { Box } from "@chakra-ui/react";

const Player = ({ url }) => {
  return (
    <Box>
      <ReactPlayer height="100%" width="100%" url={url} playing />
    </Box>
  );
};
export default Player;
