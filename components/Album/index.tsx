import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import styles from "./styles";

type Props = {
	album: Album;
};

const AlbumComponent = ({ album: { id, imageUri, artistHeadline } }: Props) => {
	return (
		<View style={styles.container}>
			<Image source={{ uri: imageUri }} style={styles.image} />
			<Text style={styles.text}>{artistHeadline}</Text>
			{/* album image */}
			{/* artist headline */}
		</View>
	);
};

export default AlbumComponent;
