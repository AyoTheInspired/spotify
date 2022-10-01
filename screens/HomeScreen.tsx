import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Album from "../components/Album";
import AlbumCategory from "../components/AlbumCategory";

type Props = {};

const album = {
	id: "1",
	imageUri:
		"https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg",
	artistHeadline: "Taylor Swift, Cardi Objective C, Avicii",
};

const song = {
	id: "1",
	imageUri:
		"https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg",
	title: "High on You",
	artist: "Helen",
};

const albumCategory = {
	id: "1",
	title: "Happy Vibes",
	albums: [
		{
			id: "1",
			imageUri:
				"https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg",
			artistsHeadline: "Taylor Swift, Kygo Objective C, Avicii",
		},
		{
			id: "2",
			imageUri:
				"https://cdn6.f-cdn.com/contestentries/1485199/27006121/5ca3e39ced7f1_thumb900.jpg",
			artistsHeadline: "Post Malone, Drake, Eminem",
		},
		{
			id: "3",
			imageUri:
				"https://images-na.ssl-images-amazon.com/images/I/61F66QURFyL.jpg",
			artistsHeadline: "Journey, Escape, Avicii",
		},
		{
			id: "4",
			imageUri:
				"https://i.pinimg.com/originals/a2/0d/37/a20d37791f8ad5cd54734cd3af559cc9.jpg",
			artistsHeadline: "Bob Marley, Cardi B, Stas Mihailov",
		},
	],
};

const HomeScreen = (props: Props) => {
	return (
		<View style={styles.container}>
			<AlbumCategory
				title={albumCategory.title}
				albums={albumCategory.albums}
			/>
		</View>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
