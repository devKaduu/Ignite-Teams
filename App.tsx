import { StatusBar } from "react-native";

import { Routes } from "./src/routes";

import { ThemeProvider } from "styled-components/native";
import theme from "./src/theme/index";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import { Loading } from "@components/Loading";

export default function App() {
  // Logica de carregamento da font.
  // Assíncrono - preciso garantir que a font vai estar disponivel antes do aplicativo ser carregado.

  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  );
}
