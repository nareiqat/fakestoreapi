// import logo from './logo.svg';

//This is an example of how App.js would be if it was created used class based components

import './App.css';
import {Component} from 'react' 
import Products from './components/Products/Products'
import SearchBar from './components/SearchBar/SearchBar'
import Drawer from './components/Drawer/Drawer'

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      data: [],
      input : "",
      error: "",
      loading: true,
      value: [0,1000],
      sortValue: "",
      category: ""

    }
  }
  inputHandler = (event) => {
    this.setState({
      input: event.target.value
      // console.log(input);

    });
  }  


  handlePriceChange = (event, newValue) => {
    this.setState({
      value: newValue

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


  render(){

    if (this.state.loading){
      return <div>loading</div>
    }

    return (
      <div>
        <SearchBar   handleChange={this.inputHandler} handleSubmit={this.submitHandler} input={this.state.input}/>
       
        <Drawer handlePriceChange={this.handlePriceChange} value={this.state.value} category={this.state.category} handleCategory={this.handleCategory} sortValue={this.sortValue}  handleSort={this.handleSort} />
       
        <Products sortValue={this.state.sortValue} value={this.state.value} data={this.state.data} input={this.state.input}  handleSlider={this.handlePriceChange} category={this.state.category} />
      </div>
    );
  }

  
}

export default App;