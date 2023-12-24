import React, {FunctionComponent} from 'react';

import {Text, View} from 'react-native';

import useStyles from './styles';

const Notification: FunctionComponent = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <Text>Notification </Text>
    </View>
  );
};

export default Notification;
