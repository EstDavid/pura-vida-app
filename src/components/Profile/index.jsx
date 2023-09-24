import { View } from 'react-native';
import { Text } from 'react-native-paper';
import AppBar from '../AppBar';

const Profile = () => {
    return (
        <View>
            <AppBar title='My Pura Vida' />
            <Text>This is the my Pura Vida section</Text>
        </View>
    );
};

export default Profile;