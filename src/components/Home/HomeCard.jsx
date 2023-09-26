import { StyleSheet, Dimensions } from 'react-native';
import { Card, Text } from 'react-native-paper';

const screenWidth = Dimensions.get('window').width;
const cardMargin = 5;

const styles = StyleSheet.create({
    card: {
        margin: cardMargin,
        width: screenWidth / 2 - cardMargin * 2
    },
    image: {
        margin: 5,
        height: 100
    }
});

const HomeCard = ({ title, navigation }) => {
    return (
        <Card
            style={styles.card}
            mode='contained'
            onPress={() => {
                navigation.navigate(title);
            }}
        >
            <Card.Content>
                <Text variant="titleMedium">{title}</Text>
            </Card.Content>
            <Card.Cover style={styles.image} source={{ uri: 'https://picsum.photos/700' }} />
        </Card>
    );
};

export default HomeCard;