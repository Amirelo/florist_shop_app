import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import colors from './src/colors/colors';

import CustomText from './src/components/CustomText';
import CustomImage from './src/components/CustomImage';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: colors.light.background,
    flex: 1
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <CustomText savedStyle={'title'}>Title</CustomText>
      <CustomImage borderRadius={10} borderWidth={5} src='https://images.pexels.com/photos/844297/pexels-photo-844297.jpeg' />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
