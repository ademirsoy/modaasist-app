import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import TabBar from './TabBar';
import { productsFetch } from '../actions';
import { FullWrapper, Card, CardSection } from './common';

class Basket extends Component {

  renderList() {
    return this.props.basket.map(b =>
      <View>
        <Card key={b.variation.id}>
          <CardSection>
            <Text>{b.product.name}</Text>
          </CardSection>
          <CardSection>
            <Text>{b.size}</Text>
          </CardSection>
          <CardSection>
            <Text>{b.color}</Text>
          </CardSection>
          <CardSection>
            <Text>{b.height}</Text>
          </CardSection>
          <CardSection>
            <Text>{b.shoeSize}</Text>
          </CardSection>
        </Card>
        <Card>
          <CardSection>
            <Text>{b.product.regularPrice} {b.product.discountPrice}</Text>
          </CardSection>
          <CardSection>
            <Text>{b.product.shippingType}</Text>
          </CardSection>
          <CardSection>
            <Text>Kargo Ucreti</Text>
            <Text>{b.product.shippingPriceSameCity} {b.product.shippingPriceDomestic}</Text>
          </CardSection>
        </Card>
      </View>
    );
  }

  render() {
    return (
      <FullWrapper>
        <ScrollView>

          {this.renderList()}
        </ScrollView>

        <TabBar />

      </FullWrapper>


    );
  }
}

const styles = {
};

const mapStateToProps = state => {
  return {
    basket: state.basketInfo.basket
   };
};

export default connect(mapStateToProps, { productsFetch })(Basket);
