import {
    HomeNavigator,
    ProfileNavigator,
    AboutNavigator,
    NotificationsNavigator
} from '../Navigators/';

export const bottomBarTabs = [
    {
        name: 'HomeNavigator',
        component: HomeNavigator,
        tabBarLabel: 'Home',
        tabBarIcon: 'heart'
    },
    {
        name: 'ProfileNavigator',
        component: ProfileNavigator,
        tabBarLabel: 'My Pura Vida',
        tabBarIcon: 'meditation'
    },
    {
        name: 'AboutNavigator',
        component: AboutNavigator,
        tabBarLabel: 'About',
        tabBarIcon: 'set-none'
    },
    {
        name: 'NotificationsNavigator',
        component: NotificationsNavigator,
        tabBarLabel: 'Notifications',
        tabBarIcon: 'bell'
    }
];