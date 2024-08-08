"use client";
import { Button, Flex, TextInput } from "@mantine/core";
import { useState } from "react";
import { login } from "../services/api/auth";
import { setCookie } from "../helpers/cookie";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { initialFormValues } from "../helpers/consts";

export default function HomePage() {
  const [form, setForm] = useState(initialFormValues);
  const router = useRouter();

  const submitForm = async () => {
    const res = await login(form);
    if (res.status === 200) {
      setCookie(res.data);
      toast.success("Giriş yapıldı");
      router.push("/StpRmforKlasik");
    }
  };

  return (
    <Flex mih={"100vh"} gap="md" justify="center" align="center" direction="column" wrap="wrap">
      <TextInput
        value={form.userName}
        onChange={(e) => setForm((prev) => ({ ...prev, userName: e.target.value }))}
        label="user name"
      />
      <TextInput
        value={form.password}
        onChange={(e) => setForm((prev) => ({ ...prev, password: e.target.value }))}
        label="password"
      />
      <Button onClick={submitForm}>Login</Button>
    </Flex>
  );
}
