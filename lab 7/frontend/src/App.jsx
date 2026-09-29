const b1 = {
  picUrl: "https://m.media-amazon.com/images/I/710cYy40DUL._AC_UY218_.jpg",
  bname: "Let us react",
  price: 765.00,
  quantity: 5,
  rating: "5/5"
}

function Book(){
  return (
    <div>
      <img src={b1.picUrl} alt="book" />
      <h1>{b1.bname}</h1>
      <h2>Price: {b1.price}</h2>
      <h3>Quantity: {b1.quantity}</h3>
      <h4>Rating: {b1.rating}</h4>
    </div>
  )
}

export default function App(){
  return (
  <>
  
  <h1>Hello React</h1>
  <Book />
  </>
  )
}