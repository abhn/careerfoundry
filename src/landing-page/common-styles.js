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
    width: 100%;
    max-width: 600px;
    margin: 40px auto 0;
    padding: 0 10px;
`;

export const FooterText = styled.div`
    width: 100%;
    text-align: center;
`;

export const TitleText = styled.div`
    color: #444;
    font-size: 1.5rem;
    text-align: center;
    font-family: 'PT Sans', sans-serif;
`;

export const CourseTitle = styled.div`
    font-size: 2rem;
    color: #222;
    font-weight: bold;
    font-family: 'PT Sans', sans-serif;
    margin: 5px 0;
`;

export const CourseAuthor = styled.div`
    font-weight: 400;
    color: #222;
    font-family: 'PT Sans', sans-serif;
    margin: 5px 0 20px;
`;

export const CourseStarts = styled.div`
    font-weight: 400;
    color: #222;
    font-family: 'PT Sans', sans-serif;
`;

export const ConvincedTitle = styled.div`
    font-weight: 600;
    color: #444;
    font-size: 1.2rem;
    font-family: 'PT Sans', sans-serif;
    margin: 15px 0 10px;
`;