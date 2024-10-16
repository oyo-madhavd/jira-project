import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Modal from './components/Modal';

function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <button onClick={handleOpenModal}>
        Create +
      </button>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
}

export default App;
