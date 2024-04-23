import Link from 'next/link';
import linkIcon from '~/_assets/link.svg';
import type { Pub } from '~/_store/data';
import { getAuthorsByPubId } from '~/_utils/pubs';
import { slugifyString } from '~/_utils/strings';

export default function PubExploreCard(props: Partial<Pub> & { connections: Array<any> }) {
	// @ts-ignore
	const { id = '', title, pubType, referenceId, url, connections } = props;
	const contributors = getAuthorsByPubId(id).join(', ');
	return (
		<div className="flex items-center border border-slate-600 rounded mt-4 mb-4 font-sans max-w-xl">
			<Link className="flex-auto no-underline group p-4 " href={`/p/${slugifyString(id)}`}>
				<h3 className="group-hover:underline font-bold">{title || referenceId}</h3>

				<div>
					{contributors || url}
					<span className="text-muted-foreground">
						{(contributors || url) && ' · '}
						{pubType && `${pubType}`}
					</span>
				</div>
			</Link>
			<Link
				className="flex items-center p-4 hover:bg-slate-100"
				href={`?focus=${slugifyString(id)}`}
			>
				<img src={linkIcon.src} alt="Connections" loading="eager" />
				{connections.length}
			</Link>
		</div>
	);
}
