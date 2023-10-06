import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppBar from './components/AppBar';
import BottomBarNavigator from './Navigators/BottomBarNavigator';

const Stack = createNativeStackNavigator();

const Main = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="BottomBar"
                screenOptions={{
                    header: (props) => <AppBar {...props} />,
                }}
            >
                <Stack.Screen
                    name="BottomBarNavigator"
                    component={BottomBarNavigator}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Main;