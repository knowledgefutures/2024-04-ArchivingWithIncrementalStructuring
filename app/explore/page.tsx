'use client';

import { useStore } from '@nanostores/react';
import { useState } from 'react';
import Explore from '~/_components/Explore';
import { $pubTypeLibrary, $pubs } from '~/_store/data';
import { Tabs, TabsList, TabsTrigger } from '~/_components/ui/tabs';
import BlankHeader from '~/_assets/blankHeader.png';
import Image from 'next/image';

export default function InternalLanding() {
	const [tabValue, setTabValue] = useState('Project');
	const pubs = useStore($pubs);
	const pubTypes = useStore($pubTypeLibrary);

	return (
		<div className="-mt-12 relative bg-[#131313] min-h-[calc(100vh-49px)]">
			<Image src={BlankHeader} alt="Landing background image from astera.org" />

			<div className="p-12 space-y-12">
				<div className="text-white text-[3rem] leading-[3rem] font-cy">
					Explore the Astera Archive
				</div>

				<Tabs
					value={tabValue}
					onValueChange={(newValue) => {
						setTabValue(newValue);
					}}
					className="w-[400px] my-6 dark"
				>
					<TabsList>
						<TabsTrigger value="All">All</TabsTrigger>
						{pubTypes
							.filter((pubType) => {
								return pubType.name !== 'Proposal';
							})
							.map((pubType) => {
								return (
									<TabsTrigger key={pubType.name} value={pubType.name}>
										{pubType.name}
									</TabsTrigger>
								);
							})}
					</TabsList>
				</Tabs>

				<Explore pubs={pubs} typeFilter={tabValue} />
			</div>
		</div>
	);
}
