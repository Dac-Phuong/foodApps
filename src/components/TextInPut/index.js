import React, { useState } from "react";
import { TextInput, Text, View } from "react-native";
import styles from "./style";
import { colors } from "../../theme/colors";
export default function Input({
  label,
  error,
  password,
  onForcus = () => {},
  ...props
}) {
  const [isFocused, setIsFocused] = React.useState(false);
  const [hidepassword, setHidePassword] = React.useState(password);
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View
        style={[
          styles.inputContainer,
          {
            borderColor: error
              ? colors.red
              : isFocused
              ? colors.darkBlue
              : colors.Light,
          },
        ]}
      >
        <TextInput
          secureTextEntry={hidepassword}
          autoCorrect={false}
          onFocus={() => {
            onForcus();
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
          {...props}
        />
      </View>
      {error && (
        <Text style={{ color: colors.red, fontSize: 12 }}>{error}</Text>
      )}
    </View>
  );
}
