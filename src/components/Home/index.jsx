import { StyleSheet, FlatList, View } from 'react-native';
import HomeCard from './HomeCard';
import { homeMenuItems } from '../../core/homeMenuItems';

const styles = StyleSheet.create({
    cardsContainer: {
        display: 'flex',
    },
    cardsRow: {
        display: 'flex',
        flexDirection: 'row'
    }
});

const Home = () => {
    return (
        <View style={styles.cardsContainer}>
            <FlatList
                data={homeMenuItems}
                renderItem={({ item }) => {
                    return (
                        <HomeCard
                            title={item.title}
                            imageUri={item.imageUri}
                        />
                    );
                }}
                numColumns={2}
                key={2}
            />
        </View>
    );
};

export default Home;