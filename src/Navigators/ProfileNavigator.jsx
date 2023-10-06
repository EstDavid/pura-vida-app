import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../components/Profile';
import theme from '../theme';

const Stack = createNativeStackNavigator();

const ProfileNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Profile"
            screenOptions={{
                headerTintColor: theme.headerNavigation.colors.headerTint,
                headerStyle: { backgroundColor: theme.headerNavigation.colors.backgroundColor }
            }}
        >
            <Stack.Screen
                name="Profile"
                component={Profile}
                options={{
                    headerTitle: 'Your Pura Vida'
                }}
            />
        </Stack.Navigator>
    );
};

export default ProfileNavigator;