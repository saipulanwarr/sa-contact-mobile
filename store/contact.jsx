import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactApi = createApi({
  reducerPath: "contactApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://contact.herokuapp.com/" }),
  endpoints: (builder) => ({
    getContact: builder.query({
      query: () => `contact`,
      providesTags: ["Contact"],
    }),
    createContact: builder.mutation({
      query: (payload) => ({
        url: "contact",
        method: "POSt",
        body: payload,
      }),
      invalidatesTags: ["Contact"],
    }),
    updateContact: builder.mutation({
      query: (payload) => ({
        url: `contact/${payload.id}`,
        method: "PUT",
        body: payload,
      }),
      invalidatesTags: ["Contact"],
    }),
    deleteContact: builder.mutation({
      query: (id) => ({
        url: `contact/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Contact"],
    }),
  }),
});

export const {
  useGetContactQuery,
  useCreateContactMutation,
  useUpdateContactMutation,
  useDeleteContactMutation,
} = contactApi;
