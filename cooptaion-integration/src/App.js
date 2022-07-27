import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import Navbar from './shared/components/Navigation/NavBar';

import Offers from './offres/pages/Offers.jsx';
import OfferDetails from './offres/pages/OfferDetails.jsx';

import Hello from './testALA/helo';
import Admin from './admin/components/RecPage';
 
import AuthPage from './authentification/authPage';

function App() {
  return (

    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/offers" element={<Offers items={offers} />} />
        <Route path="/offers/:offerId" element={<OfferDetails />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </Router>


    // AccepteProfile()
  );
}
const offers = [
  {
    id: 'off1',
    title: 'Dev JAVA',
    image:
      'https://www.datasciencecentral.com/wp-content/uploads/2021/10/8667507462.jpeg',
    description: 'This offers seems to be good for youThis offers seems t offers seems to be good for youThis offers seems to be good for youThis offers seems to be good for you',

  },
  {
    id: 'off2',
    title: 'Dev Mobile Flutter',
    image:
      'https://sannacode.com/storage/app/uploads/public/5ee/897/555/5ee8975550eff237186992.png',
    description: 'This offers seems to be good for you',

  },
  {
    id: 'off3',
    title: 'Dev JAVA',
    image:
      'https://www.datasciencecentral.com/wp-content/uploads/2021/10/8667507462.jpeg',
    description: 'This offers seems to be good for youThis offers seems to be  good for youThis offers seems to be good for youThis offers seems to be good for youThis offers seems to be good for you',

  }
  , {
    id: 'off4',
    title: 'Dev JAVA',
    image:
      'https://www.datasciencecentral.com/wp-content/uploads/2021/10/8667507462.jpeg',
    description: 'This offers seems to be good for youThis offers seems to be good for youThis offers seems to be good for youThis offers seems to be good for youThis offers ',

  }
  , {
    id: 'off5',
    title: 'Dev JAVA',
    image:
      'https://www.datasciencecentral.com/wp-content/uploads/2021/10/8667507462.jpeg',
    description: 'This offers seems to be good for youThis offers seems to be good for youThis offers seems to be good for youThis offers seems to be good for youThis offers seems to be  ',

  }, {
    id: 'off6',
    title: 'Dev Python',
    image:
      'https://www.datasciencecentral.com/wp-content/uploads/2021/10/8667507462.jpeg',
    description: 'This offers seems to be good for youThis offers seems to be good for youThis offers seems to be good for youThis offers seems to be good for youThis offers seems to be good for youThis offers seems to be good for youThis offers seems to be good for youThis offers seems to be good for youThis offers seems to be good for youThis offers seems to be good for youThis offers seems to be good for youThis offers seems to be good for youThis offers seems to be good for youThis offers seems to be good for youThis offers seems to be good for youThis offers seems to be good for youThis offers seems to be  ',

  },
];

export default App;
