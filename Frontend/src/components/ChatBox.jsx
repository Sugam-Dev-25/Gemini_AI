import { useState } from "react";
import Message from "./Message";
import InputBox from "./InputBox";
import { sendMessage } from "../services/chatApi";

const ChatBox = () => {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "👋 Hello! I am Gemini AI. How can I help you today?",
    },
  ]);

  const [loading, setLoading] = useState(false);

  const handleSend = async (text) => {
    if (!text.trim()) return;

    const userMessage = {
      role: "user",
      content: text,
    };

    setMessages((prev) => [...prev, userMessage]);

    setLoading(true);

    try {
      const data = await sendMessage(text);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.aiResponse,
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Something went wrong!",
        },
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="w-full max-w-5xl h-[90vh] bg-slate-900 rounded-2xl shadow-2xl border border-slate-700 flex flex-col overflow-hidden">
      {/* Header */}

      <div className="bg-slate-800 border-b border-slate-700 p-5">
        <h1 className="text-white text-2xl font-bold">🤖 Gemini Chat</h1>

        <p className="text-slate-400 text-sm">AI Assistant</p>
      </div>

      {/* Messages */}

      <div className="flex-1 overflow-y-auto p-6 space-y-5">
        {messages.map((msg, index) => (
          <Message key={index} role={msg.role} content={msg.content} />
        ))}
      </div>

      {loading && <Message role="assistant" content="Typing..." />}

      {/* Input */}

      <InputBox onSend={handleSend} loading={loading} />
    </div>
  );
};

export default ChatBox;
