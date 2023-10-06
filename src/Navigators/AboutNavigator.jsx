import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from '../components/About';
import theme from '../theme';

const Stack = createNativeStackNavigator();

const AboutNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="About"
            screenOptions={{
                headerTintColor: theme.headerNavigation.colors.headerTint,
                headerStyle: { backgroundColor: theme.headerNavigation.colors.backgroundColor }
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