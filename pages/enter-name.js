import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const EnterName = props => {


    return (
        <View style={styles.container}>
            <Text>Enter your name</Text>
            <TextInput style={styles.input} onChangeText={props.setName}/>
            <Button
                title="Submit"
                onPress={() => {
                    props.setCurrentPage("main")
                }}
            />
        </View>
    );
}

export default EnterName

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    input: {
        height: 40,
        width: 100,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});