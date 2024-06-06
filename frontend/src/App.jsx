import { useState } from "react";

import "./App.css";

import DougPage from "./DougPage";
import WakhtaanPage from "./WakhtaanPage";

function App() {
  const [user, setUser] = useState(undefined);

  if (!user) {
    return <DougPage onAuth={(user) => setUser(user)} />;
  } else {
    return <WakhtaanPage user={user} />;
  }
}

export default App;