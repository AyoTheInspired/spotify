// interface Album {
// 	id: string;
// 	imageUri: string;
// 	artistsHeadline: string;
// 	name: string;
// 	by?: string;
// }

interface Album {
	id: string;
	name: string;
	by: string;
	numberOfLikes: number;
	imageUri: string;
	artistsHeadline: string;
}

interface HomeScreenParamsList {
	HomeScreen: undefined;
	AlbumScreen: undefined;
}

interface Song {
	id: string;
	imageUri: string;
	title: string;
	artist: string;
}
