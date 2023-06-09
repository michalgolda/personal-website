import styled from "styled-components";
import Image from "next/image";

export const StyledProject = styled.div`
  display: flex;
  row-gap: 16px;
  flex-direction: column;

  @media (${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
    column-gap: 16px;
  }
`;

export const StyledHeader = styled.div`
  display: flex;
  row-gap: 8px;
  flex-direction: column;
`;

export const StyledName = styled.h3`
  font-weight: 900;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.secondary};

  @media (${({ theme }) => theme.breakpoints.md}) {
    font-size: 2rem;
  }
`;

export const StyledTechnologyStack = styled.div`
  display: flex;
  column-gap: 8px;
  flex-wrap: wrap;
  justify-content: left;
`;

export const StyledDescription = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
`;

export const StyledImage = styled(Image)`
  height: auto !important;
  border-radius: 2px;
  position: inherit !important;
`;

export const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;

  @media (${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
  }
`;

export const StyledImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (${({ theme }) => theme.breakpoints.md}) {
    max-width: 512px;
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
`;

export const StyledLinkInTextContainer = styled(StyledLink)`
  display: none;

  @media (${({ theme }) => theme.breakpoints.md}) {
    display: inherit;
  }
`;

export const StyledLinkInProject = styled(StyledLink)`
  display: inherit;

  @media (${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;
