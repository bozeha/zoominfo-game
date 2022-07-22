
import { createGlobalStyle } from 'styled-components'
import bg from './assets/bg.jpg'
const GlobalStyles = createGlobalStyle`
  body {
    background-image:url('${bg}');
    background-repeat:no-repeat;
    background-size:cover;
    margin: 0;
    padding: 0;
    
  }
`

export default GlobalStyles