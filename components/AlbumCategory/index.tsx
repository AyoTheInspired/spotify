import { View, Text, FlatList } from "react-native";
import React from "react";
import { styles } from "./styles";
import AlbumComponent from "../Album";

type Props = {
	title: string;
	albums: Album[];
};

const AlbumCategory = ({ title, albums }: Props) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{title}</Text>
			<FlatList
				data={albums}
				renderItem={({ item }) => <AlbumComponent album={item} />}
				keyExtractor={(item) => item.id}
				horizontal
				showsHorizontalScrollIndicator={false}
			/>
		</View>
	);
};

export default AlbumCategory;
