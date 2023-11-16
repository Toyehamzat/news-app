import { View, Text, Switch } from "react-native";
import React from "react";
import { useColorScheme } from "nativewind";

export default function Header() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    <View className="flex-row justify-between items-center mx-4 mt-4">
      <View>
        <Text
          className="text-2xl text-green-800 uppercase dark:text-white"
          style={{
            fontFamily: "SpaceGroteskBold",
          }}
        >
          stack news
        </Text>
      </View>
      <View>
        <Switch value={colorScheme == "dark"} onChange={toggleColorScheme} />
      </View>
    </View>
  );
}
