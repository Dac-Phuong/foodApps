import React, { useEffect, useState } from 'react';
import {  StatusBar, View, ActivityIndicator, } from 'react-native';

export function Loading(opacity, color = false, size = "auto"){
  let op = opacity.opacity;
  let selectedColor = "";
  return(
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: `rgba(24,23,21, ${op})`,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 111111111111111111111111,
        width: size
      }}
    >
      <ActivityIndicator size="large" color="#FFFFFF" />
    </View>
  )
}