import { useSelector } from "react-redux";
import { AddNoteForm } from "../components";
import NoteCard from "../components/NoteCard";

const Home = () => {
  const { status, userData } = useSelector((store) => store.auth);
  const notes = useSelector((store) => store.notes.allNotes);

  return (
    <div>
      {status && userData ? (
        <div className="p-4">
          <h1 className="text-3xl font-semibold mb-5">
            Welcome, {userData.name}
          </h1>
          <div className="flex gap-3 flex-col md:flex-row">
            <AddNoteForm />
            <div className="flex-1">
              <h2 className="text-center my-5 text-2xl font-semibold">
                All notes
              </h2>
              <div className="flex gap-3 items-center justify-center flex-wrap">
                {notes.map((note) => (
                  <div
                    key={note.$id}
                    className="p-2 border rounded shadow-md w-96 h-48"
                  >
                    <NoteCard {...note} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>Please login first</div>
      )}
    </div>
  );
};

export default Home;
