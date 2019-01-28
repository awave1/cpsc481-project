import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const IndexPage = () => (
  <Layout>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: `300px`,
        marginBottom: `1.45rem`,
      }}
    >
      <p>Project deliverables will be here</p>
      <Link to="/teamContract">Team Contract</Link>
    </div>
  </Layout>
);

export default IndexPage;
