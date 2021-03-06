import 'bootstrap/dist/css/bootstrap.min.css'
import 'styles/index.scss'
import { library, config } from '@fortawesome/fontawesome-svg-core';
import {
  faSun,
  faMoon,
  faBorderAll,
  faList,
  faSortNumericDown,
  faSortNumericUp } from '@fortawesome/free-solid-svg-icons';

  config.autoAddCss = false;
  library.add(
    faSun,
    faMoon,
    faList,
    faBorderAll,
    faSortNumericDown,
    faSortNumericUp);

import '@fortawesome/fontawesome-svg-core/styles.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp;
