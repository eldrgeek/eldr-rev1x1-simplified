import React from 'react';
import {
	Box,
	Text
	// FormLabel,
	// Input,
	// Button
} from '@chakra-ui/react';

export default function TextBlck({ heading, body }) {
	return (
		<Box color="white">
			<Text fontFamily="stencil-std" mt={4} fontSize="2xl">
				{heading}
			</Text>
			<Text mx={10} align="left" fontSize="xl">
				{body}
			</Text>
		</Box>
	);
}
