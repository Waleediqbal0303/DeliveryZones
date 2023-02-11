import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, createRef, useEffect} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Text,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
  BackHandler,
  FlatList
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus'

import MainLoader from '../../../components/Loader/MainLoader/MainLoader';
import ApisCalls from "../../../services/apisCall/apisCall";
import styles from './styles';
import { faBucket, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const ListDrivers = (props) => {

  const [loading, setLoading] = useState(false);
  const [listData, setListData] = useState(false);

  useEffect(()=>{
      props?.navigation?.addListener('focus', () => {
        getDrivers()
      })
      getDrivers()
  }, []);

  const getDrivers=async()=>{
    setLoading(true)
      let response = await new ApisCalls().get_withToken('drivers/');
    if(response?.data?.length>0){
      setListData(response?.data.reverse())
    }
    setLoading(false)
  }

  

  const deleteDriver=async(id)=>{
    setLoading(true)
    let response = await new ApisCalls().delete_withToken('drivers/'+id);
    if(response?.status==200){
      getDrivers()
    }
    else{
      alert("Please try again")
      setLoading(false)
    }
  }


  const renderItem = (data) => {

    return (
      <View
        style={{ flex: 1 }}
        onPress={() => {
        
        }}
      >
        <View style={styles.boxView}>
          <View style={{flexDirection:"row"}}>
            <View style={{}}>
              <Text style={[styles.headLabel]} numberOfLines={2}>Name: </Text>
              <Text style={[styles.headLabel]} numberOfLines={2}>Phone: </Text>
              <Text style={[styles.headLabel]} numberOfLines={2}>Country: </Text>
            </View>
            <View>
              <Text style={[styles.nameLabel]} numberOfLines={2}>{data?.item?.name}</Text>
              <Text style={[styles.nameLabel]} numberOfLines={2}>{data?.item?.phone}</Text>
              <Text style={[styles.nameLabel]} numberOfLines={2}>{data?.item?.country}</Text>
            </View>
            <View style={{flex:1, justifyContent:"flex-end", alignItems:"center", flexDirection:"row"}}>
              <TouchableOpacity style={styles.addBtn} 
                onPress={()=>{
                  props.navigation.navigate('UpdateDriver', {id:data?.item?.id})
                  }}>
                <FontAwesomeIcon icon={ faEdit } size={20} color={'grey'}/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.addBtn} 
                onPress={()=>{
                  deleteDriver(data?.item?.id)
                }}>
                <FontAwesomeIcon icon={ faTrash } size={20} color={'red'}/>
              </TouchableOpacity>

            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <MainLoader loading={loading} />
      <TouchableOpacity style={styles.addBtn} 
        onPress={()=>{
          props.navigation.navigate('CreateDriver')
          }}>
        <Text style={styles.addText}>Add</Text>
        <FontAwesomeIcon icon={ faPlus } size={20} color={'grey'}/>
      </TouchableOpacity>
      {
        listData.length > 0 ?
          <FlatList
            onEndReached={({ distanceFromEnd }) => {
              if (distanceFromEnd < 0) return;
              // this.loadMore();
            }}
            data={listData}
            onEndReachedThreshold={0.5}
            scrollEventThrottle={400}
            keyExtractor={(item, index) => `${index + 1}`}
            renderItem={renderItem}
            style={{ height: "90%" }}
          />
          :
          null
          
      }
    </View>
  );

};
export default ListDrivers;