// App.js


import React, { Component,useState } from 'react';
import { TextInput, Text, Button, Alert, View, StyleSheet, TouchableHighlight } from 'react-native';
import * as yup from 'yup'
import { Formik } from 'formik'
import Snackbar from 'react-native-snackbar-component'


const App =() =>  {
  const [snackIsVisible1, setSnackIsVisible1] = useState(true);
  const [snackIsVisible2, setSnackIsVisible2] = useState(true);
  const [snackIsVisible3, setSnackIsVisible3] = useState(true);
  const [snackIsVisible4, setSnackIsVisible4] = useState(true);

    return (
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          confirmPassword: ''
        }}
        onSubmit={values => Alert.alert(JSON.stringify(values))}
        validationSchema={yup.object().shape({
          name: yup
            .string()
            .label('Password')
            .required('Name Required')
            .min(4, 'Seems a bit short...')
            .max(15, 'We prefer insecure system, try a shorter password.')
            .matches(/^[A-Za-z ]*$/, 'Please enter valid name'),
          email: yup
            .string()
            .email('Invalid email')
            .required('Email Required'),
          password: yup
            .string()
            .label('Password')
            .required('Password Required')
            .min(8, 'Seems a bit short...')
            .max(15, 'We prefer insecure system, try a shorter password.')
            .matches(
              /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
              "Password must contain at least 8 characters, one uppercase, one number and one special case character"
            ),
          confirmPassword: yup
            .string()
            .required()
            .oneOf([yup.ref("password"), null], "Passwords must match"),
        })}
      >
        {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
          <View style={styles.formContainer}>
            <TextInput
              value={values.name}
              style={styles.inputStyle}
              onChangeText={handleChange('name')}
              onBlur={() => setFieldTouched('name')}
              placeholder="Name"
            />
            
            {touched.name && errors.name &&
              <Snackbar visible={snackIsVisible1} textMessage={errors.name} actionHandler={() => {
                //function called while clicking on action Text
              setSnackIsVisible1(false);
              }}
              actionText="Close"
              />
            }
            
            <TextInput
              value={values.email}
              style={styles.inputStyle}
              onChangeText={handleChange('email')}
              onBlur={() => setFieldTouched('email')}
              placeholder="E-mail"
            />
            {touched.email && errors.email &&
              <Snackbar visible={snackIsVisible2} textMessage={errors.email} actionHandler={() => {
                //function called while clicking on action Text
                setSnackIsVisible2(false);
              }}
                actionText="Close"
              />
            }
            <TextInput
              value={values.password}
              style={styles.inputStyle}
              onChangeText={handleChange('password')}
              placeholder="Password"
              onBlur={() => setFieldTouched('password')}
              secureTextEntry={true}
            />
            {touched.password && errors.password &&
              <Snackbar visible={snackIsVisible3} textMessage={errors.password} actionHandler={() => {
                //function called while clicking on action Text
                setSnackIsVisible3(false);
              }}
                actionText="Close"
              />
            }

            <TextInput
              value={values.confirmPassword}
              style={styles.inputStyle}
              onChangeText={handleChange('confirmPassword')}
              placeholder="Confirm Password"
              onBlur={() => setFieldTouched('confirmPassword')}
              secureTextEntry={true}
            />
            {touched.confirmPassword && errors.confirmPassword &&
              <Snackbar visible={snackIsVisible4} textMessage={errors.confirmPassword} actionHandler={() => {
                //function called while clicking on action Text
                setSnackIsVisible4(false);
              }}
                actionText="Close"
              />
            }

            <Button
              color="#3740FE"
              title='Submit'
              disabled={!isValid}
              onPress={handleSubmit}
            />
          </View>
        )}
      </Formik>
    );
  }


const styles = StyleSheet.create({
  formContainer: {
    padding: 50
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: '#4e4e4e',
    padding: 12,
    marginBottom: 5,
  }
});

console.disableYellowBox = true;
export default App;
