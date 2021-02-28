import React from 'react';
import {
	Box,
	Text
	// FormLabel,
	// Input,
	// Button
} from '@chakra-ui/react';

export default function TextBlock({ heading, body }) {
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
				{Array.isArray(body)
					? body.map((seg, index) => <span key={index}>{seg}</span>)
					: body}
			</Text>
		</Box>
	);
}
