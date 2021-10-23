import BookList from "./BookList";
import useFetch from "./useFetch";

function App() {
  const books =
    useFetch('http://localhost:8000/books/')
    ;


  return (
    <div>
      <h1>Look at this</h1>
      {books && <BookList books={books} />}
      
    </div>
  );
}


export default App;
