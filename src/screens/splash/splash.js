
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

    const [imgUrl, setImgUrl] = React.useState(require('../../assets/images/preview.jpg'))
    
    React.useEffect(()=>{
        setTimeout(()=>{
            props.navigation.dispatch(
                StackActions.replace("Browse")
            );
        }, 2000)
    })
    
    return(
        <View style={styles.container}>
            <StatusBar hidden={true} />
            <TouchableOpacity style={styles.touchable}>
                <View>
                    <Image  source={imgUrl} style={styles.logo} />
                </View>
            </TouchableOpacity>
        </View>
    )
        
}

export default Splash;
