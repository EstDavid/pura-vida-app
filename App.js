import { PaperProvider } from 'react-native-paper';
import { NativeRouter } from 'react-router-native';
import Main from './src/Main';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <>
      <NativeRouter>
        <PaperProvider>
          <NavigationContainer>
            <Main />
          </NavigationContainer>
        </PaperProvider>
      </NativeRouter>
    </>
  );
}