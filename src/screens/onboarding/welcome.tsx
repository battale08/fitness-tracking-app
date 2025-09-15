// src/screens/Welcome.tsx
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { WELCOME_IMAGE } from '../../assets';

// Replace with your fitness-themed image

export default function Welcome({ navigation }: any) {
  return (
    <View style={styles.container}>
      {/* Background image */}
      <View style={styles.imageContainer}>
        <Image
          source={WELCOME_IMAGE}
          style={styles.image}
          resizeMode="cover"
        />
        {/* Gradient overlay */}
        <LinearGradient
          colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.7)']}
          style={styles.gradient}
        />
      </View>

      {/* Text + Button overlay */}
      <View style={styles.overlayContent}>
        <Text style={styles.title}>Welcome to Fyxlife 🌱</Text>
        <Text style={styles.subtitle}>
          A small app to track your wellness goals.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('UserInfo')}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // fallback
  },
  imageContainer: {
    ...StyleSheet.absoluteFillObject,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  gradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '50%',
  },
  overlayContent: {
    position: 'absolute',
    bottom: 100,
    left: 24,
    right: 24,
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: '800',
    color: 'white',
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginBottom: 24,
  },
  button: {
    backgroundColor: 'white',
    paddingVertical: 15,
    borderRadius: 8,
    width: 220,
    alignItems: 'center',
  },
  buttonText: {
    color: '#2E8B57',
    fontSize: 18,
    fontWeight: '700',
  },
});
