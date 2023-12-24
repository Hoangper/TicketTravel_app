import React, {FunctionComponent} from 'react';

import {View, Text} from 'react-native';

import useStyles from './styles';

const History: FunctionComponent = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <Text>History This here !!</Text>
    </View>
  );
};

export default History;
