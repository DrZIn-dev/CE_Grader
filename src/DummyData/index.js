import DummyPic from '../resource/img/IMG_6413.jpg'
const SideNavData = {
	userName: 'Unknown',
	rank: 1,
	passCount: 10,
	quizCount: 2
}

const UserOnline = 10

const Attemps = [
	{name: 'velit', level: 2, topic: 'aliquet.'},
	{name: 'ridiculus', level: 2, topic: 'lobortis'},
	{name: 'ultrices', level: 2, topic: 'quis'},
	{name: 'a', level: 2, topic: 'ultrices.'},
	{name: 'libero', level: 2, topic: 'auctor'},
	{name: 'convallis', level: 3, topic: 'luctus'},
	{name: 'suscipit,', level: 2, topic: 'non,'},
	{name: 'vulputate,', level: 1, topic: 'tincidunt'},
	{name: 'pede.', level: 3, topic: 'odio.'},
	{name: 'hendrerit.', level: 1, topic: 'Cras'},
	{name: 'tristique', level: 3, topic: 'ipsum'},
	{name: 'tincidunt,', level: 1, topic: 'Cum'},
	{name: 'urna.', level: 3, topic: 'Donec'},
	{name: 'et', level: 2, topic: 'in'},
	{name: 'tellus.', level: 2, topic: 'tristique'},
	{name: 'Ut', level: 2, topic: 'Morbi'},
	{name: 'quam', level: 3, topic: 'est'},
	{name: 'dolor.', level: 2, topic: 'Phasellus'},
	{name: 'Sed', level: 2, topic: 'pellentesque.'},
	{name: 'non', level: 1, topic: 'mattis'},
	{name: 'Aenean', level: 2, topic: 'eleifend'}
]

const StackDatas = [
	{
		x: ['basic', 'if-else', 'loop', 'function', 'array'],
		y: [20, 14, 23, 34, 24],
		name: 'Sent',
		type: 'bar'
	},

	{
		x: ['basic', 'if-else', 'loop', 'function', 'array'],
		y: [12, 10, 20, 30, 20],
		name: 'Correct',
		type: 'bar'
	},
	{
		x: ['basic', 'if-else', 'loop', 'function', 'array'],
		y: [8, 4, 3, 4, 4],
		name: 'inCorrect',
		type: 'bar'
	}
]

const Heatmaps = [
	[
		1,
		9,
		21,
		21,
		0,
		14,
		15,
		5,
		16,
		27,
		28,
		29,
		23,
		12,
		30,
		25,
		6,
		13,
		0,
		10,
		6,
		26,
		6,
		2
	],
	[
		26,
		27,
		14,
		16,
		3,
		7,
		11,
		7,
		12,
		16,
		8,
		23,
		18,
		1,
		9,
		16,
		4,
		6,
		28,
		13,
		16,
		16,
		1,
		22
	],
	[
		9,
		8,
		10,
		22,
		14,
		21,
		6,
		22,
		2,
		10,
		8,
		25,
		11,
		16,
		19,
		12,
		10,
		3,
		23,
		21,
		6,
		15,
		6,
		11
	],
	[
		20,
		18,
		15,
		15,
		9,
		4,
		30,
		14,
		17,
		16,
		2,
		17,
		19,
		28,
		14,
		17,
		3,
		13,
		20,
		27,
		30,
		16,
		5,
		2
	]
]

const GaugeCompleteData = {
	value: '50',
	startColor: '#6495ed', // cornflowerblue
	endColor: '#dc143c'
}

const ScoreData = [65, 14, 9, 3, 2, 12, 7, 2, 3, 6, 3, 2, 1, 20, 11, 5, 4, 13]

const userRank = [
	{id: 1, name: 'consectetuer adipiscing', score: 691, time: 1406, rank: 1},
	{id: 2, name: 'morbi tristique', score: 464, time: 2602, rank: 2},
	{id: 3, name: 'vehicula risus.', score: 186, time: 1322, rank: 3},
	{id: 4, name: 'imperdiet, erat', score: 818, time: 1373, rank: 4},
	{id: 5, name: 'dui lectus', score: 192, time: 2319, rank: 5},
	{id: 6, name: 'non, cursus', score: 891, time: 2457, rank: 6},
	{id: 7, name: 'non, lobortis', score: 160, time: 27, rank: 7},
	{id: 8, name: 'ac mattis', score: 443, time: 1908, rank: 8},
	{id: 9, name: 'lorem eu', score: 679, time: 1206, rank: 9},
	{id: 10, name: 'lectus. Nullam', score: 995, time: 1195, rank: 10},
	{id: 11, name: 'Donec elementum,', score: 540, time: 2222, rank: 11},
	{id: 12, name: 'ultricies ornare,', score: 131, time: 2969, rank: 12},
	{id: 13, name: 'Cras dictum', score: 390, time: 846, rank: 13},
	{id: 14, name: 'velit. Quisque', score: 160, time: 2871, rank: 14},
	{id: 15, name: 'quis diam.', score: 5, time: 1337, rank: 15},
	{id: 16, name: 'montes, nascetur', score: 853, time: 966, rank: 16},
	{id: 17, name: 'laoreet lectus', score: 697, time: 66, rank: 17},
	{id: 18, name: 'Sed diam', score: 829, time: 646, rank: 18},
	{id: 19, name: 'ut, pharetra', score: 290, time: 986, rank: 19},
	{id: 20, name: 'dolor egestas', score: 100, time: 1911, rank: 20},
	{id: 21, name: 'purus mauris', score: 102, time: 2755, rank: 21},
	{id: 22, name: 'elit fermentum', score: 889, time: 547, rank: 22},
	{id: 23, name: 'nunc, ullamcorper', score: 481, time: 400, rank: 23},
	{id: 24, name: 'Donec nibh.', score: 783, time: 479, rank: 24},
	{id: 25, name: 'neque non', score: 135, time: 2035, rank: 25},
	{id: 26, name: 'purus. Nullam', score: 3, time: 1331, rank: 26},
	{id: 27, name: 'luctus ut,', score: 187, time: 1013, rank: 27},
	{id: 28, name: 'risus odio,', score: 135, time: 2018, rank: 28},
	{id: 29, name: 'pellentesque a,', score: 596, time: 250, rank: 29},
	{id: 30, name: 'ac nulla.', score: 340, time: 626, rank: 30},
	{id: 31, name: 'vulputate eu,', score: 93, time: 2104, rank: 31},
	{id: 32, name: 'Phasellus at', score: 493, time: 2005, rank: 32},
	{id: 33, name: 'placerat. Cras', score: 719, time: 1719, rank: 33},
	{id: 34, name: 'tristique senectus', score: 358, time: 620, rank: 34},
	{id: 35, name: 'sit amet,', score: 535, time: 458, rank: 35},
	{id: 36, name: 'lectus, a', score: 354, time: 1302, rank: 36},
	{id: 37, name: 'Aenean egestas', score: 627, time: 861, rank: 37},
	{id: 38, name: 'ipsum porta', score: 480, time: 829, rank: 38},
	{id: 39, name: 'Curabitur egestas', score: 736, time: 2693, rank: 39},
	{id: 40, name: 'augue eu', score: 662, time: 1935, rank: 40},
	{id: 41, name: 'rhoncus id,', score: 179, time: 537, rank: 41},
	{id: 42, name: 'velit eu', score: 127, time: 1365, rank: 42},
	{id: 43, name: 'luctus felis', score: 847, time: 1621, rank: 43},
	{id: 44, name: 'id, blandit', score: 565, time: 1146, rank: 44},
	{id: 45, name: 'vehicula et,', score: 64, time: 1123, rank: 45},
	{id: 46, name: 'feugiat. Lorem', score: 727, time: 2626, rank: 46},
	{id: 47, name: 'Fusce aliquam,', score: 382, time: 2827, rank: 47},
	{id: 48, name: 'mollis vitae,', score: 391, time: 907, rank: 48},
	{id: 49, name: 'et magnis', score: 487, time: 559, rank: 49},
	{id: 50, name: 'euismod in,', score: 270, time: 295, rank: 50},
	{id: 51, name: 'Morbi neque', score: 647, time: 2822, rank: 51},
	{id: 52, name: 'nec enim.', score: 371, time: 66, rank: 52},
	{id: 53, name: 'vestibulum massa', score: 300, time: 1139, rank: 53},
	{id: 54, name: 'sit amet', score: 959, time: 920, rank: 54},
	{id: 55, name: 'nonummy ut,', score: 959, time: 1568, rank: 55},
	{id: 56, name: 'enim. Etiam', score: 845, time: 205, rank: 56},
	{id: 57, name: 'Phasellus vitae', score: 877, time: 1624, rank: 57},
	{id: 58, name: 'tempus mauris', score: 804, time: 818, rank: 58},
	{id: 59, name: 'sodales. Mauris', score: 743, time: 267, rank: 59},
	{id: 60, name: 'libero lacus,', score: 700, time: 1044, rank: 60},
	{id: 61, name: 'dictum. Phasellus', score: 12, time: 537, rank: 61},
	{id: 62, name: 'lorem eu', score: 133, time: 267, rank: 62},
	{id: 63, name: 'adipiscing elit.', score: 797, time: 1480, rank: 63},
	{id: 64, name: 'dignissim lacus.', score: 376, time: 1861, rank: 64},
	{id: 65, name: 'vulputate mauris', score: 894, time: 717, rank: 65},
	{id: 66, name: 'vehicula aliquet', score: 779, time: 1307, rank: 66},
	{id: 67, name: 'consectetuer ipsum', score: 431, time: 775, rank: 67},
	{id: 68, name: 'eu, accumsan', score: 764, time: 1780, rank: 68},
	{id: 69, name: 'imperdiet nec,', score: 943, time: 2514, rank: 69},
	{id: 70, name: 'odio. Etiam', score: 954, time: 2431, rank: 70},
	{id: 71, name: 'neque sed', score: 919, time: 2470, rank: 71},
	{id: 72, name: 'Morbi quis', score: 640, time: 285, rank: 72},
	{id: 73, name: 'consectetuer ipsum', score: 439, time: 2235, rank: 73},
	{id: 74, name: 'Fusce diam', score: 909, time: 527, rank: 74},
	{id: 75, name: 'ultricies ornare,', score: 697, time: 1349, rank: 75},
	{id: 76, name: 'a, facilisis', score: 485, time: 2206, rank: 76},
	{id: 77, name: 'arcu imperdiet', score: 947, time: 2051, rank: 77},
	{id: 78, name: 'commodo hendrerit.', score: 177, time: 1396, rank: 78},
	{id: 79, name: 'sed turpis', score: 375, time: 2188, rank: 79},
	{id: 80, name: 'a odio', score: 857, time: 1117, rank: 80},
	{id: 81, name: 'Ut tincidunt', score: 47, time: 1588, rank: 81},
	{id: 82, name: 'feugiat non,', score: 161, time: 1175, rank: 82},
	{id: 83, name: 'dis parturient', score: 41, time: 261, rank: 83},
	{id: 84, name: 'neque venenatis', score: 695, time: 2671, rank: 84},
	{id: 85, name: 'pede. Praesent', score: 404, time: 467, rank: 85},
	{id: 86, name: 'sed, sapien.', score: 429, time: 1330, rank: 86},
	{id: 87, name: 'vitae, aliquet', score: 296, time: 79, rank: 87},
	{id: 88, name: 'vulputate eu,', score: 744, time: 1587, rank: 88},
	{id: 89, name: 'molestie tortor', score: 592, time: 2375, rank: 89},
	{id: 90, name: 'sed turpis', score: 594, time: 855, rank: 90},
	{id: 91, name: 'In condimentum.', score: 293, time: 1834, rank: 91},
	{id: 92, name: 'sit amet,', score: 644, time: 145, rank: 92},
	{id: 93, name: 'amet ultricies', score: 570, time: 1243, rank: 93},
	{id: 94, name: 'sit amet,', score: 714, time: 1100, rank: 94},
	{id: 95, name: 'nec ligula', score: 77, time: 2712, rank: 95},
	{id: 96, name: 'ut, molestie', score: 250, time: 1759, rank: 96},
	{id: 97, name: 'et, magna.', score: 636, time: 1694, rank: 97},
	{id: 98, name: 'mattis semper,', score: 107, time: 176, rank: 98},
	{id: 99, name: 'ipsum dolor', score: 430, time: 2963, rank: 99},
	{id: 100, name: 'sollicitudin adipiscing', score: 296, time: 2892, rank: 100}
]
export {
	SideNavData,
	UserOnline,
	DummyPic,
	Attemps,
	Heatmaps,
	StackDatas,
	GaugeCompleteData,
	ScoreData,
	userRank
}
