import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../components/Profile';

const Stack = createNativeStackNavigator();

const ProfileNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Profile"
            screenOptions={{
                headerTintColor: 'white',
                headerStyle: { backgroundColor: '#E27659' }
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