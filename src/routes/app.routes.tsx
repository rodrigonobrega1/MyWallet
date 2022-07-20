import React from 'react';

import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Dashboard from "../Pages/Dashboard";
import List from "../Pages/List";


const AppRoutes: React.FC = () => (
    <Layout>
        <Routes>
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/list/:movimentType" element={<List />} />

        </Routes>
    </Layout>
);

export default AppRoutes;