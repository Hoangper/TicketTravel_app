import {FunctionComponent} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import Toast from 'react-native-toast-message';
import {RootNavigation, ThemeContext} from './src';
import {toastConfig} from './src/utils/toastConfig';

const App: FunctionComponent = () => {
  return (
    <SafeAreaProvider
      initialMetrics={{
        frame: {x: 0, y: 0, width: 0, height: 0},
        insets: {top: 0, left: 0, right: 0, bottom: 0},
      }}>
      <ThemeContext>
        <GestureHandlerRootView style={{flex: 1}}>
          <RootNavigation />
          <Toast config={toastConfig} topOffset={20} visibilityTime={2500} />
        </GestureHandlerRootView>
      </ThemeContext>
    </SafeAreaProvider>
  );
};

export default App;
