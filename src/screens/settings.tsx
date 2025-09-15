import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useApp } from '../../src/contexts/appProvider';
import { useNavigation } from '@react-navigation/native';

const Settings = () => {
    const { dispatch, state } = useApp();
    const {name} = state?.profile || {};
    const navigation = useNavigation();

    const logout = () => {
        dispatch({ type: 'RESET' });
        
        navigation.reset({
            index: 0,
            //@ts-ignore
            routes: [{ name: 'Welcome' }],
        });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Settings</Text>
            <Text style={styles.text}>Hi {name}, want to logout ?</Text>
            <TouchableOpacity style={styles.logoutButton} onPress={logout}>
                <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        color: '#fff',
        marginBottom: 20,
    },
    logoutButton: {
        backgroundColor: '#e74c3c',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    logoutText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    text: {
        fontSize: 24,
        fontWeight: '700',
        color: '#000',
        textAlign: 'center',
        marginHorizontal: 30,
        marginBottom: 32,
    }
});

export default Settings;