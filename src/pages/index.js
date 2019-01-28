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
      <a href="https://github.com/awave1/cpsc481-project/raw/master/TeamContract.pdf">
        Team Contract
      </a>
    </div>
  </Layout>
);

export default IndexPage;
