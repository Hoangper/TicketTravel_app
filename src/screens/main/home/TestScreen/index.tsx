import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import useStyles from './styles';
import {NavigationService} from '../../../..';

const TestScreen: React.FC = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => NavigationService.goBack()}>
        <Text style={styles.txt}>Go back Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TestScreen;
