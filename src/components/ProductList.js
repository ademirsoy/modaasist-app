import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, View, Text, Image, TextInput, RefreshControl } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import ProductListItem from './ProductListItem';
import TabBar from './TabBar';
import { productsFetch } from '../actions';
import { Spinner, FullWrapper } from './common';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
    };
  }

  componentWillMount() {
    // console.log('productList componentWillMount');
    this.props.productsFetch();

    this.createDataSource(this.props.products);
  }

  componentWillReceiveProps(nextProps) {
    // nextProps are the next set of props that this component will be rendered with
    // this.props is still the old set of props
    // console.log('productList componentWillReceiveProps');
    this.createDataSource(nextProps.products);
  }

  onRefresh() {
    this.props.productsFetch(true);
  }

  createDataSource(products) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(products);
  }

  renderList() {
    if (this.props.loading) {
      return (
        <View style={{ flex: 1 }}>
          <Spinner color={'red'} size="large" />
        </View>
      );
    }

    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
        refreshControl={
          <RefreshControl
            refreshing={this.props.refreshing}
            onRefresh={this.onRefresh.bind(this)}
          />
        }
      />
    );
  }

  renderRow(product) {
    return <ProductListItem product={product} />;
  }

  render() {
    return (
      <FullWrapper>
        <View style={styles.searchContainer}>
          <TextInput
            label=""
            style={styles.searchBar}
            placeholder="Ürün ismi veya kodu arayın"
            autoCorrect={false}
            value={this.props.filter}
            onChangeText={filter => console.log(filter)}
          />
          <Image style={styles.searchBarIcon} source={require('../images/searchico.png')} />
        </View>

        {this.renderList()}

        <TabBar />

      </FullWrapper>
    );
  }
}

const styles = {

  searchContainer: {
    backgroundColor: '#DEE4ED',
    height: 44,
    padding: 7,
    position: 'relative',
    marginTop: -1
  },
  searchBar: {
    backgroundColor: '#fff',
    height: 30,
    borderRadius: 4,
    padding: 4,
    paddingLeft: 32,
    fontSize: 14
  },
  searchBarIcon: {
    width: 25,
    height: 25,
    position: 'absolute',
    top: 8,
    left: 10
  },

  fullWrapper: {
    backgroundColor: '#fafafa',
    flex: 1
  },
  headerContentStyle: {
    justifyContent: 'space-around',
    flexDirection: 'column'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 72,
    width: 48
  },
    emptyHeader: {
    height: 65
  },
};

const mapStateToProps = state => {
  // console.log("state: " + JSON.stringify(state.productList));
  return {
    products: state.productList.products,
    loading: state.productList.loading,
    refreshing: state.productList.refreshing,
    filter: state.productList.filter
   };
};

export default connect(mapStateToProps, { productsFetch })(ProductList);
