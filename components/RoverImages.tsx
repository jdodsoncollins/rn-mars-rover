import { Spinner } from 'native-base';
import React, { useContext } from 'react';
import { StyleSheet, Image, ScrollView, Dimensions } from 'react-native';
import { AppContext } from '../providers';
import { View, Text } from './Themed';

export default function RoverImages() {
  const { images } = useContext(AppContext);
  const screenHeight = Dimensions.get('window').height
  
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1}} style={styles.scrollView}>
        {!images && <Spinner accessibilityLabel="Loading images" />}
        {images.map((image, index) => (
        <View key={index} style={styles.imagesContainer}><Image
            style={styles.image}
            source={{
            uri: image.img_src,
            }}
        />
        <Text style={styles.label}>Camera: {image.camera.full_name}</Text>
        </View>))}
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
    }
});
