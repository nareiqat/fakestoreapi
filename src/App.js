// import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react' 
import Products from './components/Products/Products'
import SearchBar from './components/SearchBar/SearchBar';
function App() {

  const [input, setInput] = useState("")
  const [state, setState] = useState("")
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState('');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const apiUrl = 'https://fakestoreapi.com/products'

  useEffect(() => {
    const getData = () => {
      fetch(apiUrl)
        .then((res) => {
          if (res.status >= 400) {
            throw new Error("Can't fetch api data");
          }
          return res.json();
        })
        .then(
          (result) => {
            setData(result)
            setLoading(false);
            console.log(result);
          },
          (err) => {
            setError(err);
            setLoading(false);
            alert(err.message);
            console.log(err.message);
          }
        );
    };
    getData();
  }, [apiUrl]);

  const inputHandler = (event) => {
    setInput(event.target.value);
    // console.log(input);
  };

  const submitHandler = (event) => {
    // console.log(input)
    event.preventDefault()
    
  };

  const filterPrice = (data) => {
    data.forEach(product => {
      if(min)
    })

  }


  return (
    <div>
      <SearchBar handleChange={inputHandler} handleSubmit={submitHandler} input={input}/>
      <Products data={data} input={input}/>
    </div>
  );
}

export default App;
