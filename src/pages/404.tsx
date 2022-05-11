import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

const NotFoundPage = () => (
  <Layout>
    <h1>404 not found</h1>
    <Link to="/">Go home</Link>
  </Layout>
);

export default NotFoundPage;
