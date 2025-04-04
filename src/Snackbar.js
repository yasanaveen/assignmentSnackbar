
import React, { useState, useEffect, createContext, useContext } from 'react';


const SnackbarContext = createContext();


const SnackbarProvider = ({ children }) => {
  const [message, setMessage] = useState(null);

  const showSnackbar = (msg) => {
    setMessage(msg);
    setTimeout(() => setMessage(null), 10000); 
  };

  return (
    <SnackbarContext.Provider value={showSnackbar}>
      {children}
      {message && <div style={styles.snackbar}>{message}</div>}
    </SnackbarContext.Provider>
  );
};


const useSnackbar = () => useContext(SnackbarContext);


const url = 'https://dogapi.dog/api/v2/breed';

const Dogs = () => {
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [dogs, setDogs] = useState([]);
  const showSnackbar = useSnackbar();

  useEffect(() => {
    setIsPageLoading(true);
    fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error('Failed to fetch data');
        return response.json();
      })
      .then((response) => {
        setDogs(response.data);
        setIsPageLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        showSnackbar('Something went wrong while fetching Data ');
        setIsPageLoading(false);
      });
  }, [showSnackbar]);

  
  const handleClick = () => {
    showSnackbar('Something went wrong ');
  };

  return (
    <div style={{ padding: '1rem', textAlign: 'left' }}>
      <h1>Dogs List</h1>
      <button onClick={handleClick} style={styles.button}>Fetch The Data</button>

      {isPageLoading ? (
        <p>Loading...</p>
      ) : (
        <ul style={styles.list}>
          {dogs.map((dog) => (
            <li key={dog.id} style={styles.listItem}>{dog.attributes.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

const styles = {
  snackbar: {
    position: 'fixed',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: '#333',
    color: '#fff',
    padding: '12px 24px',
    borderRadius: '8px',
    zIndex: 1000,
    boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
  },
  button: {
    marginTop: '1rem',
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#e74c3c',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    marginBottom: '10px',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  listItem: {
    background: '#f4f4f4',
    margin: '5px 0',
    padding: '10px',
    borderRadius: '5px',
  }
};


export default SnackbarProvider;
export { Dogs };


