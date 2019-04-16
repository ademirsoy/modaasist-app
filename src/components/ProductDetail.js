import React, { Component } from 'react';
import { View, ScrollView, Text, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import { productFetchById, productFullFetchById, productAttrSelect, addToBasket } from '../actions';
import { FullWrapper, Button } from './common';
import ProductAttributeSelect from './ProductAttributeSelect';


class ProductDetail extends Component {

  componentWillMount() {
    console.log('componentWillMount ProductDetail');
    if (this.props.selectedProduct) {
      this.props.productFetchById(this.props.selectedProduct.id);
    }
    if (this.props.selectedProductId) {
      this.props.productFullFetchById(this.props.selectedProductId);
    }
  }

  onAttrSelect(key, value) {
    this.props.productAttrSelect({ prop: key, value });
  }

  onBasketAdd() {
    this.props.addToBasket({
      product: this.props.product,
      variation: this.props.selectedVariation,
      size: this.props.size,
      color: this.props.color,
      height: this.props.height,
      shoeSize: this.props.shoeSize,
    });
  }

  renderImages() {
    if (!this.props.product.images) {
      return null;
    }
    return this.props.product.images.map(image =>
        <TouchableOpacity key={image.src}>
          <Image style={styles.image} source={{ uri: image.src }} />
        </TouchableOpacity>
    );
  }

  renderCategories() {
    if (!this.props.product.categories) {
      return null;
    }
    return this.props.product.categories.map(cat =>
        <TouchableOpacity key={cat.id}>
          <Text>{cat.name}</Text>
        </TouchableOpacity>
    );
  }

  renderSelectedVariation() {
    const { product } = this.props;
    if (
      ((product.sizes.length > 0 && this.props.size) || product.sizes.length === 0) &&
      ((product.colors.length > 0 && this.props.color) || product.colors.length === 0) &&
      ((product.heights.length > 0 && this.props.height) || product.heights.length === 0) &&
      ((product.shoeSizes.length > 0 && this.props.shoeSize) || product.shoeSizes.length === 0)
    ) {
      if (!this.props.selectedVariation.id) {
        return <Text>Stokta Yok</Text>;
      }
      return (
        <View>
          <Text>{this.props.selectedVariation.id} - {this.props.selectedVariation.name}</Text>
          <Button onPress={this.onBasketAdd.bind(this)}>
            <Text>Sepete Ekle</Text>
          </Button>
        </View>
      );
    }
  }

  render() {
    return (
      <FullWrapper>
        <ScrollView>
          {this.renderImages()}
          {this.renderCategories()}
          <Text>{this.props.product.id}</Text>
          <Text>{this.props.product.name}</Text>
          <Text>{this.props.product.description}</Text>
          <Text>{this.props.product.regularPrice}</Text>
          <Text>{this.props.product.discountPrice}</Text>

          <ProductAttributeSelect
            attributes={this.props.product.sizes}
            onAttrSelect={selected => this.onAttrSelect('size', selected)}
          />

          <ProductAttributeSelect
            attributes={this.props.product.colors}
            onAttrSelect={selected => this.onAttrSelect('color', selected)}
          />

          <ProductAttributeSelect
            attributes={this.props.product.heights}
            onAttrSelect={selected => this.onAttrSelect('height', selected)}
          />

          <ProductAttributeSelect
            attributes={this.props.product.shoeSizes}
            onAttrSelect={selected => this.onAttrSelect('shoeSize', selected)}
          />

          {this.renderSelectedVariation()}
        </ScrollView>
      </FullWrapper>
    );
  }
}

const styles = {
  wrapper: {
    flex: 1
  },
  image: {
    height: 179,
    width: 173
  },
};

const mapStateToProps = (state) => {
  const { product, selectedVariation, size, color, shoeSize, height } = state.productDetail;
  return { product, selectedVariation, size, color, shoeSize, height };
};

export default connect(mapStateToProps, {
  productFetchById, productFullFetchById, productAttrSelect, addToBasket
})(ProductDetail);
