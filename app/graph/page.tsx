'use client';

import Image from 'next/image';
import BlankHeader from '~/_assets/blankHeader.png';
import Graph from '~/_components/Graph';

export default function Explore() {
	return (
		<div className="-mt-12 relative bg-[#131313] min-h-[calc(100vh-49px)]">
			<Image src={BlankHeader} alt="Landing background image from astera.org" />
			<Graph />
		</div>
	);
}
