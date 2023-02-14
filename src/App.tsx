import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer';
import Navbar from './components/Navbar/Navbar';
import Contact from './pages/Contact';
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
          <Route path='/' element={<TheFirm />} />

          <Route path='/practicearea' element={<PracticeAreas />} />
          <Route path='/practicearea/corporate' element={<Corporate />} />
          <Route path='/practicearea/litigation' element={<Litigation />} />
          <Route path='/practicearea/mergersacquisitions' element={<MergersAcquisitions />} />
          <Route path='/practicearea/securitieslaw' element={<SecuritiesLaw />} />
          <Route path='/practicearea/taxlaw' element={<TaxLaw />} />


          <Route path='/lawyers' element={<Lawyers />} />
          <Route path='/lawyers/profile' element={<Profile />} />
          <Route path='/lawyers/profile/:lawyerId' element={<Profile />} />


          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />




        </Routes>
        <Footer />
      </ScrollToTop>
    </div>
  );
}

export default App;

