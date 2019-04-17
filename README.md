# A Tailor.js / React based microfrontend demonstration project

This is a reformulation of this [repo](https://github.com/tsnolan23/tailor-react-spa).

The reason for the reformulation is to have a simple easy to understand domain and demonstrate how micro-frontends can 
and should integrate.  The original project was good at demonstrating sharing UIs to a common index page, but, didn't
show how to integrate them together.

## Design

The project leverages [Tailor](https://github.com/zalando/tailor) and React applications built using Webpack.  
This project doesn't use Create React App scripts to manage the React builds because CRA and it's Webpack setup in 
particular is not friendly to having multiple CRA apps under the same index page.

## How it works

Tailor is a layout service. It is able to parse HTML templates and replace `<fragment>` tags for their respective bundles.

Tailor also injects a RequireJS bundle to your template so you're able to use Webpack Externals to share dependencies across fragments (such as `react`).

## Fragments

Fragments are small applications. 

They might be React applications, or any other implementations.

Fragments do not need to necessarily render something. 

This app consists basically in a couple of fragments:

 - fragment-common
 - fragment-header
 - fragment-menu
 - fragment-checkout

Each fragment contains it's own `webpack.config.js` that specifies how to build it.

## Sharing dependencies with `fragment-common`

Fragments have several cross-dependencies that need to be shared:

 - `react`
 - `react-dom`
 - `prop-types`
 - `classnames`
 - `proppy`
 - `proppy-react`

In order to handle this, there is one fragment called `fragment-common`.

This is the fragment that exports common dependencies across fragments. It is the only one of the fragments who is actually built using `umd` as a `libraryTarget`.

This fragment is mostly necessary in order for you not to share `react` and other cross-fragment dependencies inside of each fragment bundle, making the bundle smaller for each fragment.

## `fragment-*`

All the other fragments are parts of this application.

Those shared dependencies are listed as externals in their respective webpack configurations.

All of them are built using `amd` as a `libraryTarget` in their Webpack configuration files.

The dependency management is handled with RequireJS on runtime.

## Setting up

1. Clone this repository using `git clone https://github.com/armand1m/mosaic-tailor-react-example.git`
1. Install all of the base dependencies with `npm install`
1. Install all of the fragment dependencies with `npm run preinstall`
1. Build the fragments with `npm run build-fragments`

## Running

1. In one terminal, start the fragments servers with `npm run start-fragments`
1. In another terminal, start the Tailor service with `npm start`
1. Navigate to `http://localhost:8080`

## Running in development mode

1. In one terminal, start the fragments watchers with `npm run watch-fragments`
1. In another terminal, start the fragments servers with `npm run start-fragments`
1. In another terminal, start the Tailor service with `npm start`
1. Navigate to `http://localhost:8080`

## References

 - [Mosaic9](https://mosaic9.org)
 - [Tailor Repository](https://github.com/zalando/tailor)
 - [The Recipe For Scalable Frontends (Zalando)](https://www.youtube.com/watch?v=m32EdvitXy4)
 - [Slides](https://www.slideshare.net/Codemotion/dan-persa-maximilian-fellner-the-recipe-for-scalable-frontends-codemotion-milan-2017)
