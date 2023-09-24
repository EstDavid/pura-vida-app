import { View } from 'react-native';
import { Text } from 'react-native-paper';
import AppBar from '../AppBar';

const Notifications = () => {
    return (
        <View>
            <AppBar title="Recent updates" />
            <Text>This is the notifications section</Text>
        </View>
    );
};

export default Notifications;