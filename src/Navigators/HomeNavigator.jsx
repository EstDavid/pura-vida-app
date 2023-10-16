import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home, { homeMenuItems } from '../components/Home';
import theme from '../theme';
import ActivityPage from '../components/Home/Activity';

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerTintColor: theme.headerNavigation.colors.headerTint,
                headerStyle: { backgroundColor: theme.headerNavigation.colors.backgroundColor }
            }}
        >
            <Stack.Screen
                name="Home"
                component={Home}
            />
            <Stack.Screen
                name="Activity"
                component={ActivityPage}
            />
            {homeMenuItems.map((item, index) => {
                return (
                    <Stack.Screen
                        key={index}
                        name={item.title}
                        component={item.component}
                        options={{
                            headerShown: item.headerShown,
                        }}
                    />
                );
            })}
        </Stack.Navigator>
    );
};

export default HomeNavigator;
