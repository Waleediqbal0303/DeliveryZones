import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, createRef, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  RefreshControl
} from 'react-native';

import MainLoader from '../../../components/Loader/MainLoader/MainLoader';
import ApisCalls from "../../../services/apisCall/apisCall";
import styles from './styles';

const ListPassengers = (props) => {

  const [loading, setLoading] = useState(false);
  const [listData, setListData] = useState([]);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);

  const [loadingmore, setLoadingMore]=useState(false);
  const [lastPost, setLastPost]=useState(false);
  const [refreshing, setRefreshing]=useState(false);
  
  useEffect(()=>{
      getDrivers()
  }, []);

  const getDrivers=async()=>{
    setLoading(true)
    let response = await new ApisCalls().getPassengers('?page=1&size='+size);
    if(response?.data?.data?.length>0){
      setListData(response?.data?.data)
      setPage(2)
    }
    setLoading(false)
  }


  const onEndReachFunc = async() => {
    if (!lastPost && !loadingmore) {
      setLoading(true)
      let response = await new ApisCalls().getPassengers('?page='+page+"&size="+size);
      console.log("response", response);
      if(response?.data?.data?.length>0){
        setListData([...listData, ...response?.data?.data])
        setPage(page+1)
      }
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
              <Text style={[styles.headLabel]} numberOfLines={2}>Passenger Name: </Text>
              {data?.item?.airline?.length>0&&
              <>
                <Text style={[styles.headLabel]} numberOfLines={2}>Airline Name: </Text>
                <Text style={[styles.headLabel]} numberOfLines={2}>Country: </Text>
              </>
              }
            </View>
            <View>
              <Text style={[styles.nameLabel]} numberOfLines={2}>{data?.item?.name}</Text>
              {data?.item?.airline?.length>0&&
              <>
                <Text style={[styles.nameLabel]} numberOfLines={2}>{data?.item?.airline[0]?.name}</Text>
                <View style={{flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
                  <Text style={[styles.nameLabel]} numberOfLines={2}>{data?.item?.airline[0]?.country}</Text>
                  <Image source={{uri:data?.item?.airline[0]?.logo}} style={styles.img}/>
                </View>
              </>
              }
              
              
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <MainLoader loading={loading} />
      
      {
        listData.length > 0 ?
          <FlatList
            data={listData}
            renderItem={renderItem}
            style={{ height: "90%" }}
            ListFooterComponent={() => {
              return (
                <View style={{ marginTop: 20 }} >
                  {
                    !lastPost && loadingmore && !loading&& <ActivityIndicator size={'small'} color={'black'} />
                  }
                </View>

              )
            }}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={async () => {
                  getDrivers()
                }}
              />
            }
            refreshing={refreshing}
            keyExtractor={(item, index) => `${index + 1}`}
            onEndReachedThreshold={0.01}
            scrollEventThrottle={150}
            onEndReached={onEndReachFunc}
          />
          :
          null
          
      }
    </View>
  );

};
export default ListPassengers;