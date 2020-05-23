import React, {Component} from 'react';

import {Cards, Chart, CountryPicker} from '../components';
import styles from './tracker.module.css';
import {fetchData} from '../api';

class Tracker extends Component {
    state = {
        data: {},
        country: ''
    }

    async componentDidMount() {
        const fetchedData = await fetchData();

        //console.log(data);

        this.setState({data: fetchedData})
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);

        this.setState({
            data: fetchedData,
            country: country
        });

        // console.log(fetchedData);
        // console.log(country);
    }


    render() {
        const {data, country} = this.state
        return (
            <div className={styles.container}>
                <h1> Covid-19 Tracker </h1>

                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country} />
                
            </div>
        )
    }
}


export default Tracker;
