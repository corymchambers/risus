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
import {
  UserKeys,
  updateNostrPrivateKey,
  updateUserKeys,
  updateOnboarded,
} from '../../redux/user/userSlice';
import * as secp from '@noble/secp256k1';
import {getPublicKey, nip19} from 'nostr-tools';
import useUser from '../../hooks/useUser';

export default function LoginScreen({
  navigation,
  route,
}: ScreenProps<Routes.LoginScreen>): ReactElement {
  const dispatch = useAppDispatch();

  const [privateKey, setPrivateKey] = useState('');
  const {updateProfileContacts} = useUser();

  const loginPressed = async () => {
    //TODO: Add spinner
    try {
      const userKeys: UserKeys = {
        public: '',
        private: '',
      };

      if (privateKey.startsWith('nsec')) {
        const {data} = nip19.decode(privateKey);
        const hexPrivateKey = data as string;
        const hexPubkey = getPublicKey(hexPrivateKey);
        userKeys.private = hexPrivateKey;
        userKeys.public = hexPubkey;
      } else {
        if (secp.utils.isValidPrivateKey(privateKey)) {
          const hexPrivateKey = privateKey;
          const hexPubkey = getPublicKey(hexPrivateKey);
          userKeys.private = hexPrivateKey;
          userKeys.public = hexPubkey;
        } else {
          throw new Error('Invalid private key');
        }
      }

      updateProfileContacts(userKeys.public);
      // const profileContacts updateProfileContacts(userKeys.public);
      dispatch(updateUserKeys(userKeys));
    } catch (e) {
      console.log('error', e);
      // setError('Invalid private key');
    }

    if (route.params?.onboarded) {
      dispatch(updateOnboarded('true'));
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
          value={privateKey}
          onChangeText={setPrivateKey}
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
