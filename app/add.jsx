import Input from "@/components/Input";
import { Colors } from "@/constants/Colors";
import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import Button from "@/components/Button";
import { useCreateContactMutation } from "@/store/contact";
import { useRouter } from "expo-router";
import Spinner from "@/components/Spinner";
import CustomToast from "@/components/CustomToast";

const Add = () => {
  const router = useRouter();
  const [createContact, { isLoading, isError }] = useCreateContactMutation();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    age: "",
  });

  const handleSubmit = async () => {
    try {
      const response = await createContact(form);
      if (response.error) {
        throw new Error("Failed to add contact");
      }
      router.back();
    } catch (error) {
      console.log("error", error);
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollview}
        showsVerticalScrollIndicator={false}
      >
        {isError && <CustomToast />}

        <Input
          label="First Name"
          placeholder="First Name"
          value={form.firstName}
          onChangeText={(e) => setForm({ ...form, firstName: e })}
        />
        <Input
          label="Last Name"
          placeholder="Last Name"
          value={form.lastName}
          onChangeText={(e) => setForm({ ...form, lastName: e })}
        />
        <Input
          label="Age"
          placeholder="Age"
          value={form.age}
          onChangeText={(e) => setForm({ ...form, age: e })}
          numeric
        />
      </ScrollView>
      <View style={styles.button}>
        <Button title="Submit" onPress={handleSubmit} />
      </View>
    </SafeAreaView>
  );
};

export default Add;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  scrollview: {
    marginHorizontal: 20,
  },
  button: {
    justifyContent: "center",
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
  },
});
