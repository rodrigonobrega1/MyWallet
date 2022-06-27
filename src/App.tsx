import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./Styles/GlobalStyles";


import Layout from "./components/Layout";
import Dashboard from "./Pages/Dashboard";
import List from "./Pages/List";
import dark from './Styles/Themes/dark';

const App: React.FC = () => {

    return (
        <ThemeProvider theme={ dark }>
            <GlobalStyles />
            <Layout>
                <List />
            </Layout>
            
        </ThemeProvider>
    );
}

export default App;