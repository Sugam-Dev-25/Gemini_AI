import { useState } from "react";
import { FiSend } from "react-icons/fi";

const InputBox = ({ onSend, loading }) => {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    if (!text.trim()) return;

    onSend(text);

    setText("");
  };

  return (
    <div className="border-t border-slate-700 p-4 bg-slate-900">

      <div className="flex gap-3">

        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSubmit();
          }}
          type="text"
          placeholder="Type your message..."
          className="flex-1 bg-slate-800 text-white rounded-xl px-5 py-3 outline-none"
        />

        <button
          disabled={loading}
          onClick={handleSubmit}
          className="bg-blue-600 hover:bg-blue-700 px-5 rounded-xl text-white disabled:opacity-50"
        >
          <FiSend size={20} />
        </button>

      </div>

    </div>
  );
};

export default InputBox;