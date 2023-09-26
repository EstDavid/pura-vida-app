import { StyleSheet, View } from 'react-native';
import { Appbar, Text } from 'react-native-paper';
import SVGlogo from '../../../assets/logo.svg';
import theme from '../../theme';

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

const AppBar = () => {
    return (
        <Appbar.Header
            mode="small"
            elevated
            theme={{ colors: styles.navBarColors }}
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