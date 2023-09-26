import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import { StyleSheet } from 'react-native';
import { bottomBarTabs } from '../../core';

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
        <Tab.Navigator initialRouteName={bottomBarTabs[0].name} styles={{ colors: styles.navBarColors }}>
            {bottomBarTabs.map((tab, index) => {
                const { name, component, tabBarLabel, tabBarIcon } = tab;
                return (
                    <Tab.Screen
                        key={index}
                        name={name}
                        component={component}
                        options={{
                            tabBarLabel,
                            tabBarIcon,
                        }}
                    />
                );

            })}
        </Tab.Navigator>
    );
};

export default BottomBar;