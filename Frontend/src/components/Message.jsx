import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const Message = ({ role, content }) => {
  const isUser = role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[75%] px-5 py-3 rounded-2xl whitespace-pre-wrap break-words ${
          isUser
            ? "bg-blue-600 text-white"
            : "bg-slate-800 text-white"
        }`}
      >
        {isUser ? (
          content
        ) : (
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {content}
          </ReactMarkdown>
        )}
      </div>
    </div>
  );
};

export default Message;