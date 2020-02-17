import React, { Component } from 'react'


class Product extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isEditing: false,
            editName: ' ',
            editPrice: ' '
        }
    }

    toggleEdit = () => {
        this.setState({
            isEditing: !this.state.isEditing
        })
    }

    handleChangeName = (event) => {
        this.setState({
            editName: event.target.value,
        })
    }

    handleChangePrice = (event) => {
        this.setState({

            editPrice: event.target.value
        })
    }

    render() {
        // console.log(this.props)
        return (
            <div>

                <div>
                    {this.state.isEditing ? (

                        <div>
                            <input placeholder='Name' onChange={this.handleChangeName} />
                            <input placeholder='Price' onChange={this.handleChangePrice} />

                            <button
                                onClick={() => {
                                    this.props.editProducts(this.props.inventory.product_id, { name:this.state.editName, price:this.state.editPrice })
                                    this.toggleEdit()
                                }} >
                                Save
                            </button>
                        </div>
                    ) : (
                            <button onClick={this.toggleEdit} >
                                Edit
                            </button>
                        )}
                    <div className='product-box'>

                        <div className='img-container'>
                            <img className='product-img' />
                            {this.props.inventory.img}
                        </div>

                        <div className="right-side">


                            <div className='name-price-container'>
                                {this.props.inventory.name}
                                {this.props.inventory.price}
                            </div>
                            <div className="delete-container" >

                                <button onClick={() => this.props.deleteProduct(this.props.inventory.product_id)}>delete</button>
                            </div>

                        </div>
                    </div>


                </div>


            </div >
        )
    }
}

export default Product