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
  Platform
} from 'react-native';

import MainLoader from '../../../components/Loader/MainLoader/MainLoader';
import DateTimePicker from "@react-native-community/datetimepicker";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus'

import DateTimePickerModal from "react-native-modal-datetime-picker";
import ApisCalls from "../../../services/apisCall/apisCall";
import styles from './styles';
import moment from "moment";
import { faAngleDown, faAngleUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faDown } from '@fortawesome/pro-duotone-svg-icons';
import { faArrowAltDown } from '@fortawesome/sharp-solid-svg-icons';

const UpdateDriver = (props) => {

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [expiry, setExpiry] = useState('');
  const [age, setAge] = useState('');
  const [licType, setLicType] = useState(null);
  const [showLicDrop, setShowLicDrop] = useState(false);
  const [listLicenses, setListLicenses] = useState([{id:1, name:'Two Wheeler'}, {id:2, name:'Four Wheeler'}]);

  const [showDateModel, setShowDateModel]=useState(false);
  const [modelType, setModelType]=useState("");
  const [loading, setLoading] = useState(false);
  const [errorText, setErrortext] = useState(false);
  const [errorType, setErrorType] = useState("");
  const nameInputRef = createRef();
  const phoneInputRef = createRef();
  const ageInputRef = createRef();

  const handleSubmitButton = async() => {
    let drId = props?.route?.params?.id;
    setErrortext('');
    if (name=='') {
      setErrorType('name')
      setErrortext('Please enter name')
      return false;
    }
    if (phone=='') {
        setErrorType('phone')
        setErrortext('Please enter phone number')
        return false;
    }
    if (expiry=='') {
      setErrorType('expiry')
      setErrortext('Please select expiry date')
      return false;
    }
    if (age=='') {
      setErrorType('age')
      setErrortext('Please enter age in digits')
      return false;
    }
    if (licType==null) {
      setErrorType('licType')
      setErrortext('Please select license type')
      return false;
    }
    setLoading(true);
    var dataToSend = {
      name: name,
      phone:phone,
      license_type: licType?.name,
      age:age,
      license_expiry:expiry
    };
    let response = await new ApisCalls().put_withToken("drivers/"+drId, dataToSend);
    if(response?.status==200){
      props?.navigation.goBack();
    }
    else{
        alert("Encounterd an error, please try again later")
    }
    setLoading(false);
    
  };


  const setDob = (event, selectedDate) => {
    let date = moment(selectedDate).format("YYYY-MM-DD");
    setExpiry(date)
    setShowDateModel(false)
  };

  useEffect(()=>{
    getDriverData()
  }, [props?.navigation]);

  const getDriverData=async()=>{
    if(props?.route?.params!==null&&props.route?.params!==undefined){
      let id = props?.route?.params?.id;
      setLoading(true)
      let response = await new ApisCalls().get_withToken('drivers/'+id);
      if(response?.status==200){
        setName(response?.data?.name);
        setPhone(response?.data?.phone);
        setExpiry(response?.data?.license_expiry);
        setAge(response?.data?.age?.toString());
        setLicType(response?.data?.license_type=="Two Wheeler"?{id:1, name:'Two Wheeler'}:{id:2, name:'Four Wheeler'})
      }
      setLoading(false)
    }
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
    
        <KeyboardAvoidingView enabled>
          
          <View style={[styles.SectionStyle, {marginTop:20}]}>
            <TextInput
              value={name}
              style={styles.inputStyle}
              onChangeText={(name) => 
                {
                    setName(name)
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
              keyboardType="email-address"
              ref={nameInputRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                phoneInputRef.current &&
                phoneInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
            
          </View>
          {(errorText != ''&& errorType=="name") ? (
                <Text style={styles.errorTextStyle}>
                {errorText}
                </Text>
            ) : null} 

          <View style={[styles.SectionStyle]}>
            <TextInput
              value={phone}
              style={styles.inputStyle}
              onChangeText={(phone) => 
                {
                    setPhone(phone)
                    setErrorType('')
                    setErrortext('')
                }}
                onFocus={()=>{
                    setErrorType('')
                    setErrortext('')
                }}
              underlineColorAndroid="#f000"
              placeholder="Enter Phone"
              placeholderTextColor="grey"
              keyboardType="phone-pad"
              ref={phoneInputRef}
              returnKeyType="next"
              onSubmitEditing={() =>{
                ageInputRef.current &&
                ageInputRef.current.focus()
              }}
              blurOnSubmit={false}
            />
            
          </View>

          {(errorText != ''&& errorType=="phone") ? (
                <Text style={styles.errorTextStyle}>
                {errorText}
                </Text>
            ) : null} 

            <View style={[styles.SectionStyle]}>
              <TextInput
                value={age}
                style={styles.inputStyle}
                onChangeText={(age) => 
                  {
                      setAge(age)
                      setErrorType('')
                      setErrortext('')
                  }}
                  onFocus={()=>{
                      setErrorType('')
                      setErrortext('')
                  }}
                underlineColorAndroid="#f000"
                placeholder="Enter age in digits"
                placeholderTextColor="grey"
                keyboardType="numeric"
                ref={ageInputRef}
                returnKeyType="next"
                onSubmitEditing={() =>{
                  // phoneInputRef.current &&
                  // passwordInputRef.current.focus()
                }}
                blurOnSubmit={false}
              />
            
            </View>

          {(errorText != ''&& errorType=="age") ? (
                <Text style={styles.errorTextStyle}>
                {errorText}
                </Text>
            ) : null} 
          <View style={[styles.SectionStyle]}>
            <TouchableOpacity style={[styles.inputStyle, {justifyContent:"center"}]} onPress={()=>{
              setShowDateModel(true)
              setErrorType('')
              setErrortext('')
            }}>
              <Text style={{color:expiry!==""?'black':"grey", fontSize:14}}>{expiry!==""?expiry:"Expiry"}</Text>
            </TouchableOpacity>
          </View>
          {(errorText != ''&& errorType=="expiry") ? (
                <Text style={styles.errorTextStyle}>
                {errorText}
                </Text>
            ) : null}
         
          <View style={[styles.SectionStyle]}>
           
            <TouchableOpacity style={[styles.inputStyle, {justifyContent:"center"}]} onPress={()=>{
              if(showLicDrop){
                setShowLicDrop(false)
              }
              else{
                setShowLicDrop(true)
                setLicType(null)
              }
              setErrorType('')
              setErrortext('')
              }}>
                <View style={styles.dropAngle}>
                  <Text style={{color:licType!==null?'black':"grey", fontSize:14}}>{licType!==null?licType?.name:"License Type"}</Text>
                  <FontAwesomeIcon icon={showLicDrop?faAngleUp:faAngleDown} size={20} color={'grey'}/>
                </View>
            </TouchableOpacity>
         </View>
         {showLicDrop&&
          <View style={styles.dropView}>
            {listLicenses?.map((item)=>{
              return(
                <TouchableOpacity 
                  style={styles.touchableList} 
                  onPress={()=>{setLicType(item), setShowLicDrop(false)}}>
                  <Text style={styles.licTxt}>{item?.name}</Text>
                </TouchableOpacity>
              )
            })}
         </View>
         }
         {(errorText != ''&& errorType=="licType") ? (
              <Text style={styles.errorTextStyle}>
              {errorText}
              </Text>
          ) : null}
        </KeyboardAvoidingView>
      </ScrollView>
      <View style={styles.btnView}>
        <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={()=>handleSubmitButton()}>
            <Text style={styles.buttonTextStyle}>Submit</Text>
        </TouchableOpacity>
      </View>

      {(showDateModel && Platform.OS === 'android') && (
        <DateTimePicker
          testID="dateTimePicker"
          value={new Date()}
          mode={"date"}
          display={"default"}
          style={{ flex: 1 }}
          onChange={setDob}
        />
      )}
    </View>
  );

};
export default UpdateDriver;