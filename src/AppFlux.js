import { Flux } from 'flummox';
import SithLordActions from './actions/SithLordActions';
import SithLordStore from './stores/SithLordStore';
import KenobiActions from './actions/KenobiActions';
import KenobiStore from './stores/KenobiStore';
import VerbaliskDispatcher from './dispatcher/VerbaliskDispatcher';

export default class AppFlux extends Flux {
  constructor() {
    super();
    
    // dguillamot - custom dispatcher to be more async friendly (via setTimeout). another (heavier) option may be to look at quantum-flux's dispatcher - https://github.com/sterpe/quantum-flux
    this.dispatcher = new VerbaliskDispatcher(); 

    this.createActions('sithlordactions', SithLordActions);
    this.createStore('sithlordstore', SithLordStore, this);

    this.createActions('kenobiactions', KenobiActions);
    this.createStore('kenobistore', KenobiStore, this);
  }
}