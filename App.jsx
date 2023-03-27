import { StyleSheet, Text, View } from 'react-native';
import { ConvexProvider, ConvexReactClient } from "convex/react";
// import { CONVEX_URL } from "@env";
import "react-native-get-random-values";
import Main from './pages/main';
import EnterName from './pages/enter-name';
import { useState } from 'react';


const convex = new ConvexReactClient("https://cool-pony-989.convex.cloud", {
    unsavedChangesWarning: false,
});


export default function App() {

    //routing
    const [currentPage, setCurrentPage] = useState("enterName")


    //data
    const [name, setName] = useState("");



    if(currentPage == "enterName") {
        return (
            <ConvexProvider client={convex}>
                <EnterName test={"hello"} currentPage={currentPage} name={name} setName={setName} setCurrentPage={setCurrentPage} />
            </ConvexProvider>
        );
    }

    return (
        <ConvexProvider client={convex}>
            <Main name={name} />
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
