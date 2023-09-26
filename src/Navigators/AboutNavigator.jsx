import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from '../components/About';

const Stack = createNativeStackNavigator();

const AboutNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="About"
            screenOptions={{
                headerTintColor: 'white',
                headerStyle: { backgroundColor: '#E27659' }
            }}
        >
            <Stack.Screen
                name="About"
                component={About}
                options={{
                    headerTitle: 'About'
                }}
            />
        </Stack.Navigator>
    );
};

export default AboutNavigator;