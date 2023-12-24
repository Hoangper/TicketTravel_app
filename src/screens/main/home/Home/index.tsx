import {View, Text, TouchableOpacity} from 'react-native';

import React, {FunctionComponent} from 'react';

import useStyles from './styles';
import {NavigationService} from '../../../..';
import {routes} from '../../../../constants';

const Home: FunctionComponent = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => NavigationService.navigate(routes.TESTSCREEN)}>
        <Text style={styles.txt}>Next Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
