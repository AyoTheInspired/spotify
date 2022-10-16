import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useRoute } from "@react-navigation/native";

type Props = {};

const AlbumScreen = (props: Props) => {
	const route = useRoute();

	useEffect(() => {
		console.log(route);
	}, []);

	const album = {
		id: "11",
		title: "Good Vibes",
		by: "Spotify",
		numberOfLikes: 3,
		songs: [
			{
				id: Math.random(),
				imageUri:
					"https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg",
				title: "High on you",
				artist: "Helen",
			},
			{
				id: Math.random(),
				imageUri:
					"https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg",
				title: "Daunting tasks",
				artist: "Helen",
			},
			{
				id: Math.random(),
				imageUri:
					"https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg",
				title: "Believing whatever",
				artist: "Helen",
			},
			{
				id: Math.random(),
				imageUri:
					"https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg",
				title: "Lorem Ipsum",
				artist: "Helen",
			},
		],
	};

	return (
		<View>
			<Text style={{ color: "white" }}>Hello from AlbumScreen</Text>
		</View>
	);
};

export default AlbumScreen;

const styles = StyleSheet.create({});
