import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import { bottomBarTabs } from '../core/BottomBarTabs';
import theme from '../theme';

const Tab = createMaterialBottomTabNavigator();

const BottomBarNavigator = () => {
    return (
        <Tab.Navigator initialRouteName={bottomBarTabs[0].name} styles={{ colors: theme.bottomNavigation.colors }}>
            {bottomBarTabs.map((tab, index) => {
                const { name, Component, tabBarLabel, tabBarIcon, customProps } = tab;
                return (
                    <Tab.Screen
                        key={index}
                        name={name}
                        options={{
                            tabBarLabel,
                            tabBarIcon,
                        }}
                    >
                        {(props) => <Component {...props} {...customProps} />}
                    </Tab.Screen>
                );

            })}
        </Tab.Navigator>
    );
};

export default BottomBarNavigator;