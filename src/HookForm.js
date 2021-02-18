import { useForm } from 'react-hook-form';
import React from 'react';
import {
	FormErrorMessage,
	Box,
	// FormLabel,
	FormControl,
	// Input,
	Button
} from '@chakra-ui/react';

export default function HookForm() {
	const { handleSubmit, errors, formState } = useForm();

	// function validateName(value) {
	//   if (!value) {
	//     return "Name is required";
	//   } else if (value !== "Naruto") {
	//     return "Jeez! You're not a fan 😱";
	//   } else return true;
	// }

	function onSubmit(values) {
		return new Promise((resolve) => {
			setTimeout(() => {
				alert(JSON.stringify(values, null, 2));
				resolve();
			}, 3000);
		});
	}

	return (
		<Box bg="black" w="100%" align="center">
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
					Send me my mother f****** button
				</Button>
			</form>
			<iframe
				title="get my button"
				src="https://docs.google.com/forms/d/e/1FAIpQLSfn2KPijE8ynj7AbU9KIw1qwvBwNv7WfuiDRsxuWr_Znv7ZEQ/viewform?embedded=true"
				width="90%"
				height="953"
				frameborder="0"
				marginheight="0"
				marginwidth="0"
			>
				Loading…
			</iframe>
		</Box>
	);
}
