# microfrontends

A sample starter project for apps using [Module Federation](https://webpack.js.org/concepts/module-federation/) and [NPM Workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces). Tech stack consists of:

- **React v17**
- **TypeScript** *(with remote components typesafety)*
- **Redux** *(fully sandboxed - child apps cannot access parent store)*
- **Routing** *(react-router with virtual routing inside microfrontend, persistent through localStorage)*
- **CSS encapsulation** *(global styles from parent app not applied to child and vice-versa)*
- **Docker** *(images ready for production and testing)*

Lighthouse performance score:

![lighthouse score](https://user-images.githubusercontent.com/3832059/115778047-5a57a200-a3b6-11eb-902c-87b33266aabf.png)

## TODO

- **Material UI support in microfrontends**

    By extracting styles inside it through `<StyleProvider />` and JSS, to include as `<style />` inside the shadow DOM. Currently blocked due to Material-UIs issue with StyleContext being re-created for components imported from `design-system` package. Question asked [on StackOverflow](https://stackoverflow.com/questions/67336558/use-single-stylescontext-when-importing-component-from-custom-mui-based-library).

- **Move microfrontend logic to separate npm package**

    React components, functions, handlers, etc, should be moved to separate package and published, so that will be easy to use in other microfrontend-based applications.

- **Hot Module Replacement in microfrontends** 🚫

  Blocked - webpack [does not yet support HMR](https://github.com/module-federation/module-federation-examples/issues/358) in applications that expose anything through Module Federation. It's on [the roadmap](https://webpack.js.org/blog/2020-12-08-roadmap-2021/#hot-module-replacement-for-module-federation).

- **Fix VScode reporting errors on microfrontend dynamic import** ⌛

  Question asked [on StackOverflow](https://stackoverflow.com/questions/67213082/vscode-ts-server-not-seeing-d-ts-files-defined-in-include-section-of-tsconfig) and [on Github](https://github.com/module-federation/module-federation-examples/issues/20).

## Done

- **Hot Module Replacement in core app** ✔️
- **TypeScript support everywhere** ✔️
- **Global CSS from parent app not applied to microfrontends** ✔️
- **Ability for microfrontends to define their own global CSS not applied to parent apps** ✔️
- **Error handling for microfrontends** ✔️
- **Sandboxed redux store in all apps** ✔️
- **Routing separate for every application, but working together** ✔️
