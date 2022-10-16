import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./styles";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

const song = {
	id: "2",
	imageUri:
		"https://cdn6.f-cdn.com/contestentries/1485199/27006121/5ca3e39ced7f1_thumb900.jpg",
	title: "Lorem Ipsum",
	artist: "Artist 2",
};

const PlayerWidget = () => {
	return (
		<View style={styles.container}>
			<Image
				source={{
					uri: song.imageUri,
				}}
				style={styles.image}
			/>
			<Text style={styles.title}>{song.title}</Text>
			<Text style={styles.artist}>{song.artist}</Text>

			<View
				style={{
					marginLeft: "auto",
					flexDirection: "row",
					paddingRight: 10,
				}}>
				<AntDesign
					name="hearto"
					size={30}
					color="white"
					style={{
						marginRight: 20,
					}}
				/>
				<FontAwesome name="play" size={30} color="white" />
			</View>
		</View>
	);
};

export default PlayerWidget;
