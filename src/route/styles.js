import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    btnView:{
        flex:1, 
        justifyContent:"center",
        alignItems:"flex-start",
        marginRight:10,
        flexDirection:"row"
    },
    btnStyle:{
        width:70,
        height:30,
        alignSelf:"center",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:'#7DE24E',
        borderRadius:30
    },
    passBtnStyle:{
        width:100,
        height:30,
        alignSelf:"center",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:'#7DE24E',
        borderRadius:30,
        marginRight:10
    },
    btnTxt:{
        color:'white',
        fontSize:12,
        // fontWeight:'bold'
    }
});
