import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import { connect } from 'react-redux';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Basket from './components/Basket';

class RouterComponent extends Component {

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <Router sceneStyle={styles.fullWrapper}>

        {/* <Scene key="auth">
          <Scene
          key="login"
          component={LoginForm}
          navigationBarStyle={styles.loginHeader}
          initial
          />
        </Scene> */}

        <Scene key="main">
          <Scene
            key="productList"
            component={ProductList}
            title="Ürünler"
            titleStyle={styles.headerTitleStyle}
            navigationBarStyle={styles.headerStyle}
            initial
          />

          <Scene
            key="productDetail"
            component={ProductDetail}
            title="Ürün"
            titleStyle={styles.headerTitleStyle}
            navigationBarStyle={styles.headerStyle}
          />

          <Scene
            key="basket"
            component={Basket}
            title="Sepetim"
            titleStyle={styles.headerTitleStyle}
            navigationBarStyle={styles.headerStyle}
          />

        </Scene>

      </Router>
    );
  }
}

const styles = {
  loginHeader: {
    backgroundColor: '#FF2D55',
    borderBottomWidth: 1,
    borderBottomColor: '#FF2D55'
  },

  backButton: {
    width: 32,
    height: 32,
    marginTop: -5,
    marginLeft: -8
  },

  rightButtonIcon: {
    width: 22,
    height: 22,
    marginTop: -18

  },

  rightButtonText: {
    color: '#fff',
    marginRight: 25,
    fontSize: 17
  },
  rightText: {
    color: '#fff',
    fontSize: 17
  },
  headerStyle: {
    backgroundColor: '#FF2D55',
    borderBottomWidth: 0,
    borderBottomColor: '#fff',

  },
  headerTitleStyle: {
    color: '#fff',
    fontWeight: '600'
  },
  fullWrapper: {
    backgroundColor: '#F4F6FA',
    flex: 1,
  }
};

const mapStateToProps = (state) => {
  const { productForm, shippingInfo, profile } = state;
  return { productForm, shippingInfo, profile };
};

export default connect(null, {

})(RouterComponent);
