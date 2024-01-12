import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const ObjectScanningB = () => {
  return (
    <View style={styles.objectScanningB}>
      <Image
        style={styles.alignmentFrameIcon}
        resizeMode="cover"
        source={require("../assets/alignment-frame-icon.png")}
      />
      <Text style={[styles.takeAPhoto, styles.captureLayout]}>
        Take a photo to search product
      </Text>
      <Text style={[styles.capture, styles.captureLayout]}>capture</Text>
      <Image
        style={styles.captureButtonIcon}
        resizeMode="cover"
        source={require("../assets/capture-button.png")}
      />
      <Image
        style={[styles.backIcon, styles.backIconLayout]}
        resizeMode="cover"
        source={require("../assets/back-icon.png")}
      />
      <Image
        style={[styles.allIcons, styles.backIconLayout]}
        resizeMode="cover"
        source={require("../assets/all-icons.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  captureLayout: {
    height: 19,
    width: 243,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.helvetica,
    lineHeight: 56,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  backIconLayout: {
    maxHeight: "100%",
    position: "absolute",
  },
  alignmentFrameIcon: {
    top: 135,
    width: 240,
    height: 459,
    left: 66,
    position: "absolute",
  },
  takeAPhoto: {
    top: 86,
    left: 66,
  },
  capture: {
    top: 707,
    left: 67,
  },
  captureButtonIcon: {
    top: 634,
    left: 155,
    width: 66,
    height: 66,
    position: "absolute",
  },
  backIcon: {
    top: 36,
    left: 45,
    width: 21,
  },
  allIcons: {
    height: "2.09%",
    width: "1.07%",
    top: "3.45%",
    right: "14.13%",
    bottom: "94.46%",
    left: "84.8%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  objectScanningB: {
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default ObjectScanningB;
