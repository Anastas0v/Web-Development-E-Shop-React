import './App.css';
import {Component} from "react";
import Manufacturers from "../Manufacturers/manufacturers";
import EShopService from "../../repository/eShopRepository";

class App extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            manufacturers: []
        }
    }

    loadManufacturers = () => {
        EShopService.fetchManufacturers()
            .then((data) => {
                this.setState({
                    manufacturers: data.data
                })
            });
    }

    componentDidMount() {
        this.loadManufacturers();
    }

    render() {
        return (
            <div>
                <Manufacturers manufacturers={this.state.manufacturers}/>
            </div>
        )
    }
}

export default App;
