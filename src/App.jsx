import "./App.css";
import Card from "./Components/Card";
import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");
  const [song, setSong] = useState("");
  const [submittedSong, setSubmittedSong] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim().length < 3 || name.startsWith(" ")) {
      setError("Por favor chequea que la información sea correcta");
      return;
    }

    if (song.length < 6) {
      setError("Por favor chequea que la información sea correcta");
      return;
    }

    setError("");
    setSubmittedName(name);
    setSubmittedSong(song);
  };

  return (
    <div className="App">
      <h1>Ingresa tu canción favorita del Ferxxo</h1>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ingresa tu nombre"
        />
        <input
          type="text"
          value={song}
          onChange={(e) => setSong(e.target.value)}
          placeholder="Ingresa tu canción favorita del Ferxxo"
        />
        <button type="submit">Enviar</button>
      </form>
      {error && <p className="error">{error}</p>}
      {submittedName && !error && (
        <Card
          submittedName={submittedName} 
          submittedSong={submittedSong}
        />
      )}
    </div>
  );
}

export default App;
