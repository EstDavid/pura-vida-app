import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import { bottomBarTabs } from '../core';
import theme from '../theme';

const Tab = createMaterialBottomTabNavigator();

const BottomBarNavigator = () => {
    return (
        <Tab.Navigator initialRouteName={bottomBarTabs[0].name} styles={{ colors: theme.bottomNavigation.colors }}>
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

export default BottomBarNavigator;