import AsyncStorage from '@react-native-async-storage/async-storage';

export const STORAGE_KEYS = {
  APP_STATE: 'fyx_app_state_v1',
};

export async function saveAppState(state: any) {
  try {
    await AsyncStorage.setItem(STORAGE_KEYS.APP_STATE, JSON.stringify(state));
  } catch (e) {
    console.warn('Failed to save state', e);
  }
}

export async function loadAppState() {
  try {
    const raw = await AsyncStorage.getItem(STORAGE_KEYS.APP_STATE);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    console.warn('Failed to load state', e);
    return null;
  }
}

export async function clearAppState() {
  await AsyncStorage.removeItem(STORAGE_KEYS.APP_STATE);
}
