import React from 'react';
import ReactPlayer from 'react-player';
import { Box } from '@chakra-ui/react';

const Player = ({ url }) => {
	return (
		<Box border="2px" maxWidth="700px" bg="black" color="white">
			<ReactPlayer width="100%" url={url} playing />
		</Box>
	);
};
export default Player;
