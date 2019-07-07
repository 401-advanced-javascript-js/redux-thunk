/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';

import app from './app.module.scss';

import { fetchPeople } from './redux/people-actions';
import { fetchPerson } from './redux/person-actions';

const peopleURL = 'https://swapi.co/api/people/';

class App extends React.Component {
  render() {
    return (
      <>
        <button onClick={() => this.props.fetchPeopleData(peopleURL)}>Get The People</button>

        <section className={app.people}>
          <ul>
            {this.props.people.map((result, i) => (
              <li onClick={() => this.props.fetchPersonData(result)} key={i}>
                {result.name}
              </li>
            ))}
          </ul>

          <div className={app.person}>
            {Object.keys(this.props.person).map((key, i) => (
              <div key={i}>
                <span>{key}:</span>
                <span>{this.props.person[key]}</span>
              </div>
            ))}
          </div>
        </section>
      </>
    );
  }
}

const mapStoreStateToProps = state => ({
  people: state.people,
  person: state.person,
});

const mapDispatchToProps = dispatch => ({
  fetchPeopleData: url => dispatch(fetchPeople(url)),
  fetchPersonData: data => dispatch(fetchPerson(data)),
});

export default connect(
  mapStoreStateToProps,
  mapDispatchToProps,
)(App);
