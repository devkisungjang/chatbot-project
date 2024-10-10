import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import ChatSelect from "./pages/ChatSelect";
import ChatPreview from "./pages/ChatPreview";
import Chat from "./pages/Chat";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/select" element={<ChatSelect />}></Route>
          <Route path="/preview" element={<ChatPreview />}></Route>
          <Route path="/chat" element={<Chat />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
