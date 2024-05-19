import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import Input from "@/components/Input";
import Button from "@/components/Button";
import Spinner from "@/components/Spinner";
import CustomToast from "@/components/CustomToast";
import { Colors } from "@/constants/Colors";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useUpdateContactMutation } from "@/store/contact";

const Edit = () => {
  const router = useRouter();
  const [updateContact, { isLoading, isError }] = useUpdateContactMutation();
  const params = useLocalSearchParams();
  const [form, setForm] = useState({
    id: params.id,
    firstName: params.firstName,
    lastName: params.lastName,
    age: params.age,
  });

  const handleSubmit = async () => {
    try {
      const response = await updateContact(form);
      if (response.error) {
        throw new Error("Failed to update contact");
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

export default Edit;

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
