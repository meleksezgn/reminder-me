import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';


export const HomeScreen = ({ navigation }) => {
    const [done, setDone] = useState(null)

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.titleContainer}>
                <View style={styles.circle} />
                <Text style={styles.title}>Hatırlatıcı</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.cardContainer} style={{ flexGrow: 1 }}>
                {Array.from(Array(13).keys()).map((key, index) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Details', { index: index })} key={index} style={[styles.card, { width: Dimensions.get('window').width * 0.9 }]}>
                        <View style={styles.content}>
                            <View style={[styles.circleContent, { backgroundColor: index === done ? 'green' : 'red' }]} />
                            <Text style={[styles.contentText, { textDecorationLine: index === done ? 'line-through' : 'none' }]}>Lorem ipsum</Text>
                        </View>
                        <View style={styles.done}>
                            <Ionicons onPress={() => setDone(index)} name="checkmark-done-circle-outline" size={34} color="green" />
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dedede',
    },
    titleContainer: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 25,
        marginLeft: 14
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black',
        marginLeft: 11
    },
    circle: {
        width: 10,
        height: 10,
        borderRadius: 10,
        backgroundColor: 'red',
        marginLeft: 25,
    },
    cardContainer: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    card: {
        height: 55,
        backgroundColor: '#f2f2f2',
        borderRadius: 11,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 17,
        marginTop: 21,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    circleContent: {
        width: 10,
        height: 10,
        borderRadius: 9,
    },
    contentText: {
        marginLeft: 5,
        fontSize: 12,
    },
    done: {
        padding: 9,
        borderRadius: 50,
        zIndex: 10
    }
});