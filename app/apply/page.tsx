'use client';

import { Check, CircleCheck, Upload } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import ApplyBackground from '~/_assets/applyBackground.png';
import AsteraHeading from '~/_components/AsteraHeader';
import { Alert, AlertDescription, AlertTitle } from '~/_components/ui/alert';
import { Button } from '~/_components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '~/_components/ui/card';
import { Input } from '~/_components/ui/input';
import { Label } from '~/_components/ui/label';
import { Textarea } from '~/_components/ui/textarea';
import { slugifyString } from '~/_utils/strings';

export default function Home() {
	const [email, setEmail] = useState('');

	return (
		<div className="-mt-12 relative">
			<Image src={ApplyBackground} alt="Landing background image from astera.org" />
			<AsteraHeading />
			<div className="absolute text-white text-[5rem] leading-[5rem] top-52 left-0 right-0 font-cy text-center">
				Apply to Join the Astera Mission
			</div>
			<div className="bg-[#131313] py-24 px-12 border-t border-zinc-800 pb-48">
				<div className="max-w-screen-lg m-auto">
					<h2 className="text-white text-5xl font-cy">Submit your proposal</h2>
					<div className="prose prose-lg text-white my-8">
						We invite you to submit your proposal to Astera, where innovative ideas meet
						great opportunities. Please send us your detailed plan to be considered for
						collaboration.
					</div>

					<div className="space-y-8">
						<div className="grid w-full max-w-lg items-center gap-1.5 dar">
							<Label className="text-white" htmlFor="picture">
								Contact Email
							</Label>
							<Input
								placeholder="Email"
								value={email}
								onChange={(evt) => {
									setEmail(evt.target.value);
								}}
							/>
						</div>
						<div className="grid w-full max-w-lg items-center gap-1.5">
							<Label className="text-white" htmlFor="picture">
								Proposal Title
							</Label>
							<Input />
						</div>
						<div className="grid w-full max-w-lg items-center gap-1.5">
							<Label className="text-white" htmlFor="picture">
								Project Description
							</Label>
							<Textarea />
						</div>
						<div className="grid w-full max-w-lg items-center gap-1.5">
							<Label className="text-white" htmlFor="picture">
								Budget
							</Label>
							<Input placeholder="$..." />
						</div>
						<div className="grid w-full max-w-lg items-center gap-1.5">
							<Label className="text-white" htmlFor="picture">
								Project Description
							</Label>
							<Textarea />
						</div>
						<Button variant="secondary">Submit</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
