// import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react' 
import Products from './components/Products/Products'
import SearchBar from './components/SearchBar/SearchBar';
import Filter from './components/Filter/Filter'
import Sort from './components/Sort/Sort'
import FilterByCategory from './components/Filter/FilterByCatergory';

function App() {

  const [input, setInput] = useState("")
  const [state, setState] = useState("")
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([])
  const [error, setError] = useState('');
  const [loading, setLoading] = useState('');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [value, setValue] = useState([0, 1000]);
  const [category, setCategory] = useState("")
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
            setFilteredData(result)
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

  const handleFilterChange = (event, newValue) => {
    setValue(newValue);
    setMinPrice(newValue[0])
    setMaxPrice(newValue[1])
    console.log(minPrice, maxPrice);
    console.log(data[0].price)
    
  };

  const handleCategory = (event) => {
    setCategory(event.target.value)
    // console.log(event.target.value)
    // console.log(category);

  }


  // const handleChangeSize = () => {
  //   if(sort !== ''){
  //     data.sort((a,b) => (sort === 'lowtohigh') ? (a.price < b.price ? 1 : -1): (a.price > b.price ? 1:-1))
  //   }else {
  //     return data
  //   }
  //   return setFilteredData(data)
  // }
 
  


  return (
    <div>
      <SearchBar  max={maxPrice} min={minPrice}  handleChange={inputHandler} handleSubmit={submitHandler} input={input}/>
      <FilterByCategory category={category} handleCategory={handleCategory}  />
      <Filter handleChange={handleFilterChange} value={value}  />
      <Sort  />
      <Products value={value} data={data} input={input} minP={minPrice} maxP={maxPrice} handleSlider={handleFilterChange} category={category} />
    </div>
  );
}

export default App;
