import {
    HomeNavigator,
    ProfileNavigator,
    AboutNavigator,
    NotificationsNavigator
} from '../Navigators/';

import LocationMap from '../components/Home/LocationMap';
import Program from '../components/Home/Program';
import Spaces from '../components/Home/Spaces';
import Stages from '../components/Home/Stages';

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