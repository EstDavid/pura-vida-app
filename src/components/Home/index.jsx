import { StyleSheet, FlatList, View } from 'react-native';
import HomeCard from './HomeCard';

const styles = StyleSheet.create({
    cardsContainer: {
        display: 'flex',
    },
    cardsRow: {
        display: 'flex',
        flexDirection: 'row'
    }
});

const homeMenuItems = [
    {
        title: 'Program'
    },
    {
        title: 'Location map'
    },
    {
        title: 'Stages'
    },
    {
        title: 'Spaces'
    },
];

const Home = ({ navigation }) => {
    return (
        <View style={styles.cardsContainer}>
            <FlatList
                data={homeMenuItems}
                renderItem={({ item }) => {
                    return (
                        <HomeCard title={item.title} navigation={navigation} />
                    );
                }}
                numColumns={2}
                key={2}
            />
        </View>
    );
};

export default Home;