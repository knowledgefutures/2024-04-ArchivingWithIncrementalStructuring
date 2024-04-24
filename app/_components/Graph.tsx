'use client';
import dynamic from 'next/dynamic';
import { useStore } from '@nanostores/react';
import { $connections, $people, $pubs, PubLibrary } from '~/_store/data';

const ForceGraph3D = dynamic(() => import('react-force-graph-3d'), {
	ssr: false,
});

export default function Graph() {
	const pubs = useStore($pubs);
	const contributors = useStore($people);
	const connections = useStore($connections);
	const allNodes = [...pubs, ...contributors];
	const graph = {
		nodes: allNodes,
		links: connections,
	};
	return (
		<div className="">
			<ForceGraph3D
				graphData={graph}
				backgroundColor="#131313"
				showNavInfo={false}
				height={700}
				linkSource="sourceId"
				linkTarget="destinationId"
				nodeAutoColorBy="pubType"
				enableNodeDrag={false}
				nodeLabel={(node) => {
					return `${node.pubType || 'Contributor'}: ${
						node.title || node.name || node.id
					}`;
				}}
				nodeVal={(node) => {
					if (node.pubType === 'Project') {
						return 3;
					}
					return 1;
				}}
			/>
		</div>
	);
}
