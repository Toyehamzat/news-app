import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useColorScheme } from "nativewind";
import HomeScreen from "../screens/homeScreen";
import DiscoveryScreen from "../screens/discoveryScreen";
import SavedScreen from "../screens/savedScreen";
import SearchScreen from "../screens/searchScreen";
import SplashScreen from "../screens/splashScreen";
import NewsDetailsScreen from "../screens/newsDetailsScreen";
import WelcomeScreen from "../screens/welcomeScreen";

const tab = createBottomTabNavigator();
const stack = createNativeStackNavigator();

export default function AppNavigation() {
  const { colorScheme, toogleScheme } = useColorScheme();
  const tabNavigator = () => {
    return (
      <tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = "home";
            } else if (route.name === "Discover") {
              iconName = "compass-outline";
            } else if (route.name === "Saved") {
              iconName = "bookmark-outline";
            } else if (route.name === "Search") {
              iconName = "search-outline";
            }

            const customizeSize = 25;

            return (
              <Ionicons
                name={iconName}
                size={customizeSize}
                color={focused ? "green" : "gray"}
              />
            );
          },

          tabBarActiveTintColor: "green",
          tabBarInactiveTintColor: "gray",
          tabBarLabelStyle: {
            fontSize: 12,
            fontFamily: "SpaceGroteskMedium",
            // paddingBottom: 10,
          },
          tabBarStyle: {
            backgroundColor: colorScheme == "dark" ? "black" : "white",
            // borderTopWidth: 0,
            // padding: 10,
            // height: 60,
          },
        })}
      >
        <tab.Screen name="home" component={HomeScreen}></tab.Screen>
        <tab.Screen name="dicover" component={DiscoveryScreen}></tab.Screen>
        <tab.Screen name="saved" component={SavedScreen}></tab.Screen>
        <tab.Screen name="search" component={SearchScreen}></tab.Screen>
      </tab.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen
          initialRouteName="SplashS"
          screenOptions={{
            headerShown: false,
          }}
          name="splashS"
          component={SplashScreen}
        ></stack.Screen>
        <stack.Screen name="welcome" component={WelcomeScreen}></stack.Screen>
        <stack.Screen name="search" component={SearchScreen}></stack.Screen>
        <stack.Screen
          name="newsDetails"
          component={NewsDetailsScreen}
          options={{ animation: "slide_from_bottom" }}
        ></stack.Screen>
        <stack.Screen name="homeTabs" component={tabNavigator}></stack.Screen>
      </stack.Navigator>
    </NavigationContainer>
  );
}
