import React, { useContext } from 'react';
import { StyleSheet, Image, ScrollView, Dimensions } from 'react-native';
import { AppContext } from '../providers';
import { View } from './Themed';

export default function RoverImages() {
  const { images } = useContext(AppContext);
  const screenHeight = Dimensions.get('window').height
  
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1}} style={styles.scrollView}>
        {images.map((image, index) => (
        <Image
            style={styles.image}
            source={{
            uri: image.img_src,
            }}
        />))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    scrollView: {
        width: '80%',
        height: '100%',
        flexGrow: 1,
        margin: 20,
        alignSelf: 'center',
        padding: 20,
        borderWidth: 5,
        borderRadius: 5,
        borderColor: 'black',
        overflow: 'visible',
      },
    imagesContainer: {
        padding: 20,
        width: '90%',
        maxWidth: 500,
    },
    image: {
        width: '90%',
        height: 400,
    }
});
