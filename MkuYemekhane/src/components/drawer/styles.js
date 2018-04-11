import {StyleSheet} from 'react-native';
import { Dimensions } from 'react-native';

const {height, width} = Dimensions.get("window");

export default StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: "#fff",
    top: -1
  },
  cover: {
    alignSelf: "stretch",
    height: height / 3.5,
    width: null,
    position: "relative",
    marginBottom: 10
  },
  logo: {
    position: "absolute",
    left: width / 5,
    top: height / 23,
    width: 150,
    height: 150,
    resizeMode: "contain"
  },
});
