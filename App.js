import { MD3LightTheme as defaultTheme, PaperProvider } from 'react-native-paper';
import { NativeRouter } from 'react-router-native';
import LightThemeColors from './src/theme/lightThemeColors.json';
import Main from './src/Main';

const theme = {
  ...defaultTheme,
  colors: {
    ...LightThemeColors.colors,
  },
};

const App = () => {
  return (
    <>
      <NativeRouter>
        <PaperProvider theme={theme}>
          <Main />
        </PaperProvider>
      </NativeRouter>
    </>
  );
};

export default App;