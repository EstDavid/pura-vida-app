import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Notifications from '../components/Notifications';

const Stack = createNativeStackNavigator();

const NotificationsNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Notifications"
            screenOptions={{
                headerTintColor: 'white',
                headerStyle: { backgroundColor: '#E27659' }
            }}
        >
            <Stack.Screen
                name="Notifications"
                component={Notifications}
                options={{
                    headerTitle: 'Latest Pura Vida Updates'
                }}
            />
        </Stack.Navigator>
    );
};

export default NotificationsNavigator;