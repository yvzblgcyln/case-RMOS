import { Modal } from "@mantine/core";
import React from "react";
import { PersonDataTypes } from "../../types/dataTypes";
import { PersonHeaderList } from "../../helpers/consts";

interface ModalTypes {
  opened: boolean;
  selectedUser: PersonDataTypes | undefined;
  close: () => void;
}

function UserDetailModal(props: ModalTypes) {
  const { opened, selectedUser, close } = props;

  return (
    <Modal opened={opened} onClose={close} title="User Details">
      {PersonHeaderList.map((field) => (
        <div key={field}>
          <b>{field}:</b> {selectedUser ? selectedUser[field] ?? "-" : "-"}
        </div>
      ))}
    </Modal>
  );
}

export default UserDetailModal;
