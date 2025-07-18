"use client";
import { Provider } from "react-redux";
import { store } from "@/redux/store"; // ✅ correct named import

export default function ProviderWrapper({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
