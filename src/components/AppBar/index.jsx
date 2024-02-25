import { View } from 'react-native';
import { Appbar, Text } from 'react-native-paper';
import theme from '../../theme';
import SvgLogo from '../../../assets/svgs/logo';

const AppBar = () => {
    return (
        <Appbar.Header
            mode="small"
            elevated
            theme={{ colors: theme.header.colors }}
        >
            <View style={{ ...theme.appBarLogoContainer }}>
                <Text style={theme.appBarLogoText}>Pura</Text>
                <SvgLogo />
                <Text style={theme.appBarLogoText}>Vida</Text>
            </View>
        </Appbar.Header>
    );
};

export default AppBar;