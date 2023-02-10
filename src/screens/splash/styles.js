import { StyleSheet } from 'react-native';
// import {baseStyles} from '../../Res';
import colors from '../../common/colors'


export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: colors.white,
        justifyContent:"center",
        alignItems:"center"
    },
    touchable:{ 
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center" 
    },
    logo: {
        width:100, height:100, 
    }
});
