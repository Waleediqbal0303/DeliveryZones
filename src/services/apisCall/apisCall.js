import axios, * as others from 'axios';
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default class ApisCalls {
  

  apiError() {
    Alert.alert(
      "Action Failed",
      "Something went wrong. Check your internet connection try again later!.",
      [{ text: "OK", onPress: () => { } }]
    );
  }


  // GET Request
  async get_withToken(url) {
    try {
      let API_TOKEN = await AsyncStorage.getItem("token");
      url = "https://apptest.deliveryzone.ae/api/"+url;
      return await axios.get(url, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${API_TOKEN}`,
        },
      });
    } catch (error) {
        return error;
    }

  }

  async get_withoutToken(url) {
    url = "https://apptest.deliveryzone.ae/api/"+url;
    try{
      let res = await axios.get(url, {
        headers: {
          Accept: "application/json",
        },
      });
      return res;
    }
    catch(e){
      return e;
    }
    
  }

  // POST Request
  async post_withToken(url, data) {
    url = "https://apptest.deliveryzone.ae/api/"+url;
    try {
      let API_TOKEN = await AsyncStorage.getItem("token");
      return await axios.post(url, data, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${API_TOKEN}`,
        },
      });
    } 
    catch (error) {
        return error;
    }
  }

  async post_withoutToken(url, data) {
    url = "https://apptest.deliveryzone.ae/api/"+url;
    try {
        let res = await axios.post(url, data, {
          headers: {
            Accept: "application/json",
          },
        })
        return res;
    } 
      catch (e) { 
        return e;
    }
  }


  async put_withToken(url, data) {
    url = "https://apptest.deliveryzone.ae/api/"+url;
    try {
      let API_TOKEN = await AsyncStorage.getItem("token");
      return await axios.put(url, data, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${API_TOKEN}`,
        },
      });
    } 
    catch (error) {
        return error;
    }
  }

  async delete_withToken(url) {
    url = "https://apptest.deliveryzone.ae/api/"+url;
    try {
      let API_TOKEN = await AsyncStorage.getItem("token");
      let response = await axios.delete(url, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${API_TOKEN}`,
        },
      });
      return response;
    } 
    catch (e) {
        return e;
    }
  }


  async getPassengers(url) {
    url = "https://api.instantwebtools.net/v1/passenger"+url;
    try{
      let res = await axios.get(url, {
        headers: {
          Accept: "application/json",
        },
      });
      return res;
    }
    catch(e){
      return e;
    }
    
  }

}
