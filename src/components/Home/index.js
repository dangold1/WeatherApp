import React, { Fragment } from 'react';
import SearchBox from './SearchBox';
import CityForecast from './CityForecast';

const Home = () => (
    <Fragment>
        <CityForecast />
        <SearchBox />
    </Fragment>
);

export default Home;
