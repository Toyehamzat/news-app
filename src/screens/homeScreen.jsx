import { View, Text } from "react-native";
import React from "react";
import { useState } from "react";
import { useColorScheme } from "react-native";
import { useQuery } from "@tanstack/react-query";
import {
  fetchBreakingNews,
  fetchDiscoverNews,
  fetchSearchNews,
  fetchRecommendedNews,
} from "../utils/newsApi";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Header from "../components/header";

export default function HomeScreen() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const [breakingNews, SetBreakingNews] = useState([]);
  const [recommendedNews, SetRecommendedNews] = useState([]);

  const { isloading: isBreakingNewsLoading } = useQuery({
    queryKey: ["isBreakingNewsLoading"],
    queryFn: fetchBreakingNews,
    onSuccess: (data) => {
      SetBreakingNews(data.articles);
    },
    onError: (err) => {
      console.log("fetching breaking news:", err);
    },
  });
  const { isloading: isrecommendedNewsLoading } = useQuery({
    queryKey: ["isrecommendedNewsLoading"],
    queryFn: fetchRecommendedNews,
    onSuccess: (data) => {
      SetBreakingNews(data.articles);
    },
    onError: (err) => {
      console.log("fetching recommended news:", err);
    },
  });
  //   const {isloading:isBreakingNewsLoading} = useQuery({
  //     queryKey: 'isBreakingNewsLoading',
  //     queryFn: fetchBreakingNews,
  //     onSuccess:(data)=>{
  //         SetBreakingNews(data.articles);
  //     },
  //     onError:(err)=>{
  //         console.log("fetching breaking news:",err);
  //     }
  //   });
  return (
    <SafeAreaView>
      <StatusBar style={colorScheme == "dark" ? "light" : "dark"} />
      <Header />
      <Text>Home screen</Text>
    </SafeAreaView>
  );
}
