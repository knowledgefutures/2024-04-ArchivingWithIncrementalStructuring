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
import { slugifyString } from '~/_utils/strings';

export default function Home() {
	const [files, setFiles] = useState<Array<string>>([]);
	const [email, setEmail] = useState('');
	const [success, setSuccess] = useState(false);
	const handleSampleFile = () => {
		setFiles(['sample.csv', 'sample.zip']);
	};
	const submitFiles = () => {
		setSuccess(true);
	};
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

					<div className="flex justify-between">
						<div className="flex flex-col space-y-6">
							<div className="grid w-full max-w-sm items-center gap-1.5 dar">
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
							<div className="grid w-full max-w-sm items-center gap-1.5">
								<Label className="text-white" htmlFor="picture">
									Upload files to submit to the archive
								</Label>
								<Input id="picture" type="file" />
								<Button
									className="text-white"
									size="sm"
									variant="link"
									onClick={handleSampleFile}
								>
									Load Sample file
								</Button>
							</div>
						</div>
						{!!files.length && (
							<div>
								<Card className="w-[380px]">
									<CardHeader>
										<CardTitle>Uploaded Files</CardTitle>
										<CardDescription>
											Files ready to be submitted by {email}
										</CardDescription>
									</CardHeader>
									<CardContent className="grid gap-4">
										<div className=" flex items-center space-x-4 rounded-md border p-4">
											<div className="flex-1 space-y-1">
												{files.map((file) => {
													return <div key={file}>{file}</div>;
												})}
											</div>
										</div>
									</CardContent>
									<CardFooter>
										{!success && (
											<Button
												className="w-full"
												disabled={!email}
												onClick={submitFiles}
											>
												<Upload className="mr-2 h-4 w-4" /> Submit
											</Button>
										)}
										{success && (
											<Alert className="my-4">
												<CircleCheck className="h-4 w-4" color="#198754" />
												<AlertTitle>
													New work submitted to Astera Archive
												</AlertTitle>
												<AlertDescription>
													Our team will reach out shortly to coordinate
													the processing of your submission.
												</AlertDescription>
											</Alert>
										)}
									</CardFooter>
								</Card>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
