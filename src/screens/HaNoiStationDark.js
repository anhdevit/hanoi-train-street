/**
 * @format
 * @flow
 */

import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import images from '../resources/icons';

function HaNoiStationDark() {
    return (
        <View style={styles.container} >
            <Image
                source={images.hanoi_train_station}
                style={styles.imageStation}
                resizeMode='cover'
            />
            <Text style={styles.textDescription}>WELCOME TO HA NOI RAILWAY STATION</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.black,
        flex: 1
    },
    imageStation: {
        height: '40%',
        width: '100%'
    },
    textTitle: {
        color: 'orange',
        alignSelf: 'center',
        fontSize: 30,
        fontWeight: '600',
        marginTop: 20
    },
    textDescription: {
        color: 'orange',
        alignSelf: 'center',
        fontSize: 30,
        fontWeight: '600',
        marginTop: 20,
        textAlign: 'center'
    },
});

export default HaNoiStationDark;
