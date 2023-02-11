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
        <>
            <StatusBar hidden={true} />
            <View style={{ ...styles.container, ...props.containerStyle }}>
                <View style={styles.titleView}>
                    <Text style={{ ...styles.title, ...props.titleStyle }}>
                        {props?.title}
                    </Text>
                </View>
            </View>
        </>
    )
    
   

};

export {DefaultHeader};
