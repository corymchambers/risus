import React, {ReactElement} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import AppButton from '../../components/AppButton';
import {Routes} from '../../navigation/routes';

export default function LoginMethodScreen({navigation}): ReactElement {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <SafeAreaView style={styles.container}>
        <View>
          <Image source={require('../../assets/images/logo-small.png')} />
        </View>
        <View style={styles.buttonsContainer}>
          <View style={styles.innerContainer}>
            <AppButton
              title="Login"
              onPress={() =>
                navigation.navigate(Routes.TermsScreen, {
                  navOnAccept: Routes.LoginScreen,
                })
              }
            />
          </View>
          <View style={styles.innerContainer}>
            <AppButton title="Create Account" onPress={() => {}} />
          </View>
          <View style={styles.innerContainer}>
            <AppButton
              title="Continue as Guest"
              onPress={() =>
                navigation.navigate(Routes.TermsScreen, {
                  navOnAccept: Routes.FeedScreen,
                })
              }
            />
          </View>
          <View style={styles.innerContainer}>
            <Text style={styles.text}>
              You will need to Login in order to post messages.
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    width: '80%',
  },
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  innerContainer: {
    marginVertical: 8,
  },
  scrollContainer: {
    backgroundColor: '#000007',
    minHeight: '100%',
  },
  text: {
    color: 'white',
  },
});
