import { Entypo, EvilIcons, Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { Image, Pressable, SafeAreaView, StyleSheet, View } from 'react-native';
import Text from './src/components/Text/Text';
import { colors } from './src/Theme/color';
import { spacings } from './src/Theme/spacings';

export default function App() {

  const [loaded] = useFonts({
    sansRegular: require('./assets/fonts/sansRegular.ttf'),
    sansBold: require('./assets/fonts/sansBold.ttf'),
  })

  if (!loaded) {
    return <Text>Text Font Loading...</Text>
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerTop}>
        <View style={styles.header}>
          <Ionicons name="ios-menu-outline" size={28} color="white" />
          <EvilIcons name="bell" size={28} color="white" />
        </View>
        <View style={styles.header}>
          <Text preset='h1'>Covid-19</Text>
          <Text preset='h3'>Options</Text>
        </View>
        <View style={{ marginTop: spacings[5] }}>
          <Text preset='h2' style={{ marginBottom: spacings[2] }}>Are you feeling sick?</Text>
          <Text preset='small'>
            If you feel sick with any of covid-19 symptoms please call or SMS us immediately for help.
            Call Now
            Send SMS</Text>
        </View>
        <View style={[styles.header, { marginBottom: spacings[5] }]}>
          <Pressable>
            <View style={[styles.btn, { backgroundColor: colors.red }]}>
              <Ionicons name="ios-call" size={26} color="white" />
              <Text preset='h4' style={{ marginLeft: spacings[2] }}>Call Now</Text>
            </View>
          </Pressable>
          <Pressable>
            <View style={[styles.btn, { backgroundColor: colors.blue }]}>
              <Entypo name="message" size={26} color="white" />
              <Text preset='h4' style={{ marginLeft: spacings[2] }}>Send SMS</Text>
            </View>
          </Pressable>
        </View>
      </View>
      <View style={{ paddingHorizontal: spacings[5], marginTop: spacings[7] }}>
        <Text preset='h2' style={{ color: colors.black, marginBottom: spacings[7] }}>Prevention</Text>
        <View style={styles.preventionImg}>
          <View>
            <Image
              source={require('./src/images/distance.png')}
            />
            <Text preset='small' style={{ color: colors.black, flexWrap: 'wrap' }}>Avoid contact</Text>
          </View>
          <View>
            <Image
              source={require('./src/images/mask.png')}
            />
            <Text preset='small' style={{ color: colors.black }}>Clean hands</Text>
          </View>
          <View>
            <Image
              source={require('./src/images/mask.png')}
            />
            <Text preset='small' style={{ color: colors.black, }}> Wear facemask</Text>
          </View>
        </View>
      </View>
      <View style={styles.testBanner}>
        <Image
          source={require('./src/images/Frame.png')}
        />
        <View>
          <Text preset='h2' style={{ color: colors.white, marginBottom: spacings[1] }}>Do your own test!</Text>
          <Text preset='small'>
            Follow the instructions to do your own test.</Text>
        </View>
      </View>
      <StatusBar style={{ backgroundColor: colors.lightBlue }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
  },
  containerTop: {
    backgroundColor: colors.lightBlue,
    paddingHorizontal: spacings[5],
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: spacings[6]
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacings[6],
    paddingVertical: spacings[2],
    borderRadius: 30
  },
  preventionImg: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  testBanner: {
    margin: spacings[5],
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.lightBlue,
    paddingHorizontal: spacings[2],
    paddingTop: spacings[2],
    borderRadius: 16
  }
});
