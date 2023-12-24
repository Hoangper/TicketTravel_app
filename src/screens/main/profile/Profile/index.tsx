import {Icon} from '@rneui/themed';
import React, {FunctionComponent} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {NavigationService, images} from '../../../..';
import {routes} from '../../../../constants';
import useStyles from './styles';

const Profile: FunctionComponent = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="chevron-back-outline" type="ionicon" color={'white'} />
        <Text style={styles.txtHeader}>Thông tin cá nhân</Text>
      </View>
      <View style={styles.content}>
        <TouchableOpacity style={styles.avatar}>
          <Image style={styles.imgAvatar} source={images.default} />
        </TouchableOpacity>
        <View style={styles.viewTxt}>
          <Text style={styles.phone}>Điện thoại</Text>
          <Text style={styles.number}>0123456789</Text>
        </View>
        <View style={styles.viewTxt}>
          <Text style={styles.phone}>Họ và tên</Text>
          <Text style={styles.number}>Võ Hoàng Minh Thư</Text>
        </View>
        <View style={styles.viewTxt}>
          <Text style={styles.phone}>Email</Text>
          <Text style={styles.number}>thuvhmps22864@gmail.com</Text>
        </View>
        <View style={styles.viewTxt}>
          <Text style={styles.phone}>Giới tính</Text>
          <Text style={styles.number}>Chưa cập nhật</Text>
        </View>
        <View style={styles.viewTxt}>
          <Text style={styles.phone}>Ngày sinh</Text>
          <Text style={styles.number}>Chưa cập nhật</Text>
        </View>
        <View style={styles.viewTxt}>
          <Text>
            Mật khẩu thanh toán dùng để xác thực mỗi khi thực hiện chuyển và rút
            tiền.
          </Text>
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => NavigationService.navigate(routes.UPDATE_PROFILE)}>
          <Text style={styles.txtButton}>Cập nhật thông tin</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
          <Text style={styles.txtButton2}>Đăng xuất</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;
