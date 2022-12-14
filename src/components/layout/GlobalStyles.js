import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle` 
body, html {
  height: 100%;
}

#root {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

body {
  margin: 0;
  font-family: 'Open Sans', sans-serif;
  background-color: ${({ theme }) => theme.colors.primaryColor};
}

h1, h2, h3, h4 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textColorLight};
}

h1 {
  font-size: 24px;
  @media ${({ theme }) => theme.devices.tabletS} { 
    font-size: 32px;
  }
}

h2 {
  font-size: 21px;
  @media ${({ theme }) => theme.devices.tabletS} { 
    font-size: 28px;
  }
}

h3 {
  font-size: 18px;
  @media ${({ theme }) => theme.devices.tabletS} { 
    font-size: 24px;
  }
}

h4 {
  font-size: 18px;
  @media ${({ theme }) => theme.devices.tabletS} { 
    font-size: 24px;
  }
}

p {  
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textColorLight};
  @media ${({ theme }) => theme.devices.tabletS} { 
    font-size: 18px;
  }
}

a {  
  font-size: 16px;
  @media ${({ theme }) => theme.devices.tabletS} { 
    font-size: 18px;
  }
}
`
export default GlobalStyle;