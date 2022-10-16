import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		position: "absolute",
		bottom: 78,
		width: "100%",
		backgroundColor: "#131313",
		borderWidth: 1,
		borderBottomColor: "black",
		flexDirection: "row",
		alignItems: "center",
	},

	title: {
		color: "white",
		fontSize: 18,
		fontWeight: "bold",
		marginRight: 10,
	},

	artist: {
		color: "lightgray",
		fontSize: 18,
	},

	image: {
		marginRight: 20,
		width: 75,
		height: 75,
	},

	rightContainer: {
		justifyContent: "space-around",
		marginLeft: 15,
	},
});

export default styles;
