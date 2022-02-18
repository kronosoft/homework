import React from 'react';
import { SafeAreaView,
Text,
FlatList,
StyleSheet,
ScrollView,
Image,
Dimensions, 
TextInput} from 'react-native';

import product_data from './product.json';
import ProductCard from "./components/ProductCard";

const numColumns = 2;
function App(){

  const renderProducts = ({item}) => <ProductCard products={item}/>

    return (
    <SafeAreaView>
        <Text style={styles.headerText}> PATIKASTORE</Text>
        <FlatList
        ListHeaderComponent={() => (
          <TextInput style={styles.searchBox} 
          placeholder="Ara..."></TextInput>
        )}


        keyExtractor={item => item.id.toString()}
        data={product_data}
        renderItem={renderProducts}
        numColumns={numColumns}
        />
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    headerText:{
        fontWeight: 'bold',
        fontSize:50,
        color: '#B55993',
    },
    searchBox:{
      height: 40,
      margin: 12,
      borderWidth: 0,
      padding: 10,
      backgroundColor:"#E2E2E2",
      margin:5,
      borderRadius: 10,
  },
});

export default App;