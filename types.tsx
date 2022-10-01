/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
	CompositeScreenProps,
	NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
	namespace ReactNavigation {
		interface RootParamList extends RootStackParamList {}
	}
}

export type RootStackParamList = {
	Root: NavigatorScreenParams<RootTabParamList> | undefined;
	Modal: undefined;
	NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
	NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
	Premium: undefined;
	"Your Library": undefined;
	Search: undefined;
	TabOne: undefined;
	TabTwo: undefined;
	Home: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
	CompositeScreenProps<
		BottomTabScreenProps<RootTabParamList, Screen>,
		NativeStackScreenProps<RootStackParamList>
	>;

// {
// 	id: "2",
// 	title: "Popular Playlists",
// 	albums: [
// 		{
// 			id: "5",
// 			imageUri:
// 				"https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg",
// 			artistsHeadline: "Taylor Swift, Kygo Objective C, Avicii",
// 		},
// 		{
// 			id: "6",
// 			imageUri:
// 				"https://cdn6.f-cdn.com/contestentries/1485199/27006121/5ca3e39ced7f1_thumb900.jpg",
// 			artistsHeadline: "Post Malone, Drake, Eminem",
// 		},
// 		{
// 			id: "7",
// 			imageUri:
// 				"https://images-na.ssl-images-amazon.com/images/I/61F66QURFyL.jpg",
// 			artistsHeadline: "Journey, Escape, Avicii",
// 		},
// 	],
// },
// {
// 	id: "3",
// 	title: "Shows to try",
// 	albums: [
// 		{
// 			id: "8",
// 			imageUri:
// 				"https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg",
// 			artistsHeadline: "Taylor Swift, Kygo Objective C, Avicii",
// 		},
// 		{
// 			id: "9",
// 			imageUri:
// 				"https://cdn6.f-cdn.com/contestentries/1485199/27006121/5ca3e39ced7f1_thumb900.jpg",
// 			artistsHeadline: "Post Malone, Drake, Eminem",
// 		},
// 		{
// 			id: "10",
// 			imageUri:
// 				"https://images-na.ssl-images-amazon.com/images/I/61F66QURFyL.jpg",
// 			artistsHeadline: "Journey, Escape, Avicii",
// 		},
// 	],
// },
// {
// 	id: "4",
// 	title: "Workout",
// 	albums: [
// 		{
// 			id: "11",
// 			imageUri:
// 				"https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg",
// 			artistsHeadline: "Taylor Swift, Kygo Objective C, Avicii",
// 		},
// 		{
// 			id: "12",
// 			imageUri:
// 				"https://cdn6.f-cdn.com/contestentries/1485199/27006121/5ca3e39ced7f1_thumb900.jpg",
// 			artistsHeadline: "Post Malone, Drake, Eminem",
// 		},
// 		{
// 			id: "13",
// 			imageUri:
// 				"https://images-na.ssl-images-amazon.com/images/I/61F66QURFyL.jpg",
// 			artistsHeadline: "Journey, Escape, Avicii",
// 		},
// 	],
// },
