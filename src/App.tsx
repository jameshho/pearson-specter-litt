import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer';
import Navbar from './components/Navbar/Navbar';
import Contact from './pages/Contact/Contact';
import Lawyers from './pages/Lawyers';
import Profile from './pages/Lawyers/collapsable/Profile';
import NotFound from './pages/NotFound';
import PracticeAreas from './pages/PracticeAreas';
import Corporate from './pages/PracticeAreas/Corporate';
import Litigation from './pages/PracticeAreas/Litigation';
import MergersAcquisitions from './pages/PracticeAreas/MergersAcquisitions';
import SecuritiesLaw from './pages/PracticeAreas/SecuritiesLaw';
import TaxLaw from './pages/PracticeAreas/TaxLaw';
import TheFirm from './pages/TheFirm';
import ScrollToTop from './util/ScrollToTop';



function App() {
  return (
    <div>
      <ScrollToTop>
        <Navbar />
        <Routes>
          {/* <Route path='/' element={<TheFirm />} /> */}
          <Route path='/pearson-specter-litt' element={<TheFirm />} />


          <Route path='/pearson-specter-litt/practicearea' element={<PracticeAreas />} />
          <Route path='/pearson-specter-litt/practicearea/corporate' element={<Corporate />} />
          <Route path='/pearson-specter-litt/practicearea/litigation' element={<Litigation />} />
          <Route path='/pearson-specter-litt/practicearea/mergersacquisitions' element={<MergersAcquisitions />} />
          <Route path='/pearson-specter-litt/practicearea/securitieslaw' element={<SecuritiesLaw />} />
          <Route path='/pearson-specter-litt/practicearea/taxlaw' element={<TaxLaw />} />


          <Route path='/pearson-specter-litt/lawyers' element={<Lawyers />} />
          <Route path='/pearson-specter-litt/lawyers/profile' element={<Profile />} />
          <Route path='/pearson-specter-litt/lawyers/profile/:lawyerId' element={<Profile />} />


          <Route path='/pearson-specter-litt/contact' element={<Contact />} />
          <Route path='/pearson-specter-litt/*' element={<NotFound />} />




        </Routes>
        <Footer />
      </ScrollToTop>
    </div>
  );
}

export default App;

