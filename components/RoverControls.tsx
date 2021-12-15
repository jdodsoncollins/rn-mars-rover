import React, { useContext } from 'react';
import { StyleSheet, Switch } from 'react-native';
import { AppContext } from '../providers';
import { View, Text } from './Themed';
import { DateTime } from 'luxon'
import { Button } from 'native-base';

export default function RoverControls() {
  const { roverViewConfig, changeRoverViewConfig } = useContext(AppContext);
  const isFutureDate = (date: DateTime) => !!(DateTime.now().startOf('day').toISO() <= date);
  const prevDate = () => changeRoverViewConfig({ date: DateTime.fromISO(roverViewConfig?.date).minus({days:1}).startOf('day').toISO() });
  const nextDate = () => changeRoverViewConfig({ date: DateTime.fromISO(roverViewConfig?.date).plus({days:1}).startOf('day').toISO() });
  const prevSol = () => roverViewConfig?.sol >= 0 && changeRoverViewConfig({ sol: roverViewConfig.sol - 1 });
  const nextSol = () => changeRoverViewConfig({ sol: roverViewConfig?.sol + 1 });

  return (
    <View style={styles.controlsContainer}>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.label}>{roverViewConfig?.dateType === 'sol' ? 'Sol: ' + roverViewConfig?.sol : 'Date: ' + DateTime.fromISO(roverViewConfig?.date).toLocaleString({ month: 'long', day: 'numeric', year: 'numeric' })}</Text>
        <Switch size="sm" onValueChange={() => changeRoverViewConfig({dateType: roverViewConfig?.dateType === 'sol' ? 'date' : 'sol'})} value={roverViewConfig?.dateType === 'sol'} /><Text style={styles.label}>Use Martian sol</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Button style={styles.dateButton} onPress={() => roverViewConfig?.dateType === 'sol' ? prevSol() : prevDate()} isDisabled={roverViewConfig?.dateType === 'sol' && !!(roverViewConfig?.sol <= 0)}>{'Previous ' + roverViewConfig?.dateType}</Button>
        <Button style={styles.dateButton} onPress={() => roverViewConfig?.dateType === 'sol' ? nextSol() : nextDate()} isDisabled={roverViewConfig?.dateType === 'date' && isFutureDate(roverViewConfig?.date)}>{'Next ' + roverViewConfig?.dateType}</Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    controlsContainer: {
        padding: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        marginHorizontal: 50,
    },
    label: {
        paddingStart: 10,
        paddingEnd: 10,
    },
    dateButton: {
        marginStart: 10,
        marginEnd: 10,
    }
});
