import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ConvexProvider, ConvexReactClient } from "convex/react";
// import { CONVEX_URL } from "@env";
import "react-native-get-random-values";
import Main from './pages/main';


const convex = new ConvexReactClient("https://cool-pony-989.convex.cloud", {
    unsavedChangesWarning: false,
});

export default function App() {


    return (
        <ConvexProvider client={convex}>
            <Main />
        </ConvexProvider>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
