declare module '@grzegorzjudas/auth/App' {
    type Props = import('../auth/src/components/App/App').Props;

    const App: React.FunctionComponent<Props>;

    export default App;
}
