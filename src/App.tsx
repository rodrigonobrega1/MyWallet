import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./Styles/GlobalStyles";


import Layout from "./components/Layout";
import Dashboard from "./Pages/Dashboard";
import dark from './Styles/Themes/dark';

const App: React.FC = () => {

    return (
        <ThemeProvider theme={ dark }>
            <GlobalStyles />
            <Layout>
                <Dashboard />
            </Layout>
            
        </ThemeProvider>
    );
}

export default App;