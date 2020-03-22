import * as React from "react";
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { Search } from "./Search";
import { StoreProvider } from "../Store";
const { useState } = React;

interface State {
  isDrawerOpen: boolean;
}

export const App: React.FunctionComponent<{ map: google.maps.Map }> = ({ map }) => {
  const [state, setState] = useState<State>({ isDrawerOpen: false });
  return (
    <StoreProvider>
    <Button
      variant="contained"
      color="default"
      style={{
        position: "relative",
        zIndex: 1,
        left: -36,
        top: 120,
        height: 60
      }}
      onClick={() => setState({ isDrawerOpen: !state.isDrawerOpen })}
    >
      {state.isDrawerOpen
        ? <ChevronLeftIcon style={{ position: "relative", left: 18 }} />
        : <ChevronRightIcon style={{ position: "relative", left: 18 }} />}
    </Button>
    <Drawer
      anchor="left"
      open={state.isDrawerOpen}
      variant="persistent"
    >
      <Button
        variant="contained"
        color="default"
        onClick={() => setState({ isDrawerOpen: !state.isDrawerOpen })}
        style={{ margin: "8px 15px 8px 15px" }}
      ><ChevronLeftIcon/></Button>
      <Search />
    </Drawer>
    </StoreProvider>
  );
}
