import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Notifications from '../components/Notifications';
import theme from '../theme';

const Stack = createNativeStackNavigator();

const NotificationsNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Notifications"
            screenOptions={{
                headerTintColor: theme.headerNavigation.colors.headerTint,
                headerStyle: { backgroundColor: theme.headerNavigation.colors.backgroundColor }
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