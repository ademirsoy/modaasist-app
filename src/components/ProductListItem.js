import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection, Card } from './common';

class ProductListItem extends Component {

  onRowPress() {
    Actions.productDetail({ selectedProduct: this.props.product });
  }

  render() {
    const { product } = this.props;
    return (
      <TouchableOpacity activeOpacity={1} onPress={this.onRowPress.bind(this)}>
           <Card>
             <CardSection>
                 <View style={styles.thumbnailContainerStyle}>
                 <Image style={styles.thumbnailStyle} source={product.images[0] ? { uri: product.images[0].src } : require('../images/noPhoto.png')} />
                 </View>
                 <View style={styles.productDesc}>
                   <Text style={styles.productIdText}>{product.code}</Text>
                   <Text style={styles.productLabel}>{product.name}</Text>
                   <Text style={styles.productCategoryText}>{product.categories.map(category => `${category.name},`)}</Text>
                   <View style={{ flexDirection: 'row' }}>
                     <Text style={styles.actualPriceText}>{product.discountPrice}</Text>
                     <Text style={styles.actualPriceText}>₺</Text>
                       <Text style={product.discountPrice ? styles.oldPriceText : styles.actualPriceText}>
                       {product.regularPrice}
                     </Text>
                   </View>
                 </View>
             </CardSection>
           </Card>
       </TouchableOpacity>
    );
  }
}

const styles = {

  productCategoryText: {
    color: '#8E8E93',
    fontSize: 12
  },

  productLabel: {
    color: '#000',
    fontWeight: '700',
    fontSize: 14
  },

  productIdText: {
    fontSize: 14,
    color: '#8E8E93',
    marginBottom: 3
  },

  actualPriceText: {
    color: '#FF2D55',
    fontSize: 14,
    fontWeight: '700',
    // marginTop: 5,
  },

  oldPriceText: {
    color: '#8E8E93',
    fontSize: 14,
    fontWeight: '400',
    textDecorationLine: 'line-through'
  },

  thumbnailContainerStyle: {
    flexDirection: 'column',
    paddingLeft: 8,
    paddingTop: 3,
    paddingBottom: 8,
    flex: 1
  },

   productDesc: {
    flexDirection: 'column',
    paddingTop: 3,
    paddingBottom: 8,
    flex: 5,
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    position: 'relative'
  },

  thumbnailStyle: {
    height: 72,
    width: 48
  }
};

export default ProductListItem;
