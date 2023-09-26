import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import { StyleSheet } from 'react-native';
import NotificationsNavigator from '../../Navigators/NotificationsNavigator';
import HomeNavigator from '../../Navigators/HomeNavigator';
import ProfileNavigator from '../../Navigators/ProfileNavigator';
import AboutNavigator from '../../Navigators/AboutNavigator';

const Tab = createMaterialBottomTabNavigator();

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    navBarColors: {
        onSurface: 'white',
        onTertiaryContainer: 'white',
        onSecondaryContainer: '#595959',
        onSurfaceVariant: 'white',
        elevation: {
            level2: '#D84414'
        }
    }
});

const BottomBar = () => {
    return (
        <Tab.Navigator initialRouteName="HomeNavigator" styles={{ colors: styles.navBarColors }}>
            <Tab.Screen
                name="HomeNavigator"
                component={HomeNavigator}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: 'heart',
                }}
            />
            <Tab.Screen
                name="ProfileNavigator"
                component={ProfileNavigator}
                options={{
                    tabBarLabel: 'My Pura Vida',
                    tabBarIcon: 'meditation'
                }}
            />
            <Tab.Screen
                name="About"
                component={AboutNavigator}
                options={{
                    tabBarLabel: 'About',
                    tabBarIcon: 'set-none',
                }}
            />
            <Tab.Screen
                name="NotificationsNavigator"
                component={NotificationsNavigator}
                options={{
                    tabBarLabel: 'Notifications',
                    tabBarIcon: 'bell'
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomBar;