"use client";
import React from "react";
import { Button } from "./ui/button";
import { LuMessageSquarePlus } from "react-icons/lu";
import { useRouter } from "next/navigation";

type Props = {};

const CreateChatButton = (props: Props) => {
  const router = useRouter();

  const createNewChat = () => {
    router.push("/chat/new");
  };

  return (
    <Button variant={"ghost"} onClick={createNewChat}>
      <LuMessageSquarePlus />
    </Button>
  );
};

export default CreateChatButton;
