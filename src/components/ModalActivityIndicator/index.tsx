import { ActivityIndicator, Modal, View, Text } from "react-native";

export const ModalActivityIndicator = (props: any) => {
  const {
    show = false,
    color = "black",
    dimLights = 0.6,
    loadingMessage = "Loading...",
    size = "large",
    showText = true,
    textStyle = {},
  } = props;
  return (
    <Modal transparent={true} animationType="none" visible={show}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: `rgba(0,0,0,${dimLights})`,
        }}
      >
        <ActivityIndicator animating={show} color={color} size={size} />
        {showText && <Text style={textStyle}>{loadingMessage}</Text>}
      </View>
    </Modal>
  );
};
