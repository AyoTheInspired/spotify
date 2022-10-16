import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		padding: 20,
	},

	name: {
		color: "white",
		fontSize: 30,
		fontWeight: "bold",
	},

	creator: {
		color: "lightgray",
		margin: 7,
		fontSize: 20,
	},

	likes: {
		color: "lightgray",
		margin: 7,
		fontSize: 20,
	},

	creatorContainer: {
		flexDirection: "row",
	},

	image: {
		width: 200,
		height: 200,
		margin: 15,
	},

	button: {
		backgroundColor: "#1cd05d",
		height: 50,
		width: 170,
		borderRadius: 50,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 8,
	},

	buttonText: {
		color: "white",
		fontSize: 20,
		fontWeight: "bold",
	},
});
