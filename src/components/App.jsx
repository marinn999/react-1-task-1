// src/components/App.jsx
import { Product } from "./Product";
export default function App() {
  const user = {
    username: "Josh",
    messages: [],
  };
  return (
    <div>
      <h1>Messages</h1>

      <Product name={user.username} messages={user.messages} />
    </div>
  );
}
