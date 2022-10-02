import { FlatList, StyleSheet, Text, View } from "react-native";
import AlbumCategory from "../components/AlbumCategory";
import { albumCategories } from "../assets/data/albumCategories";

type Props = {};

const song = {
	id: "1",
	imageUri:
		"https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg",
	title: "High on You",
	artist: "Helen",
};

const HomeScreen = (props: Props) => {
	return (
		<View style={styles.container}>
			<FlatList
				data={albumCategories}
				renderItem={({ item }) => (
					<AlbumCategory title={item.title} albums={item.albums} />
				)}
				keyExtractor={(item) => item.id}
			/>
		</View>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
