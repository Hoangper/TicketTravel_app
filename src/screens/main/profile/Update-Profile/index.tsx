import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import useStyles from './styles';
import {NavigationService} from '../../../..';

const Update_Profile: React.FC = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => NavigationService.goBack()}
        style={{
          width: 200,
          height: 100,
          backgroundColor: 'red',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 20, color: 'white'}}> Go back Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Update_Profile;
