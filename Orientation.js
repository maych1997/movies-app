import React from 'react';
import { useWindowDimensions } from 'react-native';

const LandscapeDetector = () => {
  const { height, width } = useWindowDimensions();
  const isLandscape = width > height;

  return isLandscape;
};

export default LandscapeDetector;