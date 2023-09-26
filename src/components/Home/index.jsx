import { StyleSheet, FlatList, View } from 'react-native';
import HomeCard from './HomeCard';
import Program from './Program';
import LocationMap from './LocationMap';
import Stages from './Stages';
import Spaces from './Spaces';

const styles = StyleSheet.create({
    cardsContainer: {
        display: 'flex',
    },
    cardsRow: {
        display: 'flex',
        flexDirection: 'row'
    }
});

export const homeMenuItems = [
    {
        title: 'Program',
        component: Program
    },
    {
        title: 'Location map',
        component: LocationMap
    },
    {
        title: 'Stages',
        component: Stages
    },
    {
        title: 'Spaces',
        component: Spaces
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