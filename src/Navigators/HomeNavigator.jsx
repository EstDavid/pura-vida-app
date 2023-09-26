import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home, { homeMenuItems } from '../components/Home';

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
            {homeMenuItems.map((item, index) => {
                return (
                    <Stack.Screen
                        key={index}
                        name={item.title}
                        component={item.component} />
                );
            })}
        </Stack.Navigator>
    );
};

export default HomeNavigator;
