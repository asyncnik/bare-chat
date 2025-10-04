import { useState } from "react";
import NameSetup from "@/components/NameSetup";
import ChatInterface from "@/components/ChatInterface";

const Index = () => {
  const [userName, setUserName] = useState<string | null>(null);

  const handleNameSubmit = (name: string) => {
    setUserName(name);
  };

  return (
    <>
      {!userName ? (
        <NameSetup onNameSubmit={handleNameSubmit} />
      ) : (
        <ChatInterface userName={userName} />
      )}
    </>
  );
};

export default Index;
