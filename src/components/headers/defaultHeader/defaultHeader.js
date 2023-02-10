import React, { memo } from "react";
import {
  Text,
  StyleSheet,
  View,
  I18nManager,
  TouchableOpacity,
} from "react-native";

import styles from './styles';

const DefaultHeader = (props) => {
  
    return(
        <View style={{ ...styles.container, ...props.containerStyle }}>
            <View style={{flex:1, flexDirection: "row",justifyContent:'center',alignItems:'center'}}>
            
                    <Text style={{ ...styles.title, ...props.titleStyle }}>
                        {props?.title}
                    </Text>
        
            </View>
        </View>
    )
    
   

};

export {DefaultHeader};
