import * as React from "react";
import {
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Link,
  HStack,
  Center,
  NativeBaseProvider,
  Button,
  View,
  ScrollView,
} from "native-base";
import { Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { TextInput } from "react-native-paper";
import { useState } from "react";
const Example = () => {
  const [showPassword, setShowPassword] = useState(true);

  const onSubmit = () => {
    console.log("sdsdsds");
  };

  return (
    <Center w="100%" top="-5rem">
      <Box safeArea w="95%" maxW="350">
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            source={{
              uri: "https://www.hourlyrooms.co.in/uploads/0000/1/2021/11/19/logo-3.png",
            }}
            style={{ width: 190, height: 120, resizeMode: "contain" }}
          />
        </View>
        <Heading
          mt="1"
          _dark={{
            color: "warmGray.200",
          }}
          color="coolGray.600"
          fontWeight="medium"
          size="md"
        >
          Login to continue!
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            {/* <FormControl.Label  >User Name/Email ID</FormControl.Label> */}
            <View style={{display:'flex' , flexDirection:'row'}}>
            <Icon name="alternate-email" size={20} />
            <TextInput
              autoFocus="none"
              placeholder="User Name/Email ID"
              style={{
                height: 45,
                fontSize: 17,
                borderBottom: "1px solid black",
                backgroundColor: "white",
                marginBottom: "2rem",
              }}
              theme={{ colors: { primary: "none" } }}
            />
            </View>
            {/* <FormControl.Label>Password</FormControl.Label> */}
            <View >
              <Icon name="lock" size={20} />
              <TextInput
                placeholder="Password"
                secureTextEntry={showPassword}
                style={{
                  height: 45,
                  fontSize: 17,
                  borderBottom: "1px solid black",
                  backgroundColor: "white",
                }}
                theme={{ colors: { primary: "none" } }}
              />
            </View>
            <TouchableOpacity
              onPress={() => {
                setShowPassword((current) => !current);
              }}
            >
              <Text
                style={{
                  color: "black",
                  position: "absolute",
                  right: "5%",
                  top: "-2rem",
                }}
              >
                {showPassword ? "Show" : "Hide"}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Link
                _text={{
                  fontSize: "xs",
                  fontWeight: "500",
                  color: "indigo.500",
                }}
                alignSelf="flex-end"
                mt="1"
              >
                Forget Password?
              </Link>
            </TouchableOpacity>
          </FormControl>
          <TouchableOpacity style={{ marginTop: "2rem" }}>
            <Button
              _text={{
                color: "white",
                fontSize: "20px",
                fontWeight: "bold",
              }}
              colorScheme="indigo"
              onPress={onSubmit}
            >
              Log In
            </Button>
          </TouchableOpacity>
        </VStack>
      </Box>
    </Center>
  );
};

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Example />
      </Center>
    </NativeBaseProvider>
  );
};
