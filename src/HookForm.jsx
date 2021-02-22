import React from 'react';
import TextBlock from './TextBlock';
import Player from './Player';
import { Box, Text } from '@chakra-ui/react';
import RequestButton from './RequestButton';
import { Element, scroller } from 'react-scroll';

const scrollTo = () => {
	scroller.scrollTo('myScrollToElement', {
		duration: 1500,
		delay: 100,
		smooth: true,
		//   containerId: 'ContainerElementID',
		offset: 0 // Scrolls to element + 50 pixels down the page
		//   ...
	});
	// scroll.scrollToBottom()
};

export default function HookForm() {
	return (
		<Box m={0} bg="black" h="100%" w="100%" align="center">
			<Text color="white" fontFamily="stencil-std" pt={12} fontSize="6xl">
				Revolution 1x1
			</Text>
			<Player url="https://vimeo.com/514507334" />
			<TextBlock
				heading="About the Revolution"
				body="Written in 2007, six years after the unprecedented loss of life and
				horrific destruction of the Twin Towers in NYC, it may seem naive
				to have assumed that global peace and understanding could flow
				from something as commonplace as a friendly greeting to a stranger."
			/>
			<TextBlock
				body="
				I believe that the chain of events in our lives that binds us one-to-
				another is a sacred mystery. And that making the world a better
				place for all peoples calls for an investment of personal kindness.
				As the song suggests, “We&#39;re a raggle-taggle army, with no uniform
				or guns. But we&#39;ve been called by co-incidence so maybe we&#39;re the
				ones...to take this Revolution to the street. &#39;Smile at every solitary
				person that we meet. &#39;Wave at total strangers, no matter where
				they&#39;re from. We&#39;re gonna start a Revolution. We&#39;re gonna win it
				One by One!”
			and so on and so on and here is more here than you can know"
			/>

			<RequestButton scrollTo={scrollTo} />

			<TextBlock
				heading="Blah blah blah"
				body="Get your button. Get your button. Yada yada
				Get your button. Yada yada
				Get your button. Yada yada
				Get your button. Yada yada
			and so on and so on and here is more here than you can know"
			/>
			<RequestButton scrollTo={scrollTo} />

			<TextBlock
				heading="Yet more text"
				body="Get your button. Get your button. Yada yada
				Get your button. Yada yada
				Get your button. Yada yada
				Get your button. Yada yada
			and so on and so on and here is more here than you can know"
			/>
			<RequestButton scrollTo={scrollTo} />
			<Element name="myScrollToElement"></Element>
			<iframe
				title="get my button"
				src="https://docs.google.com/forms/d/e/1FAIpQLSfn2KPijE8ynj7AbU9KIw1qwvBwNv7WfuiDRsxuWr_Znv7ZEQ/viewform?embedded=true"
				width="90%"
				height="1200px"
				frameBorder="0"
				marginHeight="0"
				marginWidth="0"
			>
				Loading…
			</iframe>
		</Box>
	);
}
