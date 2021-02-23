import React from 'react';
import TextBlock from './TextBlock';
import Player from './Player';
import { Box, Text, Link } from '@chakra-ui/react';
import RequestButton from './RequestButton';
import { Element, scroller } from 'react-scroll';
import Verse from './Verse';
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
			<TextBlock
				heading="Our anthem"
				body="
        Click the player below to play or pause our anthem
        "
			/>
			<Player url="https://vimeo.com/514507334" />

			<RequestButton scrollTo={scrollTo} />

			<Verse />
			<RequestButton scrollTo={scrollTo} />

			<TextBlock
				heading="About the Revolution"
				body="Written in 2007, six years after the unprecedented loss of life and
				horrific destruction of the Twin Towers in NYC, it may seem naive
				to have assumed that global peace and understanding could flow
				from something as commonplace as a friendly greeting to a stranger."
			/>
			<TextBlock
				body="
				We believe that the chain of events in our lives that binds us one-to-another 
				is a sacred mystery. 
			"
			/>
			<TextBlock
				body="
				We believe that making the world a better
				place for all peoples calls for an investment of personal kindness.
				
			"
			/>

			<TextBlock
				body="
				As the song suggests, “We&#39;re a raggle-taggle army, with no uniform
				or guns. But we&#39;ve been called by coincidence so maybe we&#39;re the
				ones...to take this Revolution to the street. &#39;Smile at every solitary
				person that we meet. &#39;Wave at total strangers, no matter where
				they&#39;re from. We&#39;re gonna start a Revolution. We&#39;re gonna win it
				One by One!”
			"
			/>

			<TextBlock
				heading="About the buttons"
				body="How can you show you've joined the revolution? 
        Smiling doesn't work with a mask on. But you can wear a
        button. 
      "
			/>
			<TextBlock
				heading="Just Causes"
				body={[
					<Box
						className="justcauses"
						as="span"
						color="red.500"
						sx={{
							'.justcauses:hover &': {
								color: 'green.500'
							}
						}}
					>
						<Link
							className="justcauses"
							href="https://www.noelpaulstookey.com/"
						>
							JUST CAUSES
						</Link>
					</Box>,
					` is the name of a new CD including 
				 Revolution 1x1 and fourteen other songs by `,
					<Link
						className="justcauses"
						href="https://www.noelpaulstookey.com/"
						as="a"
						color="red.500"
						isExternal
					>
						Noel Paul Stookey.
					</Link>,
					`
				 
				 The planned release

				is March 22, 2021.`
				]}
			/>
			{/* <TextBlock
					body="

				The proceed from the CD and other stuff
				will be divided among the following non-profit
				organizaitons:
				<LIST GOES HERE>  
      "
			/> */}
			<RequestButton scrollTo={scrollTo} />

			<Element name="myScrollToElement"></Element>
			<TextBlock
				heading="While supplies last"
				body="
				We've made a batch of buttons 
				and we'll send them out while supplies 
				last. They're cheaper to make than to send. So if you'd to produce more buttons, clich <here>
				to find out how to make your own, or click <here>
				to chip in to help fund the making and mailing from 
				this site.
			"
			/>
			<RequestButton scrollTo={scrollTo} />
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
