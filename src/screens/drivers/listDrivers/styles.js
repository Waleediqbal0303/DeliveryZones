


import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    addBtn:{
        justifyContent:"flex-end", 
        margin:10, 
        flexDirection:"row", 
        alignItems:"center"
    },
    addText:{
        color:"black", 
        fontSize:16, 
        fontWeight:"bold", 
        marginRight:5
    },
    boxView: {
        flex: 1,
        paddingRight: 20,
        marginTop: 10,
        // marginLeft: 10,
        width:'90%',
        minHeight:100,
        backgroundColor:'#E2DFD2',
        alignSelf:"center",
        justifyContent:"center"
    },
    inBoxView: {
        flex: 1,
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        paddingVertical: Platform.OS == "ios" ? 20 : 20,
        minHeight: 80
    },
    flexJustRow: {
        flexDirection: "row"
    },
    nameLabel:{
        color:"black",
        fontSize:14,
        marginTop:5,
        marginLeft:10
    },
    headLabel:{
        color:"black",
        fontSize:14,
        marginTop:5,
        marginLeft:10,
        fontWeight:"bold"
    }
});
