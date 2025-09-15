import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from 'react-native';
import { useApp } from '../../../src/contexts/appProvider';

export default function UserInfo({ navigation }: any) {
  const { dispatch } = useApp();
  const [name, setName] = useState('');
  const [age, setAge] = useState<string>('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState<'male' | 'female' | null>(null);
  const [activityLevel, setActivityLevel] = useState<'low' | 'moderate' | 'high'>('moderate');
  const [nameError, setNameError] = useState(false);
  const [ageError, setAgeError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [genderError, setGenderError] = useState(false);

  const validateName = () => {
    return name.trim().length >= 3;
  };

  const validateAge = () => {
    const ageNum = Number(age);
    return !isNaN(ageNum) && ageNum >= 18 && ageNum <= 120;
  };

  const validatePhone = () => {
    const regex = /^\+?[\d\s-]{10,}$/;
    return regex.test(phone);
  };

  const validateEmail = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const onNext = () => {
    let isValid = true;

    if (!validateName()) {
      setNameError(true);
      isValid = false;
    } else {
      setNameError(false);
    }

    if (!validateAge()) {
      setAgeError(true);
      isValid = false;
    } else {
      setAgeError(false);
    }

    if (!validatePhone()) {
      setPhoneError(true);
      isValid = false;
    } else {
      setPhoneError(false);
    }

    if (!validateEmail()) {
      setEmailError(true);
      isValid = false;
    } else {
      setEmailError(false);
    }

    if (!gender) {
      setGenderError(true);
      isValid = false;
    } else {
      setGenderError(false);
    }

    if (!isValid) {
      Alert.alert('Error', 'Please fill in all fields correctly.');
      return;
    }

    dispatch({
      type: 'SET_PROFILE',
      payload: { name, age: Number(age), phone, email, gender, activityLevel },
    });
    navigation.replace('Confirmation', { name });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.title}>Tell us about you</Text>

          {/* Name Input */}
          <Text style={styles.label}>Name</Text>
          <View style={styles.inputGroup}>
            <TextInput
              placeholder="Name"
              value={name}
              onChangeText={setName}
              style={styles.input}
              autoCapitalize="words"
            />
            {nameError && <Text style={styles.errorMessage}>Enter a valid name (min 3 characters)</Text>}
          </View>

          {/* Age Input */}
          <Text style={styles.label}>Age</Text>
          <View style={styles.inputGroup}>
            <TextInput
              placeholder="Age"
              value={age}
              onChangeText={setAge}
              keyboardType="numeric"
              style={styles.input}
            />
            {ageError && <Text style={styles.errorMessage}>Enter a valid age (18-120)</Text>}
          </View>

          {/* Phone Input */}
          <Text style={styles.label}>Phone Number</Text>
          <View style={styles.inputGroup}>
            <TextInput
              placeholder="Phone (e.g., +1234567890)"
              value={phone}
              onChangeText={setPhone}
              keyboardType="phone-pad"
              style={styles.input}
            />
            {phoneError && <Text style={styles.errorMessage}>Enter a valid phone number</Text>}
          </View>

          {/* Email Input */}
          <Text style={styles.label}>Email</Text>
          <View style={styles.inputGroup}>
            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              style={styles.input}
            />
            {emailError && <Text style={styles.errorMessage}>Enter a valid email address</Text>}
          </View>

          {/* Gender Selector */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Gender</Text>
            <View style={styles.radioContainer}>
              {['male', 'female'].map((option) => (
                <TouchableOpacity
                  key={option}
                  onPress={() => setGender(option as 'male' | 'female')}
                  style={styles.radioButton}
                >
                  <View style={styles.radioCircle}>
                    {gender === option && <View style={styles.selectedRadio} />}
                  </View>
                  <Text style={styles.radioText}>
                    {option.charAt(0).toUpperCase() + option.slice(1)}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            {genderError && <Text style={styles.errorMessage}>Please select a gender</Text>}
          </View>

          {/* Activity Level Selector */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Activity Level</Text>
            <View style={styles.activityContainer}>
              {['low', 'moderate', 'high'].map((level) => (
                <TouchableOpacity
                  key={level}
                  onPress={() => setActivityLevel(level as 'low' | 'moderate' | 'high')}
                  style={[
                    styles.activityButton,
                    activityLevel === level && styles.activityButtonSelected,
                  ]}
                >
                  <Text
                    style={[
                      styles.activityButtonText,
                      activityLevel === level && styles.activityButtonTextSelected,
                    ]}
                  >
                    {level.charAt(0).toUpperCase() + level.slice(1)}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Finish Button */}
          <TouchableOpacity style={styles.buttonContainer} onPress={onNext}>
            <Text style={styles.finishText}>Finish</Text>
          </TouchableOpacity>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    padding: 24,
    paddingBottom: 100, // Extra padding to ensure content is not cut off
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000',
    alignSelf: 'center',
    marginBottom: 25,
  },
  inputGroup: {
    marginBottom: 16,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#C9C9C9',
    paddingVertical: 8,
    fontSize: 16,
    fontWeight: '500',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#868686',
    marginBottom: 10,
  },
  radioContainer: {
    flexDirection: 'row',
    gap: 16,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#2E8B57',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  selectedRadio: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#2E8B57',
  },
  radioText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
  },
  activityContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  activityButton: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: '#eee',
  },
  activityButtonSelected: {
    backgroundColor: '#2E8B57',
  },
  activityButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
  },
  activityButtonTextSelected: {
    color: '#fff',
    fontWeight: '700',
  },
  buttonContainer: {
    backgroundColor: '#2E8B57',
    borderRadius: 8,
    marginTop: 30,
    alignSelf: 'center',
    width: '100%',
    paddingVertical: 10,
  },
  finishText: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff',
  },
  errorMessage: {
    color: 'red',
    fontSize: 12,
    fontWeight: '500',
    marginTop: 4,
  },
});