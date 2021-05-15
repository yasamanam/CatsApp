import React, { Suspense } from "react";
import { Route, Router, Switch } from "react-router-dom";

import Loading from "./components/Loading";
import SideBar from "./components/SideBar";
import { StyledApp } from "./styled";
import { createBrowserHistory } from "history";

const Gallery = React.lazy(() => import("./components/Gallery"));
const Home = React.lazy(() => import("./components/Home"));

const history = createBrowserHistory();

function App() {
  return (
    <StyledApp>
      <Suspense fallback={<Loading />}>
        <Router history={history}>
          <section>
            <SideBar />
          </section>
          <Switch>
            <Route path="/categories/:id" component={Gallery} />
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </Suspense>
    </StyledApp>
  );
}

export default App;
