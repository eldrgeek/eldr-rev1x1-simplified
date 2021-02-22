import React from 'react';
import {
	Box,
	FormErrorMessage,
	FormControl,
	Button
	// FormLabel,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
export default function HookForm({ scrollTo }) {
	const { handleSubmit, errors, formState } = useForm();

	// function validateName(value) {
	//   if (!value) {
	//     return "Name is required";
	//   } else if (value !== "Naruto") {
	//     return "Jeez! You're not a fan 😱";
	//   } else return true;
	// }

	function onSubmit(values) {
		scrollTo();
		// return new Promise((resolve) => {
		// 	setTimeout(() => {
		// 		alert('You got a button');
		// 		resolve();
		// 	}, 3000);
		// });
	}

	return (
		<Box bg="black" h="100%" w="100%" align="center">
			<form onSubmit={handleSubmit(onSubmit)}>
				<FormControl isInvalid={errors.name}>
					<FormErrorMessage>
						{errors.name && errors.name.message}
					</FormErrorMessage>
				</FormControl>
				<Button
					fontFamily="stencil-std"
					mt={4}
					border="2px"
					bg="black"
					color="white"
					isLoading={formState.isSubmitting}
					type="submit"
				>
					Please send me a Button
				</Button>
			</form>
		</Box>
	);
}
