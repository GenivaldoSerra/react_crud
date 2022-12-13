import { ThemeProvider } from '@mui/system';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes/index';
import { LightTheme } from './shared/themes/Light';

export const App = () => {
  return (
    <ThemeProvider theme={LightTheme}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}
