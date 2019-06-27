

import {Dimensions, PixelRatio, Platform, StyleSheet} from 'react-native';


/* 设备宽度 */
export const width = Dimensions.get('window').width;

/* 设备高度 */
export const height = Dimensions.get('window').height;

/* dpr */
export const dpr = PixelRatio.get();

/**
 * 根据基准宽度计算实际像素
 * @param  {Number} wd 设计像素
 * @return {Number}       实际像素
 */
export const px = wd => {
  if (wd === 1) {
    return 1 / dpr;
  }

  return Math.floor(width / 750 * wd)
};


