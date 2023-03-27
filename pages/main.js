import { useQuery } from "../convex/_generated/react";
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';
import { useState } from "react";

function Main(props) {

    const tasks = useQuery("getTasks");

    const [currentMessage, setCurrentMessage] = useState("");

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{`Writing as ${props.name}`}</Text>
            <View style={styles.messageContainer}>
                <TextInput style={styles.input} placeholder={"Write your message here"} onChangeText={setCurrentMessage} />
                <Button style={styles.send} title="Send" />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 50,
    },
    messageContainer: {
        flex: 1,
        width: '100%',
        position: 'absolute',
        bottom: '5%',
        flexDirection: 'row',
        alignItems: 'center',
    },  
    input: {
        height: 40,
        width: '70%',
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
    },
    send: {
        height: 40,
        width: '20%',
    }
});

export default Main
