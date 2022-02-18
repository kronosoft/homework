import React from "react";
import {View, Text, Image} from "react-native";
import styles from "./ProductCard.style";

const ProductCard = ({products}) => {
    return (
    <View style={styles.container}>
        <View style={styles.inner_container}>
            <Image style={styles.image} source={{uri: products.imgURL}}></Image>
            <Text style={styles.title}>{products.title}</Text>
            <Text style={styles.price}>{products.price}</Text>
            <Text style={styles.stock}>{products.inStock ? "" : "STOKTA YOK"}</Text>
        </View>
    </View>
    );
};

export default ProductCard;