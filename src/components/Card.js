import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const PostTitle = styled.h3`
  margin-top: 0.5rem;
  margin-bottom: 0.25rem;
`;

const PostContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: 0px 0px 50px #0000001a;
  border-radius: 6px;
  padding: 1rem;
  margin-bottom: 48px;
  transition: all 150ms cubic-bezier(0.55, 0, 0.1, 1);

  &:hover {
    box-shadow: 0px 0px 75px #00000012;
  }
`;

const Card = ({ post }) => {
  const {
    html,
    fields: { slug },
    frontmatter: { title },
  } = post;

  return (
    <PostContainer to={slug}>
      <PostTitle>{title}</PostTitle>
    </PostContainer>
  );
};

export default Card;
