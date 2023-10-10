import {
    HomeNavigator,
    ProfileNavigator,
    AboutNavigator,
    NotificationsNavigator
} from '../Navigators';

export const bottomBarTabs = [
    {
        name: 'HomeNavigator',
        Component: HomeNavigator,
        tabBarLabel: 'Home',
        tabBarIcon: 'heart',
    },
    {
        name: 'ProfileNavigator',
        Component: ProfileNavigator,
        tabBarLabel: 'My Pura Vida',
        tabBarIcon: 'meditation'
    },
    {
        name: 'AboutNavigator',
        Component: AboutNavigator,
        tabBarLabel: 'About',
        tabBarIcon: 'set-none'
    },
    {
        name: 'NotificationsNavigator',
        Component: NotificationsNavigator,
        tabBarLabel: 'Notifications',
        tabBarIcon: 'bell'
    }
];
