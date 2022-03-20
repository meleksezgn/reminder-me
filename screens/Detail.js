import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';


export const DetailsScreen = ({ navigation, route }) => {
    const { index } = route.params || false
    return (
        <SafeAreaView style={styles.contentContainer}>
            <View style={styles.container}>
                <Ionicons onPress={() => navigation.goBack()} name="arrow-back-circle" size={34} color="green" style={styles.backButton} />
                <TouchableOpacity style={styles.contentContainer} onPress={() => navigation.goBack()}>
                    <Text style={{ fontSize: 21, color: 'green', fontWeight: 'bold', marginTop: 35 }}>{index}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    contentContainer: {
        flex: 1,
        justifyContent:'center',
    },
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    backButton: {
        position: 'absolute',
        top:15,
        left:25
    }
});