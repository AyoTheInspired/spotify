import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import styles from "./styles";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { Audio } from "expo-av";

const song = {
	id: "2",
	uri: "https://res.cloudinary.com/ayotheinspired/video/upload/v1666009895/Limoblaze-Jireh-My-Provider-Ft-Lecrae-Happi-Naijapickup.com_zbbpv5.mp3",
	imageUri:
		"https://cdn6.f-cdn.com/contestentries/1485199/27006121/5ca3e39ced7f1_thumb900.jpg",
	title: "Lorem Ipsum",
	artist: "Artist 2",
};

const PlayerWidget = () => {
	const onPlaybackStatusUpdate = (status: any) => {
		// console.log(status);
	};

	const playCurrentSong = async () => {
		try {
			const sound = await Audio.Sound.createAsync(
				{ uri: song.uri },
				{ shouldPlay: true },
				onPlaybackStatusUpdate
			);
		} catch (error) {
			console.log("error", error);
		}
	};

	useEffect(() => {
		playCurrentSong();
	}, []);

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
