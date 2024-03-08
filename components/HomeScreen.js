import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import {useState} from 'react'; 

export default function HomeScreen({ navigation }) {

    const [info, setInfo] = useState(""); 

    return <View style={styles.screen}>
        <Text>
            This is my home screen
        </Text>
        <TextInput
            value={info}
            onChangeText={setInfo}
            placeholder='Enter info'
        />
        <Button 
            title='Navigate'
            onPress={() => navigation.navigate('Other', 
            {userInput: info})}
        />
    </View>
}

const styles = StyleSheet.create({
    screen: {
        flex: 1, 
        backgroundColor: '#fff',
        alignItems: 'center', 
        justifyContent: 'center'
    }
})