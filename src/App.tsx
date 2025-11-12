// src/App.tsx
import { Router } from "@/Router"; // ✅ src/Router.tsx가 실제로 존재해야 함

function App() {
  console.log(import.meta.env.VITE_API_URL); // ✅ 환경 변수 확인용
  return <Router />; // ✅ 실제 라우팅 담당
}

export default App;
