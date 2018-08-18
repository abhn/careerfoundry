import styled from 'styled-components';

export const NavWrapper = styled.div`
    width: 100%;
    height: 50px;
    color: #fff;
    background-color: #223c50;
    display: flex;
    align-items: center;
`;

export const NavInner = styled.div`
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    font-size: 1.1rem;
`;

export const NavCompany = styled.span`
    font-family: 'PT Sans', sans-serif;
`;

export const Container = styled.div`
    display: flex;
    min-height: 100vh;
    flex-direction: column;
`;

export const CourseInfoWrapper = styled.div`
    flex: 1;
`;

export const FooterText = styled.div`
    width: 100%;
    text-align: center;
`;