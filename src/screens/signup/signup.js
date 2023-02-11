import React, {useState, createRef, useEffect} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import MainLoader from '../../components/Loader/MainLoader/MainLoader';
import ApisCalls from "../../services/apisCall/apisCall";
import styles from './styles';

const SignUp = (props) => {
  const [userName, setUserName] = useState('wal');
  const [userEmail, setUserEmail] = useState('wal@gmail.com');
  const [userPassword, setUserPassword] = useState('123');
  const [rePassword, setRePassword] = useState('123');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
  const [errorType, setErrorType] = useState('');
  const [
    isRegistraionSuccess,
    setIsRegistraionSuccess
  ] = useState(false);

  const emailInputRef = createRef();
  const rePasswordRef = createRef();
  const passwordInputRef = createRef();

  

  useEffect(()=>{
    if(userPassword!==rePassword){
        setErrorType('rePassword')
        setErrortext('Passwords are not matching kindly delete spaces or reEnter')
    }
    else{
        setErrorType('')
        setErrortext('')
    }
  }, [userPassword, rePassword])

  useEffect(()=>{
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (userEmail!==""&&reg.test(userEmail)== false) {
        setErrorType('email')
        setErrortext('Invalid email')
    }
    else{
        if(errorType=="email"){
            setErrorType('')
            setErrortext('')
        }
    }
  }, [userEmail])
  
  const handleSubmitButton = async() => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    setErrortext('');
    if (!userName) {
        setErrorType('name')
        setErrortext('Please fill Name')
      return;
    }
    if (!userEmail) {
      setErrorType('email')
      setErrortext('Please fill Email')
      return;
    }
    if (reg.test(userEmail) === false) {
        setErrorType('email')
        setErrortext('Invalid email')
        return;
    }
    if (!userPassword) {
      setErrorType('password')
      setErrortext('Please fill Password')
      return;
    }
    if (!rePassword) {
        setErrorType('rePassword')
        setErrortext('Please fill rePassword')
        return;
    }
    if (userPassword != rePassword) {
        setErrorType('rePassword')
        setErrortext('Passwords are not matching kindly delete spaces or reEnter')
        return;
    }
    //Show Loader
    setLoading(true);
    var dataToSend = {
      name: userName,
      email: userEmail,
      password: userPassword,
      password_confirmation: rePassword,
    };
   
    let response = await new ApisCalls().post_withoutToken("register", dataToSend);
    if(response?.status==201){
        setIsRegistraionSuccess(true)
    }
    else{
        alert("Encounterd an error, please try again later")
    }
    
    setLoading(false);
  };
  
  
  if (isRegistraionSuccess) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#307ecc',
          justifyContent: 'center',
        }}>
        <Image
          source={require('../../../src/assets/images/success.png')}
          style={styles.topImg}
        />
        <Text style={styles.successTextStyle}>
          Registration Successful
        </Text>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={() => {
            setIsRegistraionSuccess(false)
            props.navigation.navigate('SignIn')
            }}>
          <Text style={styles.buttonTextStyle}>Login Now</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={{flex: 1}}>
      <MainLoader loading={loading} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <View style={{alignItems: 'center'}}>
        <Image
            style={styles.secTopImg}
            source={{
            uri: 'https://www.deliveryzone.ae/wp-content/uploads/2020/04/Untitled-1.png',
            }}
        />
        </View>
        <KeyboardAvoidingView enabled>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(UserName) => { 
                setUserName(UserName)
                setErrorType('')
                setErrortext('')
                }}
                onFocus={()=>{
                    setErrorType('')
                    setErrortext('')
                }}
              underlineColorAndroid="#f000"
              placeholder="Enter Name"
              placeholderTextColor="grey"
              autoCapitalize="sentences"
              returnKeyType="next"
              onSubmitEditing={() =>
                emailInputRef.current && emailInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
            
          </View>
          {(errortext != ''&&errorType=="name") ? (
                <Text style={styles.errorTextStyle}>
                {errortext}
                </Text>
            ) : null}
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(UserEmail) => 
                {
                    setUserEmail(UserEmail)
                    setErrorType('')
                    setErrortext('')
                }}
                onFocus={()=>{
                    setErrorType('')
                    setErrortext('')
                }}
              underlineColorAndroid="#f000"
              placeholder="Enter Email"
              placeholderTextColor="grey"
              keyboardType="email-address"
              ref={emailInputRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                passwordInputRef.current &&
                passwordInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
            
          </View>
          {(errortext != ''&&errorType=="email") ? (
                <Text style={styles.errorTextStyle}>
                {errortext}
                </Text>
            ) : null}
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(UserPassword) =>{
                setUserPassword(UserPassword)
                setErrorType('')
                setErrortext('')
              }}
              onFocus={()=>{
                setErrorType('')
                setErrortext('')
              }}
              underlineColorAndroid="#f000"
              placeholder="Enter Password"
              placeholderTextColor="grey"
              ref={passwordInputRef}
              returnKeyType="next"
              secureTextEntry={true}
              onSubmitEditing={() =>
                rePasswordRef.current &&
                rePasswordRef.current.focus()
              }
              blurOnSubmit={false}
            />
            
          </View>
          {(errortext != ''&&errorType=="password") ? (
                <Text style={styles.errorTextStyle}>
                {errortext}
                </Text>
            ) : null}
        
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(rePassword) =>{
                setRePassword(rePassword)
                setErrorType('')
                setErrortext('')
              }}
              underlineColorAndroid="#f000"
              placeholder="Re Enter Password"
              placeholderTextColor="grey"
              autoCapitalize="sentences"
              ref={rePasswordRef}
              returnKeyType="next"
              onSubmitEditing={Keyboard.dismiss}
              blurOnSubmit={false}
              secureTextEntry={true}
              onFocus={()=>{
                setErrorType('')
                setErrortext('')
            }}
            />
            
          </View>
          {(errortext != ''&&errorType=="rePassword") ? (
                <Text style={styles.errorTextStyle} numberOfLines={2}>
                {errortext}
                </Text>
            ) : null}
          <TouchableOpacity
            style={[styles.buttonStyle, {marginTop:80, marginBottom:10}]}
            activeOpacity={0.5}
            onPress={handleSubmitButton}>
            <Text style={styles.buttonTextStyle}>REGISTER</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={()=>{props.navigation.navigate('SignIn')}}>
            <Text style={styles.buttonTextStyle}>LOGIN</Text>
        </TouchableOpacity>
          
        </KeyboardAvoidingView>
      </ScrollView>
      {/* <View style={styles.btnView}>
        
      </View> */}
    </View>
  );

};
export default SignUp;

