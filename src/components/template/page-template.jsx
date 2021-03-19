import * as React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from '../../style/colors';

const StyledMain = styled.main`
  height: 100%;
  color: #232129;
  padding: 10px;
  fontFamily: -apple-system, Roboto, sans-serif, serif;
  background-color: ${colors.secondary};
  color: ${colors.primary};
`;

export default function PageTemplate({ children }) {
  // TODO: put into meta
  // <title>Krillian&apos;s blog</title>
  return (
    <StyledMain>
      {children}
    </StyledMain>
  );
}

PageTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};
