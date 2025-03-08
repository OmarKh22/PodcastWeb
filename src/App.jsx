import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LayOut from './Components/LayOut/LayOut';
import Home from './Components/Home/Home';
import PodcastDetails from './Components/PodcastDetails/PodcastDetails'; 
import NotFound from './Components/NotFound/NotFound';
import { PodcastProvider } from './Components/Context/getPodcasts';


function App() {
  const routes = createBrowserRouter([
    {
      path: "/", 
      element: <LayOut />, 
      children: [
        { index: true, element: <Home /> }, 
        { path: "home", element: <Home /> },
        { path: "podcast/:id", element: <PodcastDetails/>}

      ]
    },
    { path: "*", element: <NotFound /> }
  ]);

  return (
    <PodcastProvider>
      <RouterProvider router={routes} />
    </PodcastProvider>
  );
}

export default App;
