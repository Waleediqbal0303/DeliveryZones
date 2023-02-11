import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, createRef, useEffect} from 'react';
import { Provider, useDispatch, useSelector } from "react-redux";
import {SET_SIGNIN} from "../../redux/declarationTypes/authDecleration"
import {
  TextInput,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import MainLoader from '../../components/Loader/MainLoader/MainLoader';
import ApisCalls from "../../services/apisCall/apisCall";
import styles from './styles';

const SignIn = (props) => {

  const [userEmail, setUserEmail] = useState('wal@gmail.com');
  const [userPassword, setUserPassword] = useState('123');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
  const [errorType, setErrorType] = useState('');

  const emailInputRef = createRef();
  const passwordInputRef = createRef();
  const Dispatch = useDispatch()

  

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
    setLoading(true);
    var dataToSend = {
      email: userEmail,
      password: userPassword,
    };
    let response = await new ApisCalls().post_withoutToken("login", dataToSend);
    if(response?.status==201){
        await AsyncStorage.setItem("token", response?.data?.token);
        await AsyncStorage.setItem("userLoggedIn", "yes");
        Dispatch({ type: SET_SIGNIN })
    }
    else{
        alert("Encounterd an error, please try again later")
    }
    setLoading(false);
  };

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
            style={styles.topImg}
            source={{
            uri: 'https://www.deliveryzone.ae/wp-content/uploads/2020/04/Untitled-1.png',
            }}
        />
        </View>
        <KeyboardAvoidingView enabled>
          
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
        
        </KeyboardAvoidingView>
      </ScrollView>
      <View style={styles.btnView}>
            <TouchableOpacity
                style={styles.buttonStyle}
                activeOpacity={0.5}
                onPress={handleSubmitButton}>
                <Text style={styles.buttonTextStyle}>SignIn</Text>
            </TouchableOpacity>
          </View>
    </View>
  );

};
export default SignIn;

