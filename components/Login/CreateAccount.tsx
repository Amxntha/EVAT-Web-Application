import React from 'react';
import {
	View,
	Text,
	Image,
	TextInput,
	TouchableOpacity,
	StyleSheet
} from 'react-native';

const CreateAccount: React.FC<{ navigation: any }> = ({ navigation }): React.ReactElement => {
	const handleNext = () => {
    navigation.navigate('AddCard');
	};
	
  return (
    <View style={styles.createAccount}>
      <View style={styles.he100} />
      <Image source={require('../../assets/login/b1.png')} style={styles.logo1} />
      <Text style={styles.title}>Create Account</Text>
      <View style={styles.inpBox}>
        <View style={styles.inp}>
          <Image source={require('../../assets/login/b2.png')} style={styles.icon} />
          <TextInput placeholder="Email" style={styles.input} />
        </View>
        <View style={styles.inp}>
          <Image source={require('../../assets/login/b3.png')} style={styles.icon} />
          <TextInput placeholder="Password" style={styles.input} secureTextEntry />
        </View>
      </View>
      <TouchableOpacity style={styles.next} onPress={handleNext}>
        <Text style={styles.nextText}>Next</Text>
      </TouchableOpacity>
      <Text style={styles.text}>Privacy Policy</Text>
      <Text style={styles.text}>Terms & Conditions</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  createAccount: {
    flex: 1,
    height: '100%',
    backgroundColor: 'rgb(207, 249, 255)',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  he100: {
    height: 50,
  },
  logo1: {
    width: '90%',
    height: 250,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  title: {
    fontSize: 50,
    textAlign: 'center',
    fontFamily: 'Inknut Antiqua',
    marginVertical: 20,
  },
  inpBox: {
    width: '90%',
    marginTop: 30,
  },
  inp: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 30,
    borderColor: '#ccc',
  },
  icon: {
    width: 40,
    height: 30,
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: '100%',
    fontSize: 20,
    backgroundColor: '#cff9ff',
    paddingLeft: 10,
    borderWidth: 0,
    outlineStyle: 'none',
  },
  next: {
    backgroundColor: '#2293B7',
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginTop: 30,
  },
  nextText: {
    color: '#fff',
    fontSize: 18,
  },
  text: {
    color: '#007AFF',
    textAlign: 'center',
    marginVertical: 10,
  },
});

export default CreateAccount;
