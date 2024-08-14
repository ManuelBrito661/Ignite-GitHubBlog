import { Routes, Route } from "react-router-dom";
import { App } from "./pages/App"
import { DefaultLayout } from "./defaultLayout/defaultLayout";


export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<App />} />
        <Route path="/issue" element={'Teste'} />
      </Route>
    </Routes>
  )
}