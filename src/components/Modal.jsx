import { useState } from "react";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";

export default function BasicModal() {
  const [modalType, setModalType] = useState("login");

  return (
    <>
      {modalType === "login" ? (
        <LoginModal setModalType={setModalType} />
      ) : (
        <RegisterModal setModalType={setModalType} />
      )}
    </>
  );
}
