import {View, Text} from 'react-native';
import React from 'react';
import useStyles from './styles';

const Sign_in: React.FC = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <Text>Sign_in</Text>
    </View>
  );
};

export default Sign_in;
