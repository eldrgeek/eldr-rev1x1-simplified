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
			<Text fontFamily="stencil-std" mt={4} fontSize="4xl">
				{heading}
			</Text>
			<Text
				fontFamily="Allerta Stencil"
				maxWidth="700px"
				mx={10}
				align="left"
				fontSize="xl"
			>
				{body}
			</Text>
		</Box>
	);
}
