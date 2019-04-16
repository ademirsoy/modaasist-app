import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { navigateToPage } from '../actions';

class TabBar extends Component {

  render() {
    const { currentPage } = this.props.user;
    return (
      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.iconContainer} onPress={this.props.navigateToPage.bind(this, 'productList')}>
          <Image
            style={styles.icon}
            source={currentPage === 'productList' ? require('../images/productsicoactive.png') : require('../images/productsico.png')}
          />
          <Text style={currentPage === 'productList' ? styles.selectedTabLabel : styles.tabLabel}>
            Ürünler
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer} onPress={this.props.navigateToPage.bind(this, 'basket')}>
          <Image
            style={styles.icon}
            source={currentPage === 'basket' ? require('../images/basketicoactive.png') : require('../images/basketico.png')}
          />
          <Text style={currentPage === 'basket' ? styles.selectedTabLabel : styles.tabLabel}>
            Sepetim
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer} onPress={this.props.navigateToPage.bind(this, 'profile')}>
          <Image
            style={styles.icon}
            source={currentPage === 'profile' ? require('../images/profileicoactive.png') : require('../images/profileico.png')}
          />
          <Text style={currentPage === 'profile' ? styles.selectedTabLabel : styles.tabLabel}>
            Profilim
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = {
  tabLabel: {
    color: '#8E8E93',
    fontSize: 11,
    fontWeight: '500'
  },

  selectedTabLabel: {
    color: '#FF2D55',
    fontSize: 11,
    fontWeight: '500'
  },

  iconContainer: {
    flexDirection: 'column',
    alignItems: 'center'
  },

  icon: {
    width: 25,
    height: 25
  },

  tabBar: {
    paddingTop: 2,
    paddingBottom: 2,
    borderRadius: 22,
    flexDirection: 'row',
    justifyContent: 'space-around',
    shadowColor: '#8E8E93',
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.60,
    shadowRadius: 7,
    elevation: 3,
    marginLeft: 8,
    marginRight: 8,
    marginBottom: 8,
    marginTop: 8,
    position: 'relative',
    height: 44,
    backgroundColor: '#fff'
  }

};

const mapStateToProps = state => {
  return {
    user: state.user
   };
};

export default connect(mapStateToProps, { navigateToPage })(TabBar);
