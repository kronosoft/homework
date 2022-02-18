import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:"#E2E2E2",
        margin:5,
        borderRadius: 10,
    },

    inner_container:{
        margin: 3,
    },

    image:{
    height: Dimensions.get("window").height / 4,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    resizeMode: "cover",
    },

    title:{
        fontWeight: "bold",
        margin: 5,
        fontSize: 12,
    },

    price: {
        fontSize: 11,
        color: "#9D9C9C",
        margin: 5,
        fontWeight: "bold",
    },

    stock:{
        fontSize: 12,
        margin: 5,
        color: "red",
    }
});