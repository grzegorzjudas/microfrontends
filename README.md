# microfrontends

## TODO

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
