import { NavigationContainer } from '@react-navigation/native';
import BottomBar from './components/BottomBar/';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppBar from './components/AppBar';

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
                    name="BottomBar"
                    component={BottomBar}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Main;