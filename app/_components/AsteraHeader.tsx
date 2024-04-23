'use client';

import Link from 'next/link';

export default function AsteraHeading() {
	const linkClasses = 'hover:underline decoration-orange-500 decoration-2 underline-offset-8';
	return (
		<nav className="absolute top-10 right-10 flex space-x-6 text-white  text-xl font-cy">
			<Link href="" className={linkClasses}>
				Approach
			</Link>
			<Link href="" className={linkClasses}>
				Residency
			</Link>
			<Link href="" className={linkClasses}>
				AGI Program
			</Link>
			<Link href="/archive" className={linkClasses}>
				Archive
			</Link>
			<Link href="/apply" className={linkClasses}>
				Apply
			</Link>
		</nav>
	);
}
