import React, { createRef } from "react";
import Webcam from "react-webcam";
import { Flex, Center, Stack, Button, Text, Box } from "@chakra-ui/react";

import html2canvas from "html2canvas";
// import Text from './Text';
import DragButton from "./DragButton";
import { writeImage } from "./firebase";
import TextBlock from "./TextBlock";
// import { useScreenshot } from 'use-react-screenshot';
import ButtonForm from "./ButtonForm";
const Text1 = (props) => {
  return <TextBlock heading="" body={props.children}></TextBlock>;
};
const FormArea = ({ submitted, setSubmitted }) => {
  return (
    <Box m={4} bg={"black"} align="center">
      <Box>
        <Center align="auto" width="100%">
          <TextBlock heading={`Get your virtual button `} body="" />
        </Center>
        <Text1>1. Enter your name and email in the form below.</Text1>
        <Text1>
          2. Click SUBMIT.
          <br /> <br /> The form will disappear and your computer will ask you
          to give this page permission to use your camera.
        </Text1>
        <Text1>
          3. Give permission. <br /> <br /> You'll see yourself along with your
          very own bright shiny virtual button
        </Text1>

        <Text1>
          4. You can take a selfie with your button, and we'll add it to the
          official Revolution 1x1 video. We might even email you a copy.
        </Text1>
      </Box>
      <ButtonForm submitted={submitted} setSubmitted={setSubmitted} />
      <Box m={4} bg={"black"} align="center">
        <Text fontSize="l">Drag button to move</Text>
      </Box>
      )
    </Box>
  );
};
const Heading = ({
  data,
  countdownForImage,
  screenShot,
  setScreenShot,
  setSnapshot,
  setPage
}) => {
  const [status, setStatus] = React.useState("ready");
  React.useEffect(() => {
    if (status === "uploaded") {
      setTimeout(() => setPage("main", 1000));
    }
  }, [status, setPage]);
  return (
    <Box>
      {/* <canvas id="canvas" height="100px" width="400px" /> */}
      {!screenShot && (
        <Flex bg="black" color="white">
          <Box p={4} flex="1">
            <Stack>
              <Text fontSize="l">Drag button to move</Text>
              <Text fontSize="l">Drag black square to resize</Text>
            </Stack>
          </Box>
          <Box flex="1">
            <Button
              // mx="auto"
              color="black"
              m="2"
              border="1px solid black"
              onClick={countdownForImage}
            >
              Click to take screenshot
            </Button>
          </Box>
        </Flex>
      )}
      {screenShot && [
        <Button
          key="1"
          mx="10"
          my="2"
          border="1px solid black"
          onClick={() => {
            // console.log('screenshot', image);
            setSnapshot(null);
            setScreenShot(null);
          }}
        >
          I don't like it. <br />
          Let me try again
        </Button>,

        <Button
          key="2"
          mx="10"
          my="2"
          border="1px solid black"
          onClick={() => {
            writeImage(setStatus, data);
          }}
        >
          I like it.
          <br />
          Please upload it
        </Button>,
        <Center color="white">{status}</Center>
      ]}
      {/* <label style={{ display: 'block', margin: '10px 0' }}>
		Width:
		<input value={width} onChange={(e) => setWidth(e.target.value)} />
	</label> */}
    </Box>
  );
};
const MainPhoto = ({ setPage }) => {
  const ref = createRef();
  const webcamRef = React.useRef<Webcam>(null);

  // const [width, setWidth] = useState(300);
  const [countdown, setCountDown] = React.useState(-1);
  const [position, setPosition] = React.useState({ x: 300, y: 200 });
  const [screenShot, setScreenShot] = React.useState(null);
  const [snapShot, setSnapshot] = React.useState(null);
  // const [submitted, setSubmitted] = React.useState(false);
  // const [screenShot, takeScreenShot] = useScreenshot();
  const [data, setData] = React.useState("");
  const getImage = () => {
    //@ts-ignore
    const imageSrc = webcamRef.current.getScreenshot();
    //@ts-ignore
    setSnapshot(imageSrc);
  };
  React.useEffect(() => {
    if (countdown > 0) {
      setTimeout(() => setCountDown(countdown - 1), 1000);
    }
    if (countdown === 0) {
      console.log("NOW!!!");
      setCountDown(-1);
      setTimeout(getImage, 100);
    }
  }, [countdown]);

  const countdownForImage = () => {
    console.log("Taking screenshot");
    setCountDown(3);
    // getImage();
  };

  const convToCanvas = () => {
    console.log("Conv to canvas");
    //@ts-ignore
    html2canvas(ref.current, {
      // canvas: canvas,
      allowTaint: true,
      useCORS: true
    }).then((canvas) => {
      console.log("got canvas");
      const dataURL = canvas.toDataURL();
      ///@ts-ignore
      setData(dataURL);

      setScreenShot(dataURL);
      //https://html2canvas.hertzen.com/getting-started
    });
  };

  React.useEffect(() => {
    if (snapShot) {
      setTimeout(convToCanvas, 0);
    }
    //@ts-ignore
  }, [snapShot]); // eslint-disable-line
  return (
    <Box bg="black" mx="auto" maxW="500px">
      <Heading
        {...{
          setPage,
          data,
          countdownForImage,
          screenShot,
          setScreenShot,
          setSnapshot
        }}
      />
      {countdown > 0 && (
        <Center h="60%" w="100%" maxW="500px" position="absolute" color="white">
          <Box margin="auto">
            <Text textAlign="center" color="black" fontSize="6xl">
              Smile!
            </Text>
            <Text textAlign="center" color="black" fontSize="8xl">
              {countdown}
            </Text>
          </Box>
        </Center>
      )}
      {screenShot && (
        <img
          crossOrigin="anonymous"
          width={"100%"}
          src={screenShot || ""}
          alt={"ScreenShot"}
        />
      )}
      {
        //@ts-ignore

        <div ref={ref}>
          {
            snapShot && !screenShot && (
              <img
                crossOrigin="anonymous"
                width={"100%"}
                src={snapShot || ""}
                alt={"Snapshot"}
              />
            )
            // <ButtonForm submitted={submitted} setSubmitted={setSubmitted} />
          }
          {!screenShot && (
            <DragButton setPosition={setPosition} position={position} />
          )}

          {!snapShot && (
            //@ts-ignore
            <Webcam
              // videoConstraints={{
              // 	// width: "10px",
              // 	// height: "10px",
              // 	facingMode: 'user'
              // }}
              // width="100%"
              audio={false}
              ref={webcamRef}
              width={"100%"}
              screenshotFormat="image/jpeg"
            />
          )}
        </div>
      }
    </Box>
  );
};
const Photobooth = ({ setPage }) => {
  const [submitted, setSubmitted] = React.useState(false);

  return !submitted ? (
    <FormArea {...{ submitted, setSubmitted }} />
  ) : (
    <MainPhoto {...{ setPage }} />
  );
};
export default Photobooth;
