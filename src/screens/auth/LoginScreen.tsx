import React, {ReactElement, useState} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import AppButton from '../../components/AppButton';
import {Routes} from '../../navigation/routes';
import {ScreenProps} from '../../navigation/navTypes';
import AppText from '../../components/AppText';
import {setIsOnboarded, setPrivateKey} from '../../auth/authStorage';
import {useAppDispatch} from '../../redux/hooks';
import {updateNostrPrivateKey} from '../../redux/user/userSlice';

export default function LoginScreen({
  navigation,
  route,
}: ScreenProps<Routes.LoginScreen>): ReactElement {
  const dispatch = useAppDispatch();
  const [key, setKey] = useState('');
  const loginPressed = async () => {
    await setPrivateKey(key);
    dispatch(updateNostrPrivateKey(key));

    if (route.params?.onboarded) {
      console.log('update onboarded');
      await setIsOnboarded(); // Update storage.
    }

    navigation.navigate(Routes.TabsStack);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <SafeAreaView style={styles.container}>
        <View style={styles.title}>
          <AppText size={24}>Login</AppText>
        </View>
        <View style={styles.title}>
          <AppText>
            Enter your private key that you would've saved when you signed up.
          </AppText>
        </View>
        <TextInput
          style={styles.input}
          value={key}
          onChangeText={setKey}
          placeholder="nsec1..."
          placeholderTextColor="black"
        />
        <View style={{width: '100%', marginTop: 16}}>
          <AppButton title="Login" onPress={loginPressed} />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate(Routes.LoginMethodScreen)}>
          <AppText>Go back to login methods</AppText>
        </TouchableOpacity>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    margin: 16,
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    height: 40,
    paddingLeft: 8,
    width: '100%',
  },
  scrollContainer: {
    backgroundColor: '#000007',
    minHeight: '100%',
  },
  title: {
    alignSelf: 'center',
    marginBottom: 16,
    marginTop: 24,
  },
});
