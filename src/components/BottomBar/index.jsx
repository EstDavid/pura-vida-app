import { useState } from 'react';
import { BottomNavigation } from 'react-native-paper';
import Home from '../Home';
import About from '../About';
import Profile from '../Profile';
import Notifications from '../Notifications';

const HomeRoute = () => <Home />;

const ProfileRoute = () => <Profile />;

const AboutRoute = () => <About />;

const NotificationsRoute = () => <Notifications />;

const BottomBar = () => {
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'home', title: 'Home', focusedIcon: 'heart', unfocusedIcon: 'heart-outline' },
        { key: 'profile', title: 'My Pura Vida', focusedIcon: 'meditation' },
        { key: 'about', title: 'About', focusedIcon: 'set-none' },
        { key: 'notifications', title: 'Notifications', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        home: HomeRoute,
        profile: ProfileRoute,
        about: AboutRoute,
        notifications: NotificationsRoute,
    });

    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
        />
    );
};

export default BottomBar;