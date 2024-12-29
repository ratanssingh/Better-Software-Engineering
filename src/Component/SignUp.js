import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ImageBackground } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

const SignUp = ({ navigation }) => {
  const [passwordStrength, setPasswordStrength] = useState('');

  const checkPasswordStrength = (password) => {
    if (password.length < 6) return 'Weak';
    if (password.length < 10) return 'Medium';
    return 'Strong';
  };

  const handleSignUp = (values) => {
    Alert.alert('Sign Up Successful');
    navigation.navigate('Login');
  };

  return (
    <ImageBackground
      source={require('F:/download file from google chrome/Notes/Better Software Engineering/LoginSignUp/assets/signupback.jpg')}
      style={styles.background}
    > 
      <Formik
        initialValues={{ username: '', lastname: '', email: '', password: '', confirmPassword: '' }}
        validationSchema={Yup.object({
          username: Yup.string().required('Username is required'),
          lastname: Yup.string().required('Last name is required'),
          email: Yup.string().email('Invalid email').required('Required'),
          password: Yup.string().min(6, 'Minimum 6 characters').required('Required'),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required')
        })}
        onSubmit={handleSignUp}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View style={styles.container}>
            <Text style={styles.title}>Sign Up</Text>

            <TextInput
              placeholder="Username"
              onChangeText={handleChange('username')}
              onBlur={handleBlur('username')}
              value={values.username}
              style={styles.input}
              placeholderTextColor="#ddd"
            />
            {touched.username && errors.username && <Text style={styles.error}>{errors.username}</Text>}

            <TextInput
              placeholder="Last Name"
              onChangeText={handleChange('lastname')}
              onBlur={handleBlur('lastname')}
              value={values.lastname}
              style={styles.input}
              placeholderTextColor="#ddd"
            />
            {touched.lastname && errors.lastname && <Text style={styles.error}>{errors.lastname}</Text>}

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
              onChangeText={(text) => {
                handleChange('password')(text);
                setPasswordStrength(checkPasswordStrength(text));
              }}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry
              style={styles.input}
              placeholderTextColor="#ddd"
            />
            {touched.password && errors.password && <Text style={styles.error}>{errors.password}</Text>}

            <TextInput
              placeholder="Confirm Password"
              onChangeText={handleChange('confirmPassword')}
              onBlur={handleBlur('confirmPassword')}
              value={values.confirmPassword}
              secureTextEntry
              style={styles.input}
              placeholderTextColor="#ddd"
            />
            {touched.confirmPassword && errors.confirmPassword && <Text style={styles.error}>{errors.confirmPassword}</Text>}

            <Text style={styles.passwordStrength}>
              Password Strength: {passwordStrength}
            </Text>

            <TouchableOpacity style={styles.signUpButton} onPress={() => handleSubmit()}>
              <Text style={styles.buttonText}>Sign Up</Text>
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
    resizeMode: 'stretch',  
    width: '100%',          
    height: '100%',         
    justifyContent: 'center',
    backgroundColor:'#000080'
  },
  container: {
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',  
    borderRadius: 10,
    margin: 20
  },
  tagline: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 30,
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
    borderColor: '#ccc',
    color: 'white'
  },
  error: {
    color: '#ff4c4c',
    marginBottom: 10
  },
  passwordStrength: {
    color: 'white',
    marginBottom: 20,
    textAlign: 'center'
  },
  signUpButton: {
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
  }
});

export default SignUp;
