import { TouchableWithoutFeedback, Text, View, Image } from "react-native";
import React from "react";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

type Props = {
	album: Album;
};

const AlbumComponent = ({
	album: { id, imageUri, artistsHeadline },
}: Props) => {
	const navigation = useNavigation();

	const onPress = () => {
		navigation.navigate("AlbumScreen", {
			id: id,
		});
	};

	return (
		<TouchableWithoutFeedback onPress={onPress}>
			<View style={styles.container}>
				<Image source={{ uri: imageUri }} style={styles.image} />
				<Text style={styles.text}>{artistsHeadline}</Text>
			</View>
		</TouchableWithoutFeedback>
	);
};

export default AlbumComponent;
