# Verbling Flux/React Challenge 1

## Version 1 - Essentials Only

### Background

This version has no extras added. See verblingFlux2 and verblingFlux3 repos for Firebase Chat and WebRTC chat addons. 

![alt tag](/demo.gif)

### Features

#### Verbling Flummox

This implemention uses a Verbling fork of the Flummox Flux library (https://github.com/verbling/flummox). I initially created a fully working version of this challenge using my regular Flux framework (Alt) first. This was most familiar to me so I thought it a good place to start. Once all functionality was complete, I decided to refactor to use Verbling's Flummox implementation to familiarize myself with Verbling's tech stack (assuming Flummox is still in use ;).

Comparing Alt and Flummox, I will definitely be using Flummox from now on. Although, I did see a note from the author recommending Redux, so I may have a look at that at some point. While they have many similar elements (e.g. registerAsync, isomorphism, etc), I found Flummox to have less boilerplate. I like how actions automatically dispatch their return value, and I found the binding to actions in the store very clean. Flux.createActions and Flux.createStore is nice and simple. I also love the Store architecture itself - setState causing an emitChange is nicely modeled after React. Finally, FluxComponent and FluxComponent connectToStores is great (in verblingFlux2 repo, I played with a custom render function for FluxComponent to limit which state is passed down the tree but then decided it wasn't needed - still, an excellent feature). 

#### Other Features

There should not be anything too surprising in this implementation.. API / WebSocket handling is done by 'Sources' in the /sources folder. I included a slightly modified Dispatcher to handle multiple action dispatches in the same loop. This Dispatcher implementation is very short and light, but could certainly be improved upon (e.g. quantum-flux perhaps). 

classnames package is included for easy manipulation of classNames styling. superagent is included as a light ajax library to avoid including all of jquery. ws is included to handle the websocket connection with the server. 

webpack config was modified to resolve jsx files automatically for imports. verbalisk.css is included to achieve color: red; when a match occurs.

### Run

Open index.html in any browser (Chrome on Windows 7 tested)

### Build

install: npm install

build: npm run build

watch: npm run watch

### Usage

As expected

### Author

Created by Daniel Guillamot - 2015-10-26