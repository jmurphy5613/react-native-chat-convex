import { StyleSheet, Text, View, TextInput, Button} from 'react-native';
import { useState } from "react";
import { useMutation, useQuery } from "../convex/_generated/react";
import addMessage from '../convex/addMessage';

function Main(props) {

    const [currentMessage, setCurrentMessage] = useState("");

    const messages = useQuery("getMessages") || [];
    const addMessage = useMutation('addMessage');


    const onMessageSend = () => {
        if(currentMessage !== "") {
            addMessage({ body: currentMessage, author: props.name })
            setCurrentMessage("");
            
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{`Writing as ${props.name}`}</Text>
            <View>
                {
                    messages.map((message, index) => {
                        return (
                            <View key={index}>
                                <Text>{message.author}</Text>
                                <Text>{message.body}</Text>
                            </View>
                        )
                    }, [])
                }
            </View>

            <View style={styles.messageContainer}>
                <TextInput style={styles.input} placeholder={"Write your message here"} onChangeText={setCurrentMessage} />
                <Button onPress={onMessageSend} style={styles.send} title="Send" />
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
