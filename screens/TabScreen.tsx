import * as React from 'react';
import { useContext, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import RoverControls from '../components/roverControls';
import RoverImages from '../components/RoverImages';

import RoverInfo from '../components/RoverInfo';
import { Text, View } from '../components/Themed';
import { AppContext } from '../providers';
import { RootTabScreenProps } from '../types';

export default function TabScreen({ navigation }: RootTabScreenProps<'Tab1'|'Tab2'|'Tab3'|'Tab4'>) { // todo: fix typings
  const { selectedRoverDetails } = useContext(AppContext);

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <RoverInfo />
      </View>
      <RoverImages />
      <RoverControls />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    flex: 1,
  },
  title: {
    paddingTop: 50,
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
