import * as React from 'react';
import { useContext, useEffect } from 'react';
import { StyleSheet } from 'react-native';

import RoverInfo from '../components/RoverInfo';
import { Text, View } from '../components/Themed';
import { AppContext } from '../providers';
import { RootTabScreenProps } from '../types';

export default function TabScreen({ navigation }: RootTabScreenProps<'Tab1'|'Tab2'|'Tab3'|'Tab4'>) { // todo: fix typings
  const { selectedRover } = useContext(AppContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{selectedRover}</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <RoverInfo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
