import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { styles } from "./styles";

type Props = {
	album: Album;
};

const AlbumHeader = ({
	album: { artistsHeadline, id, imageUri, name, by, numberOfLikes },
}: Props) => {
	return (
		<View style={styles.container}>
			<Image
				source={{
					uri: imageUri,
				}}
				style={styles.image}
			/>
			<Text style={styles.name}>{name}</Text>

			<View style={styles.creatorContainer}>
				<Text style={styles.creator}>By {by}</Text>
				<Text style={styles.likes}>{numberOfLikes} Likes</Text>
			</View>

			<TouchableOpacity>
				<View style={styles.button}>
					<Text style={styles.buttonText}>PLAY</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
};

export default AlbumHeader;
