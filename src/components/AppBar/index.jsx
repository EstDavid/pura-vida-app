import { View } from 'react-native';
import { Appbar } from 'react-native-paper';
import SVGlogo from '../../../assets/logo.svg';
import theme from '../../theme';

const AppBar = ({ title, backAction }) => {
    return (
        <Appbar.Header mode="medium" >
            <View style={theme.appBarLogoContainer}>
                <SVGlogo />
            </View>
            {backAction
                ? <Appbar.BackAction onPress={() => { }} />
                :
                null
            }
            <Appbar.Content title={title} />
        </Appbar.Header>
    );
};

export default AppBar;