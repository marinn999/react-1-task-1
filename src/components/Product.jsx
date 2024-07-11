// src/components/Product.jsx

export const Product = ({ username, messages }) => {
  return (
    <div>
      <p>Hello {username}</p>
      <p>
        {messages.length > 0
          ? `You have ${messages.length} unread messages`
          : "No unread messages"}
      </p>
    </div>
  );
};
