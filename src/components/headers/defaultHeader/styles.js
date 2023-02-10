import { StyleSheet } from 'react-native';
// import {baseStyles} from '../../Res';
import colors from '../../../common/colors'


export default StyleSheet.create({
    container: {
        zIndex: 10, // for ios
        height: 70,
        backgroundColor: colors.white,
        // alignItems:"center",
        shadowColor: colors?.grey,
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
          height: 5,
          width: 0
        },
        elevation: 15,
      },
      title: {
        // ...baseStyles.bold,
        fontWeight:"bold",
        fontSize: 22,
        color: colors.black,
      },
  
  
     
});
