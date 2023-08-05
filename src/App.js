import './App.css';
import MyBio from './Pages/MyBio';
import MyBioEdit from './Pages/MyBioEdit';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SkillsEdit from './Pages/SkillsEdit';
import PDF from './Components/PDF';

function App() {
  return (
    <div className="App">
      {/* <PDF /> */}
      <Router>
        <Routes>
          <Route path='/' element={<MyBio />} />
          <Route path='/MyBioEdit' element={<MyBioEdit />} />
          <Route path='/EditSkilss' element={<SkillsEdit />} />
        </Routes>
      </Router>
    </div>
  );

}

export default App;
