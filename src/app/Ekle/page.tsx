"use client";
import React, { useState } from "react";
import { addPeople } from "../../services/api/getData";
import { toast } from "react-toastify";
import { Button, Flex, Textarea, TextInput } from "@mantine/core";
import { initialAddUserForm } from "../../helpers/consts";
import { addPeopleProps } from "../../types/dataTypes";

function Ekle() {
  const [loading, setLoading] = useState<boolean>(false);
  const [form, setForm] = useState<addPeopleProps>(initialAddUserForm);

  const handleAddUser = async () => {
    setLoading(true);
    const data = await addPeople({
      db_Id: 9,
      Id: 0,
      Adi: form.Adi,
      Soy: form.Soy,
      Aciklama: form.Aciklama,
    });
    if (data.status === 200) {
      setForm(initialAddUserForm);
      toast.success("Kullanıcı oluşturuldu");
    }
    setLoading(false);
  };

  if (loading) return <div className="loader"></div>;

  return (
    <Flex mih={"80vh"} gap="md" justify="center" align="center" direction="column" wrap="wrap">
      <h1>Kullanıcı Ekle</h1>
      <TextInput value={form.Adi} onChange={(e) => setForm((prev) => ({ ...prev, Adi: e.target.value }))} label="Ad" />
      <TextInput
        value={form.Soy}
        onChange={(e) => setForm((prev) => ({ ...prev, Soy: e.target.value }))}
        label="Soyad"
      />
      <Textarea
        placeholder="Aciklama"
        label="Aciklama"
        minRows={5}
        value={form.Aciklama}
        onChange={(e) => setForm((prev) => ({ ...prev, Aciklama: e.target.value }))}
      />
      <Button onClick={handleAddUser}>Save</Button>
    </Flex>
  );
}

export default Ekle;
