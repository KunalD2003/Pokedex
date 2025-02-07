import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/store/store';
import AppNavigator from './src/layouts/AppNavigator';
import { Appearance } from 'react-native';

export default function App() {
  useEffect(() => {
    console.log(Appearance.getColorScheme())
    Appearance.setColorScheme('light')
  },[])
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppNavigator />
      </PersistGate>
    </Provider>
  );
}