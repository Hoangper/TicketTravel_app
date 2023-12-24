import {View, Text} from 'react-native';
import React from 'react';
import useStyles from './styles';

const QR_Screen: React.FC = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <Text>QR_Screen</Text>
    </View>
  );
};

export default QR_Screen;
