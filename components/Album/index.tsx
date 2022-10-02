import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import styles from "./styles";

type Props = {
	album: Album;
};

const AlbumComponent = ({
	album: { id, imageUri, artistsHeadline },
}: Props) => {
	return (
		<View style={styles.container}>
			<Image source={{ uri: imageUri }} style={styles.image} />
			<Text style={styles.text}>{artistsHeadline}</Text>
		</View>
	);
};

export default AlbumComponent;
