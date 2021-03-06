import * as React from "react";
import { Formik, Field, Form, FormikHelpers } from "formik";
import { Flex, Center, Button, Box } from "@chakra-ui/react";
import TextBlock from "./TextBlock";
// import emailjs from "emailjs-com";

import { writeData } from "./firebase";
interface Values {
  name: string;
  line1: string;
  line2: string;
  city: string;
  state: string;
  zip: string;
  date: string;
}

const InputBox = ({ width = "400px", name, placeholder, label }) => {
  return (
    <Box ml="-14" width={width} border="2px" bg="black" color="white">
      <label htmlFor={name}> {label} </label>
      {/* <br/>  */}
      <Field
        width={width}
        style={{
          alignItems: "left",
          paddingLeft: "6px",
          background: "black",
          // @ts-ignore
          width: parseInt(width, 10) - 10 + "px"
          // width: { width }
        }}
        id={name}
        name={name}
        placeholder={placeholder}
      />
    </Box>
  );
};

const App = ({ submitted, setSubmitted }) => {
  return submitted ? (
    <TextBlock
      heading="You did it!"
      body="Yay, you're getting a button
      "
    />
  ) : (
    <Box>
      <h1>Signup</h1>
      <Formik
        initialValues={{
          name: "",

          email: "",
          line1: "",
          line2: "",
          city: "",
          state: "",
          zip: "",
          date: ""
        }}
        // @ts-ignore
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          values.date = new Date().toString();
          writeData(values);
          // emailjs
          // 	.send(
          // 		'service_xxcai49',
          // 		'template_h678mmq',
          // 		values,
          // 		'user_wR2kAffqBvmMh8Mp2Mzoj'
          // 	)
          // 	.then(
          // 		function (response) {
          // 			console.log('SUCCESS!', response.status, response.text);
          // 		},
          // 		function (error) {
          // 			console.log('FAILED...', error);
          // 		}
          // 	);
          setSubmitted(true);
        }}
      >
        <Form>
          <Flex width="300px">
            <InputBox placeholder="Your name" name="name" label="Name" />
          </Flex>

          <Flex width="300px">
            <InputBox placeholder="Email" name="email" label="Email" />
          </Flex>
          <Center align="auto" width="100%">
            <TextBlock
              heading="That's all we need"
              body="Click submit for a virtual button
      "
            />
          </Center>
          {/* <Flex width="300px">
            <InputBox
              placeholder="Line 1"
              name="line1"
              label="Mailing Address"
            />
            <Spacer />
          </Flex>

          <Flex width="300px">
            <InputBox
              placeholder="Line 2"
              name="line2"
              label="Address Line 2"
            />
          </Flex>
          <Flex width="300px">
            <InputBox
              width="250px"
              placeholder="City"
              name="city"
              label="City"
            />
            <InputBox
              width="150px"
              placeholder="State"
              name="state"
              label="State"
            />
            <InputBox width="122px" placeholder="Zip" name="zip" label="Zip" /> */}
          {/* </Flex> */}
          <Button mt={4} type="submit">
            Submit
          </Button>
        </Form>
      </Formik>
    </Box>
  );
};
export default App;
