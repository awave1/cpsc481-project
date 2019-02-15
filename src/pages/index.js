import React from 'react';
import { Link } from 'gatsby';
import Card from '../components/Card';

const IndexPage = ({ data }) => {
  const {
    allMarkdownRemark: { edges },
  } = data;
  const content = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <Card key={edge.node.id} post={edge.node} />);

  return <div style={{ marginTop: 45 }}>{content}</div>;
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          html
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
