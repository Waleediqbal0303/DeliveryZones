
import * as React from "react";
import {
  Alert,
  BackHandler,
  Dimensions,
  I18nManager,
  Linking,
  Platform,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  Image
} from "react-native";
import styles from './styles';
import { StackActions } from "@react-navigation/native";


const  Splash =(props)=> {

    const [imgUrl, setImgUrl] = React.useState({uri:'https://www.deliveryzone.ae/wp-content/uploads/2020/04/Untitled-1.png'})
    return(
        <View style={styles.container}>
            <StatusBar hidden={true} />
            <TouchableOpacity style={styles.touchable}>
                <View>
                    <Image  source={imgUrl} style={styles.logo} resizeMode={'contain'}/>
                </View>
            </TouchableOpacity>
        </View>
    )
        
}

export default Splash;
