import {createTheme} from '@rneui/themed';

declare module '@rneui/themed' {
  export interface Colors {
    // Đặt tên màu và kiểu string ở đây
    main: string;
  }
}

export const theme = createTheme({
  lightColors: {
    // Gọi tên đã đặt và đặt mã màu ở đây
    main: '#64026D',
  },
});
