/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {
	FontAwesome,
	Entypo,
	EvilIcons,
	MaterialCommunityIcons,
	FontAwesome5,
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
	NavigationContainer,
	DefaultTheme,
	DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, Pressable } from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import AlbumScreen from "../screens/AlbumScreen";
import HomeScreen from "../screens/HomeScreen";
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import TabOneScreen from "../screens/TabOneScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import {
	RootStackParamList,
	RootTabParamList,
	RootTabScreenProps,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";

export default function Navigation({
	colorScheme,
}: {
	colorScheme: ColorSchemeName;
}) {
	return (
		<NavigationContainer
			linking={LinkingConfiguration}
			theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
			<RootNavigator />
		</NavigationContainer>
	);
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Root"
				component={BottomTabNavigator}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="NotFound"
				component={NotFoundScreen}
				options={{ title: "Oops!" }}
			/>
			<Stack.Group screenOptions={{ presentation: "modal" }}>
				<Stack.Screen name="Modal" component={ModalScreen} />
			</Stack.Group>
		</Stack.Navigator>
	);
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
	const colorScheme = useColorScheme();

	return (
		<BottomTab.Navigator
			// initialRouteName="TabOne"
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme].tint,
			}}>
			<BottomTab.Screen
				name="Home"
				component={HomeNavigator}
				options={() => ({
					title: "Home",
					tabBarIcon: ({ color }) => (
						<Entypo name="home" size={30} color={color} />
					),
				})}
			/>

			<BottomTab.Screen
				name="Search"
				component={TabTwoScreen}
				options={{
					title: "Search",
					tabBarIcon: ({ color }) => (
						<EvilIcons
							name="search"
							color={color}
							size={30}
							style={{ marginBottom: -3 }}
						/>
					),
				}}
			/>

			<BottomTab.Screen
				name="Your Library"
				component={TabTwoScreen}
				options={{
					title: "Your Library",
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons
							name="library"
							color={color}
							size={30}
							style={{ marginBottom: -3 }}
						/>
					),
				}}
			/>

			<BottomTab.Screen
				name="Premium"
				component={TabTwoScreen}
				options={{
					title: "Your Library",
					tabBarIcon: ({ color }) => (
						<FontAwesome5
							name="spotify"
							color={color}
							size={30}
							style={{ marginBottom: -3 }}
						/>
					),
				}}
			/>
		</BottomTab.Navigator>
	);
}

const TabOneStack = createNativeStackNavigator();

function HomeNavigator() {
	return (
		<TabOneStack.Navigator>
			<TabOneStack.Screen
				name="HomeScreen"
				component={HomeScreen}
				options={{
					headerShown: false,
				}}
			/>
			<TabOneStack.Screen
				name="AlbumScreen"
				component={AlbumScreen}
				options={{
					headerShown: false,
				}}
			/>
		</TabOneStack.Navigator>
	);
}
