'use client';

import Image from 'next/image';
import landingBackground from '~/_assets/landing.png';
import AsteraHeading from '~/_components/AsteraHeader';

export default function Home() {
	return (
		<div className="-mt-12 relative">
			<Image src={landingBackground} alt="Landing background image from astera.org" />
			<AsteraHeading />
		</div>
	);
}
