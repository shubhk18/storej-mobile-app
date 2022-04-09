import React from 'react';
import {
  Text,
  useColorScheme,
  View,
} from 'react-native';
import * as S from './App.styles'

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <S.AppWrapper>
     <View><Text>StoreJ Mobile App</Text></View>
    </S.AppWrapper>
  );
};

export default App;
