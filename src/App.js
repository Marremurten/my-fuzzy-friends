import { useState } from 'react';
import Layout from './components/layout/Layout';
import PetList from './components/lists/PetList';

function App() {
  const [petType, setPetType] = useState('cat');
  return (
    <Layout petType={petType} setPetType={setPetType}>
      <PetList petType={petType} />
    </Layout>
  );
}

export default App;
