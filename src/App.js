import React, { Component } from "react";
import axios from "axios";

import Dashboard from "./components/Dashboard/Dashboard";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";

import "./App.css";
import "./components/Header/header.css";
import "./components/Form/form.css";
import "./components/Dashboard/dashboard.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      inventory: []
    };
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts = () => {
    axios
      .get(`/api/products`)
      .then(res => this.setState({ inventory: res.data }));
  };

  // updateState = (inventory) => {
  //   this.setState({
  //     inventory: inventory
  //   })
  // }

  // deleteProduct = (id) => {
  //   axios.delete(`/api/products/${id}`)
  //     .then(res => {
  //       this.setState({
  //         inventory: res.data
  //       })
  //     })
  // }

  editProducts = (id, obj) => {
    // const { name, price, img } = this.state
    axios.put(`/api/products/${id}`, obj).then(res => {
      console.log(res.data);
      this.setState({
        inventory: res.data
      });
    });
  };

  render() {
    console.log(this.state.inventory);
    return (
      <div className="App">
        <Header />
        <Form
          getProducts={this.getProducts}
          editProducts={this.editProducts}
          inventory={this.state.inventory}
        />
        <Dashboard
          inventory={this.state.inventory}
          getProducts={this.getProducts}
          deleteProduct={this.deleteProduct}
          editProducts={this.editProducts}
        />
      </div>
    );
  }
}

export default App;
