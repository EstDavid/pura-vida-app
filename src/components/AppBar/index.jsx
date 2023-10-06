import { View } from 'react-native';
import { Appbar, Text } from 'react-native-paper';
import SVGlogo from '../../../assets/logo.svg';
import theme from '../../theme';

const AppBar = () => {
    return (
        <Appbar.Header
            mode="small"
            elevated
            theme={{ colors: theme.header.colors }}
        >
            <View style={{ ...theme.appBarLogoContainer }}>
                <Text style={theme.appBarLogoText}>Pura</Text>
                <SVGlogo width={theme.appBarLogo.width} height={theme.appBarLogo.height} />
                <Text style={theme.appBarLogoText}>Vida</Text>
            </View>
        </Appbar.Header>
    );
};

export default AppBar;