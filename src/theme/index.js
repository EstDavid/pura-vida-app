// import { Platform } from 'react-native';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const theme = {
    appBarLogoContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    appBarLogo: {
        width: 40,
        height: 40
    },
    appBarLogoText: {
        color: 'white',
        fontSize: 25,
        padding: 5
    },
    bottomNavigation: {
        colors: {
            onSurface: 'white',
            onTertiaryContainer: 'white',
            onSecondaryContainer: '#595959',
            onSurfaceVariant: 'white',
            elevation: {
                level2: '#D84414'
            }
        }
    },
    header: {
        colors: {
            onSurface: 'white',
            onTertiaryContainer: 'white',
            onSecondaryContainer: '#595959',
            onSurfaceVariant: 'white',
            elevation: {
                level2: '#D84414'
            }
        }
    },
    headerNavigation: {
        colors: {
            headerTint: 'white',
            backgroundColor: '#E27659'
        }
    },
    homeCards: {
        cardMargin: 5,
        cardWidth: screenWidth / 2 - 5 * 2,
        imageMargin: 5,
        imageHeight: 100,
    }
};

export default theme;