import { ActivityIndicator } from 'react-native';
import React, { useContext } from 'react';
import { StyleSheet, ScrollView, Image } from 'react-native';
import { AppContext } from '../providers';
import { View, Text } from './Themed';
import { DateTime } from 'luxon'
import { Button, Icon } from 'react-native-elements';

export default function RoverImages() {
  const { images } = useContext(AppContext);
  const { roverViewConfig, changeRoverViewConfig } = useContext(AppContext);

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1}} style={styles.scrollView}>
        {!images && <ActivityIndicator />}
        {images.length === 0 && <Text style={styles.label}>No images. Try a different day.</Text>}
        {images.map((image, index) => (
        <View key={index} style={styles.imagesContainer}><Image
            style={styles.image}
            source={{
            uri: image.img_src,
            }}
        />
            <Text style={styles.label}>Camera: {image.camera.full_name}</Text>
            <Text style={styles.label}>Earth date: {DateTime.fromISO(image.earth_date).toLocaleString({ month: 'long', day: 'numeric', year: 'numeric' })}</Text>
            <Text style={styles.label}>Sol: {image.sol}</Text>
        </View>))}
        <View style={styles.pageButtons}>
        {roverViewConfig.page > 1 && <Button  type="outline" style={styles.pageButton} onPress={() => changeRoverViewConfig({page: roverViewConfig.page - 1})}  icon={
    <Icon
      name="arrow-left"
      size={15}
      color="white"
    />
  } title="Previous Page"></Button>}
        <Button type="outline" style={styles.pageButton} onPress={() => changeRoverViewConfig({page: roverViewConfig.page + 1})}  icon={
    <Icon
      name="arrow-right"
      size={15}
      color="white"
    />
  } iconRight title="Next Page"></Button>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    scrollView: {
        width: '100%',
        height: '100%',
        flexGrow: 1,
        margin: 20,
        alignSelf: 'center',
        padding: 20,
        paddingTop: 150,
        overflow: 'visible',
      },
    imagesContainer: {
        padding: 20,
        alignSelf: 'center',
        width: '95%',
        maxWidth: 500,
    },
    image: {
        width: '100%',
        height: 400,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    label: {
        alignSelf: 'center',
    },
    pageButtons: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    pageButton: {
        margin: 10,
    }
});
