import React from 'react';
import AppFlux from '../AppFlux';
import Dashboard from './Dashboard';
import {FluxComponent} from 'flummox/addons/react';

export default class App extends React.Component {
  render() {
    const flux = new AppFlux();
    return (
    	     <FluxComponent flux={flux} connectToStores={['sithlordstore', 'kenobistore']} >
    	       <Dashboard flux={flux} />
    	     </FluxComponent>
    	   );
  }
}