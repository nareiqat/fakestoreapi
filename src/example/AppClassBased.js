// import logo from './logo.svg';

//This is an example of how App.js would be if it was created used class based components

import './App.css';
import {Component} from 'react' 
import Products from './components/Products/Products'
import SearchBar from './components/SearchBar/SearchBar'
import Drawer from './components/Drawer/Drawer'
import LoadingComponent from '../components/LoadingComponent';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      data: [],
      input : "",
      error: "",
      loading: true,
      priceValue: [0,1000],
      sortValue: "",
      category: ""

    }
  }
  componentDidMount(){
    const apiUrl = 'https://fakestoreapi.com/products'
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
            this.setState({
              data: result,
              loading: false
            })
            console.log(result);
          },
          (err) => {
            this.setState({
              error: err,
              loading: false
            })
            alert(err.message);
            console.log(err.message);
          }
        );
    };
    getData();
  }

  inputHandler = (event) => {
    this.setState({
      input: event.target.value
      // console.log(input);

    });
  }  


  handlePriceChange = (event, newPriceValue) => {
    this.setState({
      valuePrice: newPriceValue

    });
  };

  handleCategory = (event) => {
   
    this.setState({
      category: event.target.value
    })
    // console.log(event.target.value)
    // console.log(category);

  }

  handleSort = event => {
    this.setState({
      setSortValue: event.target.value
    })
    
    // console.log(event.target.value)
  }

  resetFilters = () => {
    this.setState({
      priceValue: [0,1000],
      category: "",
      sortValue: ""
    })
  }
  sortPrice = (sortValue, data) => {
    if(sortValue === 'lowtohigh' || sortValue === 'hightolow'){
      data.sort((a,b) => {
        const diff = a.price - b.price;
        if(diff === 0){
          return 0
        }
        const sign = Math.abs(diff)/diff
        return sortValue === 'lowtohigh' ? sign:-sign
      })
    } else {
      data.sort((a,b) => {
        const diff = a.id - b.id;
        if(diff === 0){
          return 0
        }
        const sign = Math.abs(diff)/diff
        return sortValue === '' ? sign:0
      })
    }
  }
  

  

  render(){

    if (this.state.loading){
      return <div>loading</div>
    }

    return ( 
      this.state.loading ? <LoadingComponent /> : 
      <div>
        <SearchBar  handleChange={this.inputHandler} input={this.state.input}/>
        <Drawer resetFilters={this.resetFilters} handlePriceChange={this.handlePriceChange} priceValue={this.state.priceValue} category={this.state.category} handleCategory={this.handleCategory} sortValue={this.state.sortValue}  handleSort={this.handleSort} />
        <Products  sortPrice={this.state.sortPrice} sortValue={this.state.sortValue} priceValue={this.state.priceValue} data={this.state.data} input={this.state.input} handleSlider={this.handlePriceChange} category={this.state.category} />
      </div> 
      
    )
  }

  
}

export default App;