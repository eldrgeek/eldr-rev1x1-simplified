import React from "react";
import {
  Box,
  FormErrorMessage,
  FormControl,
  Button
  // FormLabel,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
export default function HookForm({ scrollTo, text = "Tell Me" }) {
  const { handleSubmit, errors, formState } = useForm();

  return (
    <Box bg="black" h="100%" w="100%" align="center">
      <Button
        fontFamily="stencil-std"
        mt={4}
        border="2px"
        bg="black"
        color="white"
        isLoading={formState.isSubmitting}
        type="submit"
      >
        Show me how to get a virtual button
      </Button>
    </Box>
  );
}
