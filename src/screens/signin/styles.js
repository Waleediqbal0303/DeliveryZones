import { StyleSheet } from 'react-native';
// import {baseStyles} from '../../Res';
import colors from '../../common/colors'


export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: colors.white,
        justifyContent:"center",
        // alignItems:"center"
    },
    topImg:{
      width: '50%',
      height: 100,
      resizeMode: 'contain',
      margin: 30,
      marginBottom:50
    },
    touchable:{ 
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center" 
    },
    logo: {
        width:100, height:100, 
    },

    SectionStyle: {
        flexDirection: 'row',
        height: 40,
        marginLeft: 35,
        marginRight: 35,
        margin: 10,
        marginTop:5,
        
      },
      buttonStyle: {
        backgroundColor: '#7DE24E',
        borderWidth: 0,
        color: '#FFFFFF',
        borderColor: '#7DE24E',
        height: 40,
        alignItems: 'center',
        borderRadius: 30,
        marginLeft: 35,
        marginRight: 35,
        marginTop: 20,
        marginBottom: 20,
        justifyContent:"flex-end"
      },
      buttonTextStyle: {
        color: '#FFFFFF',
        paddingVertical: 10,
        fontSize: 16,
      },
      inputStyle: {
        flex: 1,
        color: 'black',
        paddingLeft: 15,
        paddingRight: 15,
        borderWidth: 1,
        borderRadius: 30,
        borderColor: 'black',
       
        
      },
      errorTextStyle: {
        color: 'red',
        fontSize: 12,
        marginLeft: 45,
        marginTop:-5,
        maxWidth:300
      },
      successTextStyle: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
        padding: 30,
      },
      btnView:{
        flex:1, 
        justifyContent:"flex-end",
        marginVertical:10
    }
});
