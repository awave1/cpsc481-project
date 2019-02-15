import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';

import 'katex/dist/katex.min.css';

const EditContainer = styled.a`
  display: flex;
  align-items: center;
  font-family: Hack, monospace;
  margin: 1.5rem 0;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const PagingContainer = styled.ul`
  display: flex;
  list-style: none;
  margin: 1.5rem 0;
`;

const PageLink = styled(Link)`
  font-family: Hack, monospace;

  &:hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 426px) {
    font-size: 13px;
  }
`;

const Article = styled.article`
  ul {
    margin-left: 2rem;
  }
`;

const Page = props => {
  const css = {
    margin: `0 ${props.left ? 'auto' : '0'} 0 ${props.right ? 'auto' : '0'}`,
  };

  return (
    <li style={css}>
      <PageLink to={props.to}>{props.children}</PageLink>
    </li>
  );
};

const PostHeader = props => {
  const Container = styled.div`
    margin: 1rem 0;

    h1 {
      margin: 0;
    }
  `;

  return (
    <Container>
      <h1>{props.title}</h1>
    </Container>
  );
};

function Template(props) {
  const {
    markdownRemark: {
      frontmatter: { title, date },
      html,
    },
  } = props.data;
  const { slug } = props.pageContext;

  return (
    <Article>
      <PostHeader title={title} date={date} />
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Article>
  );
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`;

export default Template;
