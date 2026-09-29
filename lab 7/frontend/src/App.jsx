const b1 = {
  picUrl: "https://m.media-amazon.com/images/I/710cYy40DUL._AC_UY218_.jpg",
  bname: "the Courage to be disliked",
  price: 765.00,
  quantity: 5,
  rating: "5/5"
}
const b2 = {
  picUrl: "https://m.media-amazon.com/images/I/617lxveUjYL._AC_UY218_.jpg",
  bname: "The Alchemist",
  price: 208.00,
  quantity: 3,
  rating: "4/5"
}

function Book({ book }) {
  return (
    <div>
      <img src={book.picUrl} alt="book" />
      <h1>{book.bname}</h1>
      <h2>Price: {book.price}</h2>
      <h3>Quantity: {book.quantity}</h3>
      <h4>Rating: {book.rating}</h4>
    </div>
  )
}

export default function App(){
  return (
  <>
  
  <h1>Hello React</h1>
  <Book book = {b1} />
  <Book book = {b2} />
  </>
  )
}