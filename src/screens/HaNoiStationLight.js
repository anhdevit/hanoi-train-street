/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import images from '../resources/icons';

function HaNoiStationLight() {
    return (
        <View style={styles.container} >
            <Image
                source={images.hanoi_train_station_light}
                style={styles.imageStation}
                resizeMode='cover'
            />
            <Text style={styles.textDescription}>WELCOME TO HA NOI RAILWAY STATION</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
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

export default HaNoiStationLight;
