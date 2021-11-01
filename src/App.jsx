import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import AuthProvider from './context/AuthProvider';
import Details from './pages/Details/Details';
import Home from './pages/Home/Home';
import LogIn from './pages/LogIn/LogIn';
import ManageAllBookings from './pages/ManageAllBookings/ManageAllBookings';
import MyBookings from './pages/MyBookings/MyBookings';
import NewDestination from './pages/NewDestination/NewDestination';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import Register from './pages/Register/Register';
import PrivateRoute from './routes/PrivateRoute/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <LogIn />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <PrivateRoute path="/destinations/:id">
            <Details />
          </PrivateRoute>
          <PrivateRoute path="/mybookings">
            <MyBookings />
          </PrivateRoute>
          <PrivateRoute path="/newbooking">
            <NewDestination />
          </PrivateRoute>
          <PrivateRoute path="/manage">
            <ManageAllBookings />
          </PrivateRoute>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
