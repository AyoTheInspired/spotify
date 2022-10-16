import { View, Text, Image } from "react-native";
import React from "react";
import { styles } from "./styles";

type Props = {
	song: Song;
};

const SongListItem = ({ song: { id, imageUri, title, artist } }: Props) => {
	return (
		<View style={styles.container}>
			<Image
				source={{
					uri: imageUri,
				}}
				style={styles.image}
			/>

			<View style={styles.rightContainer}>
				<Text style={styles.title}>{title}</Text>
				<Text style={styles.artist}>{artist}</Text>
			</View>
		</View>
	);
};

export default SongListItem;
