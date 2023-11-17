import { useState } from "react";
import Note from "./Note";

function Notepad() {
  const [notes, setNotes] = useState<string[]>([]);
  const [selectedNote, setSelectedNote] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  function handleAddNote(text: string) {
    setNotes([...notes, text]);
    setSelectedNote(null);
  }

  function handleSelectNote(text: string) {
    setSelectedNote(text);
  }

  function handleDeleteNote(text: string) {
    setNotes(notes.filter((note) => note !== text));
    setSelectedNote(null);
  }

  const filteredNotes = notes.filter((note) =>
    note.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search notes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {filteredNotes.map((note) => (
          <Note
            key={note}
            text={note}
            onSelect={() => handleSelectNote(note)}
            onDelete={() => handleDeleteNote(note)}
          />
        ))}
      </div>
      <textarea
        value={selectedNote || ""}
        onChange={(e) => setSelectedNote(e.target.value)}
      />
      <button onClick={() => handleAddNote(selectedNote || "")}>
        Add Note
      </button>
    </div>
  );
}

export default Notepad;
