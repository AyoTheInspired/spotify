import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import SongListItem from "../components/SongListItem";
import { albumDetails } from "../assets/data/albumDetails";
import AlbumHeader from "../components/AlbumHeader";

type Props = {};

const AlbumScreen = (props: Props) => {
	const route = useRoute();

	useEffect(() => {
		console.log(route);
	}, []);

	return (
		<View>
			<FlatList
				ListHeaderComponent={() => <AlbumHeader album={albumDetails} />}
				data={albumDetails.songs}
				renderItem={({ item }) => <SongListItem song={item} />}
				keyExtractor={(item) => item.id}
			/>
		</View>
	);
};

export default AlbumScreen;

const styles = StyleSheet.create({});
