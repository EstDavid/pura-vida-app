import { View } from 'react-native';
import { Navigate, Route, Routes } from 'react-router-native';
import Home from './components/Home';
import BottomBar from './components/BottomBar/';

const Main = () => {
    return (
        <>
            <BottomBar />
        </>
    );
};

export default Main;