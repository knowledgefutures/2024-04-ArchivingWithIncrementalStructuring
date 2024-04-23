import { atom } from 'nanostores';
import { persistentAtom } from '@nanostores/persistent';

export type Pub = {
	id: string;
	pubType: string;
	published: boolean;
	title?: string;
	description?: string;
	authors?: string;
	url?: string;
	content?: string;
	stars?: number;
};
export type PubLibrary = Array<Pub>;

export type PubType = { name: string; fields: Array<string> };
export type PubTypeLibrary = Array<PubType>;

export type Connection = {
	sourceId: string;
	destinationId: string;
};
export type ConnectionLibrary = Array<Connection>;

export const $pubTypeLibrary = atom<PubTypeLibrary>([
	{ name: 'Project', fields: [] },
	// { name: 'Resource', fields: [] },
	{ name: 'Review', fields: ['content'] },
	{ name: 'Google Doc', fields: ['url', 'lastUpdated'] },
	{ name: 'Tweet', fields: ['url', 'retweets', 'favorites'] },
	{ name: 'Git Repo', fields: ['url', 'stars'] },
]);

export const $pubs = persistentAtom<PubLibrary>(
	'pubLibrary',
	[
		{
			pubType: 'Project',
			id: '10.1244/1234.24',
			title: 'EcoMimetic Agriculture',
			description:
				'EcoMimetic Agriculture is a groundbreaking research project aimed at creating agricultural systems that closely mimic natural ecological processes. This approach integrates the principles of ecology and biomimicry to develop farming techniques that enhance biodiversity, improve soil health, and maximize water efficiency. By studying and replicating the complex interactions found in untouched ecosystems, researchers aim to design agricultural practices that require minimal external inputs such as pesticides and fertilizers, thereby reducing environmental impact while increasing crop resilience and productivity. The project also explores innovative ways to integrate native flora and fauna into agricultural landscapes, fostering ecosystems that support both agriculture and wildlife.',
			published: true,
		},
		{
			pubType: 'Project',
			id: '10.442/1888.36',
			title: 'Biodiversity Mapping',
			description:
				'Biodiversity Mapping is a comprehensive research initiative focused on cataloging and analyzing the diversity of life across various ecosystems using advanced geospatial technologies. This project utilizes remote sensing, GIS (Geographic Information Systems), and machine learning algorithms to create detailed maps that reflect the distribution and density of species across different geographical areas. These maps are crucial for conservation planning, helping to identify biodiversity hotspots and areas under threat from human activities such as deforestation and urbanization. By providing a clearer understanding of species distribution patterns, Biodiversity Mapping aids policymakers and conservationists in making informed decisions to protect our planet’s biodiversity.',
			published: true,
		},
		{
			pubType: 'Project',
			id: '10.513/1888.55',
			title: 'Synthetic Symbiosis',
			description:
				'Synthetic Symbiosis involves the innovative use of synthetic biology to engineer artificial symbiotic relationships between different species, particularly those that do not naturally interact. This research aims to enhance plant productivity and stress resilience by artificially introducing beneficial traits from one organism to another, thereby creating a new, cooperative interaction that can enhance growth, nutrient uptake, or resistance to environmental stresses. For instance, scientists may engineer crop roots to harbor nitrogen-fixing bacteria, mimicking natural symbiotic relationships found in legumes, to reduce the need for chemical fertilizers and improve soil health. This project holds potential for revolutionary changes in agriculture and ecological restoration projects.',
			published: true,
		},
		{
			pubType: 'Project',
			id: '10.844/917.29',
			title: 'Evolutionary Informatics Systems',
			description:
				'Evolutionary Informatics Systems is a pioneering research area that merges evolutionary biology with advanced computational techniques to simulate and predict evolutionary outcomes using large datasets. This project uses algorithms and models that can analyze genetic, environmental, and interaction data to forecast how species might evolve in response to changes in their ecosystems or climate conditions. The implications of this research are vast, potentially offering insights into the future adaptations of species, informing conservation strategies, and assisting in the management of ecosystems in a changing global environment. Additionally, this approach provides a deeper understanding of the evolutionary processes that shape life on Earth, contributing to fields such as medicine, agriculture, and ecology.',
			published: true,
		},
		{
			pubType: 'Project',
			id: '10.108/3324.826',
			title: 'Primordial DNA Engineering',
			description:
				'Primordial DNA Engineering is an ambitious project that seeks to reconstruct and manipulate the genetic material of extinct species or ancestral forms of life by using cutting-edge genetic engineering techniques. The primary goal is to understand the fundamental aspects of early life forms and their genetic blueprints. This research could potentially lead to the revival of extinct species or the creation of organisms with ancient traits that can offer solutions to contemporary problems such as disease resistance or environmental adaptation. By exploring the genetic make-up of organisms from different evolutionary stages, scientists hope to unlock new biological insights and innovative applications in biotechnology and conservation.',
			published: true,
		},
		{
			id: '10.497/66476',
			pubType: 'Git Repo',
			published: false,
			title: 'Arcadia-Science/metagenomics',
			stars: 33,
			url: 'github.com',
		},
		{
			id: '10.227/20651',
			pubType: 'Git Repo',
			published: false,
			title: 'Arcadia-Science/metagenomics',
			stars: 33,
			url: 'https://github.com/Arcadia-Science/metagenomics',
		},
		{
			id: '10.326/87758',
			pubType: 'Git Repo',
			published: false,
			title: 'Arcadia-Science/2023-nr-clustering',
			stars: 21,
			url: 'https://github.com/Arcadia-Science/2023-nr-clustering',
		},
		{
			id: '10.461/69764',
			pubType: 'Git Repo',
			published: false,
			title: 'Arcadia-Science/2023-nr-clustering',
			stars: 21,
			url: 'https://github.com/Arcadia-Science/2023-nr-clustering',
		},
		{
			id: '10.543/26671',
			pubType: 'Git Repo',
			published: true,
			title: 'Arcadia-Science/seqqc',
			stars: 26,
			url: 'https://github.com/Arcadia-Science/seqqc',
		},
		{
			id: '10.453/39031',
			pubType: 'Git Repo',
			published: false,
			title: 'Arcadia-Science/metagenomics',
			stars: 33,
			url: 'https://github.com/Arcadia-Science/metagenomics',
		},
		{
			id: '10.271/58086',
			pubType: 'Git Repo',
			published: true,
			title: 'Arcadia-Science/noveltree',
			stars: 13,
			url: 'https://github.com/Arcadia-Science/noveltree',
		},
		{
			id: '10.373/45296',
			pubType: 'Tweet',
			published: true,
			content: 'https://twitter.com/BiggeBrae/status/1757891508043456558',
		},
		{
			id: '10.668/25880',
			pubType: 'Tweet',
			published: false,
			content: 'https://twitter.com/markowenmartin/status/1780283395626631537',
		},
		{
			id: '10.471/32096',
			pubType: 'Tweet',
			published: false,
			content: 'https://twitter.com/ricard_sole/status/756824103227691009',
		},
		{
			id: '10.673/32638',
			pubType: 'Review',
			published: false,
			content:
				'This project represents a groundbreaking effort in the field of synthetic biology, aiming to recreate and understand the genomic structures of ancient life forms. This initiative not only challenges our existing knowledge of genetic evolution but also opens up new avenues for biotechnological applications. The project team\'s approach, which involves the synthesis of hypothetical ancestral DNA sequences, allows for the experimental study of evolutionary processes in a controlled environment. By doing so, they provide invaluable insights into the molecular mechanisms that have shaped life on Earth.\n\nOne of the most compelling aspects of this project is its potential to revolutionize our approach to genetic engineering and evolutionary biology. The methodologies developed could lead to advancements in genetic therapies, agricultural biotechnology, and bioinformatics. However, the project also raises significant ethical and biosafety concerns that must be addressed as the research progresses. Overall, the "Primordial DNA Engineering" project stands as a testament to the innovative spirit of modern science, embodying both the potential and challenges of venturing into uncharted genetic territories.',
		},
		{
			id: '10.224/20871',
			pubType: 'Review',
			published: false,
			content:
				'While the "Primordial DNA Engineering" project is ambitious in its scope to recreate ancient genetic codes, it also raises considerable concerns regarding its practical implications and ethical boundaries. The project\'s focus on synthesizing primordial DNA sequences risks overlooking the complex ecological and evolutionary contexts in which these sequences originally operated, potentially leading to unforeseen consequences. Additionally, the ethical considerations of recreating ancient life forms have not been sufficiently addressed, leaving a gap in the project\'s governance and oversight. Such ventures into the unknown of genetic ancestries demand a more cautious and reflective approach, ensuring that scientific curiosity does not outpace the necessary ethical frameworks and safety measures.',
		},
	],
	{ encode: JSON.stringify, decode: JSON.parse }
);

export type Person = {
	id: string;
	name: string;
	pubType: 'Contributor';
};
export const $people = atom<Array<Person>>([
	{ id: '01', name: 'Luisa Fernández', pubType: 'Contributor' },
	{ id: '02', name: 'Karan Singh', pubType: 'Contributor' },
	{ id: '03', name: 'Yuto Nakamura', pubType: 'Contributor' },
	{ id: '04', name: 'Amina Diop', pubType: 'Contributor' },
	{ id: '05', name: 'Chen Wei', pubType: 'Contributor' },
	{ id: '06', name: 'Olivia Brown', pubType: 'Contributor' },
]);

export const $connections = persistentAtom<ConnectionLibrary>(
	'connectionLibrary',
	[
		{ sourceId: '10.1244/1234.24', destinationId: '03' },
		{ sourceId: '10.1244/1234.24', destinationId: '02' },
		{ sourceId: '10.1244/1234.24', destinationId: '04' },
		{ sourceId: '10.442/1888.36', destinationId: '01' },
		{ sourceId: '10.442/1888.36', destinationId: '05' },
		{ sourceId: '10.442/1888.36', destinationId: '02' },
		{ sourceId: '10.497/66476', destinationId: '01' },
		{ sourceId: '10.442/1888.36', destinationId: '10.497/66476' },
		{ sourceId: '10.227/20651', destinationId: '01' },
		{ sourceId: '10.442/1888.36', destinationId: '10.227/20651' },
		{ sourceId: '10.326/87758', destinationId: '01' },
		{ sourceId: '10.442/1888.36', destinationId: '10.326/87758' },
		{ sourceId: '10.461/69764', destinationId: '01' },
		{ sourceId: '10.442/1888.36', destinationId: '10.461/69764' },
		{ sourceId: '10.543/26671', destinationId: '02' },
		{ sourceId: '10.442/1888.36', destinationId: '10.543/26671' },
		{ sourceId: '10.453/39031', destinationId: '04' },
		{ sourceId: '10.844/917.29', destinationId: '10.453/39031' },
		{ sourceId: '10.271/58086', destinationId: '01' },
		{ sourceId: '10.1244/1234.24', destinationId: '10.271/58086' },
		{ sourceId: '10.373/45296', destinationId: '01' },
		{ sourceId: '10.1244/1234.24', destinationId: '10.373/45296' },
		{ sourceId: '10.668/25880', destinationId: '02' },
		{ sourceId: '10.1244/1234.24', destinationId: '10.668/25880' },
		{ sourceId: '10.471/32096', destinationId: '03' },
		{ sourceId: '10.471/32096', destinationId: '04' },
		{ sourceId: '10.471/32096', destinationId: '05' },
		{ sourceId: '10.513/1888.55', destinationId: '10.471/32096' },
		{ sourceId: '10.673/32638', destinationId: '01' },
		{ sourceId: '10.108/3324.826', destinationId: '10.673/32638' },
		{ sourceId: '10.224/20871', destinationId: '01' },
		{ sourceId: '10.224/20871', destinationId: '02' },
		{ sourceId: '10.224/20871', destinationId: '06' },
		{ sourceId: '10.108/3324.826', destinationId: '10.224/20871' },
	],
	{ encode: JSON.stringify, decode: JSON.parse }
);

export const clearLocalAtoms = () => {
	localStorage.setItem('pubLibrary', '');
	localStorage.setItem('connectionLibrary', '');
	window.location.reload();
};
