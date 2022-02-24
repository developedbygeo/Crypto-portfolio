import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './shared/globalStyle';

import Landing from './pages/Landing';
import { myTheme } from './shared/theme';
import Header from './components/Header/Header';

function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <GlobalStyle />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </main>
    </ThemeProvider>
  );
}

export default App;
