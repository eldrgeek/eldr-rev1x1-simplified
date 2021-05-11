import React, { createRef } from "react";
import Webcam from "react-webcam";
import { Flex, Stack, Button, Text, Box } from "@chakra-ui/react";

import html2canvas from "html2canvas";
// import Text from './Text';
import DragButton from "./DragButton";
import { writeImage } from "./firebase";
// import { useScreenshot } from 'use-react-screenshot';
import ButtonForm from "./ButtonForm";
// import { boxShadow } from "html2canvas/dist/types/css/property-descriptors/box-shadow";
const Text1 = (props) => {
  return (
    <Text pl={2} mb={2} color="white" fontSize="l" {...props}>
      {props.children}
    </Text>
  );
};
const FormArea = ({ submitted, setSubmitted }) => {
  return (
    <Box m={4} bg={"black"} align="center">
      <Text1 fontSize="xl">Here's how to get your virtual button</Text1>
      <Text1>Here's how to get your virtual button</Text1>
      <Text1>1. Fill out the form.</Text1>
      <Text1>
        2. Once you SUBMIT it the form will disappear and you'll be asked to
        give this page permission to use your camera. If you say yes, you'll see
        yourself along with a virutal button
      </Text1>
      <Text1>
        3. You can take a selfie with it, and we'll add it to the officieal
        Revolution 1x1 video
      </Text1>
      <ButtonForm submitted={submitted} setSubmitted={setSubmitted} />
      <Box m={4} bg={"black"} align="center">
        <Text fontSize="l">Drag button to move</Text>
      </Box>
      )
    </Box>
  );
};
const Heading = ({ getImage, screenShot, setScreenShot, setSnapshot }) => {
  const [submitted, setSubmitted] = React.useState(false);

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
              onClick={getImage}
            >
              Click to take screenshot
            </Button>
          </Box>
        </Flex>
      )}
      {screenShot && (
        <Button
          mx="auto"
          my="2"
          border="1px solid black"
          onClick={() => {
            // console.log('screenshot', image);
            setSnapshot(null);
            setScreenShot(null);
          }}
        >
          Reset
        </Button>
      )}
      {screenShot && (
        <Button
          mx="auto"
          my="2"
          border="1px solid black"
          onClick={() => alert("coming soon")}
        >
          Upload
        </Button>
      )}
      {/* <label style={{ display: 'block', margin: '10px 0' }}>
		Width:
		<input value={width} onChange={(e) => setWidth(e.target.value)} />
	</label> */}
    </Box>
  );
};
const MainPhoto = () => {
  const ref = createRef();
  const webcamRef = React.useRef<Webcam>(null);

  // const [width, setWidth] = useState(300);
  const [position, setPosition] = React.useState({ x: 300, y: 200 });
  const [screenShot, setScreenShot] = React.useState(null);
  const [snapShot, setSnapshot] = React.useState(null);
  const [submitted, setSubmitted] = React.useState(false);
  // const [screenShot, takeScreenShot] = useScreenshot();
  const getImage = () => {
    console.log("Taking screenshot");
    //@ts-ignore
    const imageSrc = webcamRef.current.getScreenshot();
    //@ts-ignore
    setSnapshot(imageSrc);
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
      // writeImage("name", dataURL);
      setScreenShot(dataURL);
      //https://html2canvas.hertzen.com/getting-started
    });
  };
  React.useEffect(() => {
    if (snapShot) {
      convToCanvas();
    }
    //@ts-ignore
  }, [snapShot]); // eslint-disable-line
  return (
    <Box bg="black" mx="auto" maxW="500px">
      <Heading {...{ getImage, screenShot, setScreenShot, setSnapshot }} />
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
          {snapShot &&
            !screenShot && [
              <img
                crossOrigin="anonymous"
                width={"100%"}
                src={snapShot || ""}
                alt={"Snapshot"}
              />
              // <ButtonForm submitted={submitted} setSubmitted={setSubmitted} />
            ]}
          {!screenShot && (
            <DragButton setPosition={setPosition} position={position} />
          )}
          {!screenShot && (
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
const PhotobBooth = () => {
  const [submitted, setSubmitted] = React.useState(false);

  return !submitted ? (
    <FormArea {...{ submitted, setSubmitted }} />
  ) : (
    <MainPhoto />
  );
};
export default PhotobBooth;
