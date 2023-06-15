import { AppBar, ToggleThemeButton } from 'react-admin';

function MyAppBar() {
  return <AppBar toolbar={<ToggleThemeButton />} />;
}

export default {
  MyAppBar,
};
