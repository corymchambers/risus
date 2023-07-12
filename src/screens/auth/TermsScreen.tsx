import React, {ReactElement} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';

import AppButton from '../../components/AppButton';
import {setIsOnboarded} from '../../auth/authStorage';
import {ScreenProps} from '../../navigation/navTypes';
import {Routes} from '../../navigation/routes';

export default function TermsScreen({
  navigation,
  route,
}: ScreenProps<Routes.TermsScreen>): ReactElement {
  const navTo = route.params?.navOnAccept;

  const acceptPressed = async () => {
    if (navTo === Routes.FeedScreen) {
      await setIsOnboarded(); // Update storage.
      navigation.navigate(Routes.TabsStack);
    } else if (navTo === Routes.LoginScreen) {
      navigation.navigate(Routes.LoginScreen, {onboarded: true});
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <SafeAreaView style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.title}>Go Back</Text>
        </TouchableOpacity>
        <View style={styles.section}>
          <Text style={styles.mainTitle}>EULA for Risus</Text>
          <Text style={styles.title}>End User License Agreement</Text>
          <Text style={styles.text}>
            This End User License Agreement ("Agreement") is a legal agreement
            for the use of the Risus mobile application ("App"). Please read
            this Agreement carefully before installing or using the App. By
            installing or using the App, you agree to be bound by the terms and
            conditions of this Agreement. If you do not agree to the terms of
            this Agreement, do not install or use the App.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>Ownership</Text>
          <Text style={styles.text}>
            The App is owned by Risus and is protected by copyright and other
            intellectual property laws. Risus retains all rights, title, and
            interest in and to the App, including all intellectual property
            rights.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>Prohibited Content</Text>
          <Text style={styles.text}>
            The App prohibits the use of any content that is illegal,
            fraudulent, pornographic, obscene or offensive. Any violation of
            this policy may result in the termination of access to the
            application.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>Limitation of Liability </Text>
          <Text style={styles.text}>
            The App is provided "as is" without warranty of any kind, either
            express or implied, including, but not limited to, the implied
            warranties of merchantability and fitness for a particular purpose.
            Risus does not warrant that the App will meet your requirements or
            that the operation of the App will be uninterrupted or error-free.
          </Text>
          <Text style={styles.text}>
            Risus shall not be liable for any direct, indirect, incidental,
            special, or consequential damages arising out of or in connection
            with the use or inability to use the App, including but not limited
            to damages for loss of profits, goodwill, use, data, or other
            intangible losses, even if Risus has been advised of the possibility
            of such damages. In no event shall Risus's total liability to you
            for all damages, losses, and causes of action arising out of or
            relating to this Agreement or your use of the App, whether in
            contract, tort (including negligence), or otherwise, exceed the
            amount paid by you, if any, for the App.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>Termination/Governing Law</Text>
          <Text style={styles.text}>
            This Agreement is effective until terminated. Your rights under this
            Agreement will terminate automatically without notice from Risus if
            you fail to comply with any term or condition of this Agreement.
          </Text>
          <Text style={styles.text}>
            This Agreement shall be governed by and construed in accordance with
            the laws of the state/province/country in which Risus resides,
            without regard to its conflict of law principles.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>Entire Agreement/Contact</Text>
          <Text style={styles.text}>
            This Agreement constitutes the entire agreement between you and
            Risus with respect to the App and supersedes all prior or
            contemporaneous communications and proposals, whether oral or
            written, between you and Risus.
          </Text>
          <Text style={styles.text}>
            If you have any questions about this Agreement, please contact us at
            risushelp@gmail.com.
          </Text>
        </View>
        <View style={styles.section}>
          <AppButton title="Accept" onPress={acceptPressed} />
        </View>
        <View style={styles.section}>
          <AppButton title="Reject" onPress={() => navigation.goBack()} />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 8,
  },
  mainTitle: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 8,
  },
  scrollContainer: {
    backgroundColor: '#000007',
    minHeight: '100%',
  },
  section: {
    marginVertical: 16,
  },
  title: {
    color: 'white',
    fontSize: 18,
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
});
