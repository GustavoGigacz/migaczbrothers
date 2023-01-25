import { createGlobalStyle } from 'styled-components';
import { themeOptions } from '../Contexts/ThemeContext';

interface VariablesProps {
  theme: themeOptions;
}

const Variables = createGlobalStyle<VariablesProps>`
  :root {
    --dark-primary: #161616;
    --dark-secondary: #242424;

    

    --container-width: 1400px;
 
    --rounded: 8px;
  }
`;

export default Variables;
