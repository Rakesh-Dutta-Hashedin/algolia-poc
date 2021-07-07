import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
  Highlight,
} from 'react-instantsearch-dom';
import PropTypes from 'prop-types';
import './App.css';
import faker from 'faker';

const searchClient = algoliasearch(
  '27IFF5CBXT',
  '4c15cb68b602122f9efbeba0597186e1'
);

// const searchClient = algoliasearch(
//   '27IFF5CBXT',
//   '7bc1f8a88b2d3d63157f8b7697c0a07f'
// );

function App() {
  // const fackerData = [];

  // for (let i = 0; i < 40; i++) {
  //   const firstName = faker.name.firstName();
  //   const lastName = faker.name.lastName();
  //   const jobTitle = faker.name.jobTitle();
  //   const prefix = faker.name.prefix();
  //   const suffix = faker.name.suffix();
  //   const jobArea = faker.name.jobArea();
  //   const phone = faker.phone.phoneNumber();
  //   fackerData.push({
  //     firstName,
  //     lastName,
  //     jobTitle,
  //     prefix,
  //     suffix,
  //     jobArea,
  //     phone,
  //   });
  // }
  // console.log("faker data", JSON.stringify(fackerData));
  return (
    <div>
      <header className="header">
        <h1 className="header-title">
          <a href="/">ais-ecommerce-demo-app</a>
        </h1>
        <p className="header-subtitle">
          using <a>React InstantSearch</a>
        </p>
      </header>

      <div className="container">
        <InstantSearch searchClient={searchClient} indexName="algolia-poc-2">
          <div className="search-panel">
            <div className="search-panel__results">
              <SearchBox
                className="searchbox"
                translations={{
                  placeholder: 'search here...',
                }}
              />
              <Hits hitComponent={Hit} />

              <div className="pagination">
                <Pagination />
              </div>
            </div>
          </div>
        </InstantSearch>
      </div>
    </div>
  );
}

function Hit(props) {
  // console.log('props***', props);
  return (
    <div>
      {/* <img src={props.hit.image} align="left" alt={props.hit.name} /> */}
      {/* algolia-poc-2 */}
      {/* <div className="hit-name">
        <Highlight attribute="firstname" hit={props.hit} />
      </div>
      <div className="hit-description">
        <Highlight attribute="lastname" hit={props.hit} />
      </div>
      <Highlight attribute="zip_code" hit={props.hit} /> */}

      <div className="hit-name">
        {`${props.hit.prefix} `}
        <Highlight attribute="firstName" hit={props.hit} />
        {` `}
        <Highlight attribute="lastName" hit={props.hit} />
        {` ${props.hit.suffix},`}
      </div>
      <div className="hit-description">
        <Highlight attribute="jobTitle" hit={props.hit} />
        {`, ${props.hit.jobArea}, `}
        <Highlight attribute="jobArea" hit={props.hit} />
        <Highlight attribute="phone" hit={props.hit} />
      </div>
    </div>
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default App;
