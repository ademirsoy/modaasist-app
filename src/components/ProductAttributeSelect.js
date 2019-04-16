import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { CardSection, Card } from './common';

const ProductAttributeSelect = ({ attributes, onAttrSelect }) => {
  if (attributes.length === 0) {
    return null;
  }

  return (
    <Card>
      {renderAttributes(attributes, onAttrSelect)}
    </Card>
  );
};

const renderAttributes = (attributes, onAttrSelect) => {
  return attributes.map(attr =>
    <CardSection key={attr}>
      <TouchableOpacity onPress={() => onAttrSelect(attr)}>
        <Text>{attr}</Text>
      </TouchableOpacity>
    </CardSection>
  );
};

const styles = {
};

export default ProductAttributeSelect;
