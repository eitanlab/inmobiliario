import { createMuiTheme } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';
import lightBlue from '@material-ui/core/colors/lightBlue';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: orange[500],
    },
     secondary: {
      main: lightBlue[500],
    },
  },
  overrides: {
    MuiButton: {
        containedPrimary: {
            color: '#FFF',
      },
    },
  },
});