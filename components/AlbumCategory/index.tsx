import { View, Text } from "react-native";
import React from "react";
import { styles } from "./styles";

type Props = {
	title: string;
	albums: Album[];
};

const AlbumCategory = ({ title, albums }: Props) => {
	return (
		<View>
			{/* title of category */}
			{/* list of albums */}
			<Text style={styles.title}>{title}</Text>
		</View>
	);
};

export default AlbumCategory;
