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
        component: Program,
        imageUri: 'https://uploads-ssl.webflow.com/6097f6edceccace67c4ba955/6391d7198a629c4010e0fb83_2022_Pura-Vida-Berlin_99%40anatorres.jpg',
        headerShown: false,
    },
    {
        title: 'Location map',
        component: LocationMap,
        imageUri: 'https://uploads-ssl.webflow.com/6097f6edceccace67c4ba955/6391d71b64021812e1a84032_2022_Pura-Vida-Berlin_113%40anatorres.jpg',
        headerShown: true,
    },
    {
        title: 'Stages',
        component: Stages,
        imageUri: 'https://uploads-ssl.webflow.com/6097f6edceccace67c4ba955/6391d71a67f5cf0189444c39_2022_Pura-Vida-Berlin_186%40anatorres.jpg',
        headerShown: true,
    },
    {
        title: 'Spaces',
        component: Spaces,
        imageUri: 'https://uploads-ssl.webflow.com/6097f6edceccace67c4ba955/6391d71f8b16d68e3a1598bc_2022_Pura-Vida-Berlin_440%40anatorres.jpg',
        headerShown: true,
    },
];

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