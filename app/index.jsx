import { StyleSheet, SafeAreaView, FlatList } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import ItemList from "@/components/ItemList";
import Spinner from "@/components/Spinner";
import FloatingActionButton from "@/components/FloatingActionButton";
import { useGetContactQuery, useDeleteContactMutation } from "@/store/contact";

const index = () => {
  const { data, isLoading } = useGetContactQuery();
  const [deleteContact] = useDeleteContactMutation();

  const handleDelete = async ({ id }) => {
    try {
      await deleteContact(id);
    } catch (error) {
      console.log("error", error);
    }
  };

  if (isLoading) return <Spinner />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data.data}
        renderItem={({ item }) => (
          <ItemList item={item} onLongPress={() => handleDelete(item)} />
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
      <FloatingActionButton />
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});
