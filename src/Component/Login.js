import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ImageBackground } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ navigation }) => {
  const [savedEmail, setSavedEmail] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    const loadSavedEmail = async () => {
      const email = await AsyncStorage.getItem('rememberedEmail');
      if (email) {
        setSavedEmail(email);
        setRememberMe(true);
      }
    };
    loadSavedEmail();
  }, []);

  const handleLogin = async (values) => {
    if (values.rememberMe) {
      await AsyncStorage.setItem('rememberedEmail', values.email);
    } else {
      await AsyncStorage.removeItem('rememberedEmail');
    }
    Alert.alert('Login Successful');
  };

  return (
    <ImageBackground
      source={require('F:/download file from google chrome/Notes/Better Software Engineering/LoginSignUp/assets/loginback.jpg')}  // Add your image path here
      style={styles.background}
    >
      <Formik
        initialValues={{ email: savedEmail, password: '', rememberMe: rememberMe }}
        enableReinitialize={true}
        validationSchema={Yup.object({
          email: Yup.string().email('Invalid email').required('Required'),
          password: Yup.string().min(6, 'Minimum 6 characters').required('Required')
        })}
        onSubmit={handleLogin}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched, setFieldValue }) => (
          <View style={styles.container}>
            <Text style={styles.title}>Login</Text>

            <TextInput
              placeholder="Email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              style={styles.input}
              placeholderTextColor="#ddd"
            />
            {touched.email && errors.email && <Text style={styles.error}>{errors.email}</Text>}

            <TextInput
              placeholder="Password"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry
              style={styles.input}
              placeholderTextColor="#ddd"
            />
            {touched.password && errors.password && <Text style={styles.error}>{errors.password}</Text>}

            <View style={styles.rememberMeContainer}>
              <TouchableOpacity
                onPress={() => {
                  setRememberMe(!rememberMe);
                  setFieldValue('rememberMe', !rememberMe);
                }}
              >
                <View style={styles.checkbox}>
                  {values.rememberMe && <Text style={styles.checkmark}>✓</Text>}
                </View>
              </TouchableOpacity>
              <Text style={styles.rememberMeText}>Remember Me</Text>
            </View>

            {/* Custom Login Button */}
            <TouchableOpacity style={styles.loginButton} onPress={() => handleSubmit()}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            {/* Navigate to SignUp Button */}
            <TouchableOpacity style={styles.signupButton} onPress={() => navigation.navigate('SignUp')}>
              <Text style={styles.signupText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  },
  container: {
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 10,
    margin: 20
  },
  title: {
    fontSize: 32,
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  input: {
    borderWidth: 1,
    marginBottom: 12,
    padding: 10,
    borderRadius: 8,
    borderColor: '#ddd',
    color: 'white'
  },
  error: {
    color: '#ff4c4c',
    marginBottom: 10
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'center'
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#1E90FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8
  },
  checkmark: {
    color: '#1E90FF',
    fontSize: 18
  },
  rememberMeText: {
    color: 'white',
    fontSize: 16
  },
  loginButton: {
    backgroundColor: '#1E90FF',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
    width: '50%',
    alignSelf: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },
  signupButton: {
    backgroundColor: '#1E90FF',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
    width: '50%',
    alignSelf: 'center'
  },
  signupText: {
    color: 'white',
    fontSize: 16
  }
});

export default Login;
