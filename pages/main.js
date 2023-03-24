import { useQuery } from "../convex/_generated/react";
import { StyleSheet, Text, View } from 'react-native';

function Main() {

    const tasks = useQuery("getTasks");

    return (
        <View>
            <Text>{JSON.stringify(tasks, null, 2)}</Text>
        </View>
    );
}

export default Main
