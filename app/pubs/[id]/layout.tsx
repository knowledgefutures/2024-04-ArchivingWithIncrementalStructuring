import BlankHeader from '~/_assets/blankHeader.png';
import Image from 'next/image';

export default function ExternalPubLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<div className="-mt-12 relative  min-h-[calc(100vh-49px)]">
			<Image src={BlankHeader} alt="Landing background image from astera.org" />

			<div className="p-12 space-y-12">{children}</div>
		</div>
	);
}
