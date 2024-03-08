import { StyleSheet, Text, View, Button } from 'react-native';

export default function OtherScreen({ route, navigation }) {
    const {userInput} = route.params; 
    
    return <View style={styles.screen}>
        <Text>
            This is an other screen 
        </Text>
        <Text>
            {userInput}
        </Text>
        {/* <Button
            title='Navigate'
            onPress={() => navigation.navigate('Home')}
        /> */}
        <Button
            title='Push'
            onPress={() => navigation.push('Home')}
        />
        <Button
            title='Go back'
            onPress={() => navigation.goBack()}
        />
    </View>
}

const styles = StyleSheet.create({
    screen: {
        flex: 1, 
        backgroundColor: '#fff',
        alignItems: 'center', 
        justifyContent: 'space-around'
    }
})