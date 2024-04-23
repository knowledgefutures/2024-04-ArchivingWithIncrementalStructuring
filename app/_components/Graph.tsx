'use client';
import dynamic from 'next/dynamic';
import { useStore } from '@nanostores/react';
import { $connections, $people, PubLibrary } from '~/_store/data';
import { connectionIsValid } from '~/_utils/pubs';

const ForceGraph2D = dynamic(() => import('react-force-graph-2d'), {
	ssr: false,
});

type Props = { pubs: PubLibrary };

export default function Graph({ pubs }: Props) {
	const contributors = useStore($people);
	const connections = useStore($connections);
	const allNodes = [...pubs, ...contributors];
	const graph = {
		nodes: allNodes.filter((pub) => {
			return connections.some((annotation) => {
				/* Only include pubs that are relevant to active annotations. */
				/* We want a single connected graph, no loose nodes. */
				return annotation.sourceId === pub.id || annotation.destinationId === pub.id;
			});
		}),
		links: connections.filter((connection) => {
			/* We only want to include a connection is both ends are in available pubs */
			/* i.e. it is Published if we're viewing on External */
			return connectionIsValid(connection, allNodes);
		}),
	};
	return (
		<div className="-mx-8 border">
			<ForceGraph2D
				graphData={graph}
				height={600}
				nodeLabel={(node) => {
					return `${node.pubType || 'Contributor'}: ${
						node.title || node.name || node.id
					}`;
				}}
				nodeVal={(node) => {
					if (node.pubType === 'article') {
						return 3;
					}
					return 1;
				}}
				linkSource="sourceId"
				linkTarget="destinationId"
				nodeAutoColorBy="pubType"
			/>
		</div>
	);
}
