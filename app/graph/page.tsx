'use client';

import { Check, CircleCheck, Upload } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import BlankHeader from '~/_assets/blankHeader.png';
import AsteraHeading from '~/_components/AsteraHeader';
import { ForceGraph3D } from 'react-force-graph';

export default function Explore() {
	const myData = {
		nodes: [
			{ id: 1, name: 'Toy' },
			{ id: 2, name: 'Example' },
			{ id: 3, name: 'For' },
			{ id: 4, name: 'Showing' },
			{ id: 5, name: 'Things' },
		],
		links: [
			{ sourceId: 1, destinationId: 2 },
			{ sourceId: 1, destinationId: 3 },
			{ sourceId: 1, destinationId: 4 },
			{ sourceId: 2, destinationId: 4 },
			{ sourceId: 1, destinationId: 5 },
			{ sourceId: 4, destinationId: 5 },
		],
	};
	return (
		<div className="-mt-12 relative bg-[#131313] min-h-[calc(100vh-49px)]">
			<Image src={BlankHeader} alt="Landing background image from astera.org" />

			<ForceGraph3D
				graphData={myData}
				backgroundColor="#131313"
				showNavInfo={false}
				height={700}
				linkSource="sourceId"
				linkTarget="destinationId"
				enableNodeDrag={false}
			/>
		</div>
	);
}
