import React from 'react';
import {
	Box,
	Text
	// FormLabel,
	// Input,
	// Button
} from '@chakra-ui/react';

export default function TextBlck({ heading, body }) {
	const verse = `I'm gonna start a revolution; I'm gonna take it to the street,
I'm gonna smile at every solitary person that I meet!
I'm gonna wave at total strangers no matter where they're from.
I'm gonna start a revolution… gonna win it one by one.
The secret of this movement I'm about to share with you:
You just pick somebody that you don't know – that's all you have to do.
You don't need no other weapon than the smile that's on your face,
Just say hello, lettum know we're all part of the human race.
And if we should encounter (as I'm sure we will),
Some disbelievin' cynic who is disbelievin' still...
We're gonna open all his windows, unlock every door.
We're gonna sweep out every corner, we're gonna mop up every floor,
'Til he goes a dancin' in the jaw of the dragon and sleepin' in the lions den,
Dreamin' in the arms of angels...and he falls in Love again.
This revolution's bound to change a million hearts,
Totally disarm the enemy before the fighting starts.
We're gonna laugh in the face of evil (that misdirected fool).
We're gonna start a revolution... yeah, we're gonna win it, me and you...
But we're a raggle-taggle army - 'got no uniform or guns
Still we been called by coincidence so maybe we're the ones
To take this revolution to the street.
Smile at every solitary person that we meet.
We're gonna wave at total strangers no matter where they're from.
Gonna start a revolution... gonna win it one by one.`.split('\n');
	const copyright = `Noel Paul Stookey
©2007 Neworld Media Publishing
`;
	return (
		<Box color="white">
			<Text fontFamily="stencil-std" mt={4} fontSize="4xl">
				The Book of Revolutions
			</Text>
			<Text fontFamily="stencil-std" mt={4} fontSize="2xl">
				Chapter 1
			</Text>
			<br />
			{verse.map((line, lineNo) => {
				return [
					<Text
						fontFamily="Allerta Stencil"
						maxWidth="700px"
						mx={10}
						align="left"
						fontSize="xl"
					>
						{(lineNo > 13 ? lineNo - 14 : lineNo) + 1 + ': ' + line}
					</Text>,
					lineNo === 13 ? (
						[
							<Text fontFamily="stencil-std" mt={4} fontSize="2xl">
								Chapter 2
							</Text>,
							<br />
						]
					) : [4, 8, 10, 14, 18, 20].includes(lineNo + 1) ? (
						<br />
					) : (
						''
					)
				];
			})}

			<Text fontFamily="stencil-std" mt={4} fontSize="l">
				{copyright}
			</Text>
		</Box>
	);
}
