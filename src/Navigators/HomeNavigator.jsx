import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../components/Home';
import Program from '../components/Program';

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerTintColor: 'white',
                headerStyle: { backgroundColor: '#E27659' }
            }}
        >
            <Stack.Screen
                name="Home"
                component={Home}
            />
            <Stack.Screen
                name="Program"
                component={Program}
            />
        </Stack.Navigator>
    );
};

export default HomeNavigator;
