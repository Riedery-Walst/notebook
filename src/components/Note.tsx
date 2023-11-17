interface NoteProps {
  text: string;
  onSelect: () => void;
  onDelete: () => void;
}

function Note({ text, onSelect, onDelete }: NoteProps) {
  return (
    <div>
      <span onClick={onSelect}>{text}</span>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

export default Note;
