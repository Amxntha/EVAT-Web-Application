import React from 'react';
import {
	View,
	Text,
	Image,
	TextInput,
	Button,
	StyleSheet,
	TouchableOpacity
} from 'react-native';
import { AxiosError } from 'axios';
import { useForm, Controller } from 'react-hook-form';
import { loginUser } from './../apiService';

interface LoginFormValues {
  email: string;
  password: string;
}

const LoginScreen: React.FC<{ navigation: any }> = ({ navigation }): React.ReactElement => {
  const { control, handleSubmit } = useForm<LoginFormValues>();

  const onSubmit = async (data: LoginFormValues) => {
    try {
      const response = await loginUser(data.email, data.password);
      console.log('Login Successful:', response);
      // Navigate or store token
    } catch (error) {
      if (error instanceof AxiosError && error.response && error.response.data) {
        console.error('Login Failed:', error.response.data);
      } else if (error instanceof Error) {
        console.error('Login Failed:', error.message);
      } else {
        console.error('Login Failed:', error);
      }
    }
	};

	const handleSignup = () => {
    navigation.navigate('CreateAccount');
  };

  return (
		<View style={styles.container}>
      <View style={styles.logo}>
        <View style={[styles.logoImg, styles.logo1]}>
          <Image source={require('../../assets/login/a1.png')} style={styles.logoImage} />
        </View>
        <View style={[styles.logoImg, styles.logo2]}>
          <Image source={require('../../assets/login/a2.png')} style={styles.logoImage} />
        </View>
        <View style={[styles.logoImg, styles.logo3]}>
          <Image source={require('../../assets/login/a3.png')} style={styles.logoImage} />
        </View>
      </View>
      <Text style={styles.title}>
        Unlock access to all charging stations with just a free account!
      </Text>
      <View style={styles.btns}>
        <TouchableOpacity style={styles.btn}>
          <Image source={require('../../assets/login/a4.png')} style={styles.btnIcon} />
          <Text style={styles.btnText}>Sign In With Apple ID</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
					<Image source={require('../../assets/login/a5.png')} style={styles.btnIcon} />
          <Text style={styles.btnText}>Sign In With Microsoft Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
					<Image source={require('../../assets/login/a6.png')} style={styles.btnIcon} />
          <Text style={styles.btnText}>Sign In With Google</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.newHere}>New here? Sign up now</Text>
			<TouchableOpacity onPress={handleSignup} style={styles.signupBtn}>
        <Text style={styles.signup}>Sign up!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
		backgroundColor: 'rgb(207, 249, 255)',
  },
  logo: {
    height: 350,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  logoImg: {
    width: 100,
    height: 100,
    position: 'absolute',
    overflow: 'hidden',
  },
  logo1: {
    left: '50%',
    top: 100,
    marginLeft: -50,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#000',
  },
  logo2: {
    left: '15%',
    top: 180,
    borderRadius: 50,
  },
  logo3: {
    right: '15%',
    top: 180,
    borderRadius: 50,
  },
  logoImage: {
    width: '100%',
    height: '100%',
  },
  title: {
    color: '#2293B7',
    fontSize: 25,
    fontWeight: '600',
    marginVertical: 20,
    textAlign: 'center',
  },
  btns: {
    marginTop: 50,
    width: '100%',
    alignItems: 'center',
  },
  btn: {
		flexDirection: 'row',
		justifyContent: 'center',
    alignItems: 'center',
		backgroundColor: '#2293B7',
    marginBottom: 15,
    padding: 5,
    borderRadius: 30,
    width: '80%',
  },
  btnIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
	},
	btnText: {
		textAlign: 'center',
		lineHeight: 50,
		fontWeight: '600',
		color: '#fff',
	},
  newHere: {
    fontSize: 14,
    color: '#000',
    marginTop: 20,
  },
  signup: {
    color: '#fff',
    fontSize: 16,
  },
  signupBtn: {
		marginTop: 10,
		flexDirection: 'row',
		justifyContent: 'center',
    alignItems: 'center',
		backgroundColor: '#2293B7',
		
    marginBottom: 15,
    padding: 10,
    borderRadius: 30,
    width: '80%',
  },
});

export default LoginScreen;
