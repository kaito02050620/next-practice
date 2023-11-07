"use client";
import Form from "@/components/form";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [sex, setSex] = useState("");
  const [hobbies, setHobby] = useState([]);

  const postData = { name, message, sex, hobbies };

  //更新用関数
  const inputName = (newValue) => {
    setName(newValue);
  };
  const inputMessage = (newValue) => {
    setMessage(newValue);
  };
  const inputSex = (newValue) => {
    setSex(newValue);
  };
  const inputHobby = (newValue) => {
    setHobby(newValue);
  };

  return (
    <div>
      <h1>お問い合わせ</h1>
      <Form
        inputName={inputName}
        inputMessage={inputMessage}
        inputSex={inputSex}
        inputHobby={inputHobby}
        postData={postData}
      />
    </div>
  );
}
