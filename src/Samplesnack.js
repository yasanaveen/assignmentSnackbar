import React, { useState } from "react";

const SnackbarExample = () => {
  const [message, setMessage] = useState(null);

  const showSnackbar = (msg) => {
    setMessage(msg);
    setTimeout(() => setMessage(null), 3000); 
  };

  return (
    <div>
      <button onClick={() => showSnackbar("Hello, this is a snackbar!")}>
        Show Snackbar
      </button>

      {message && (
        <div style={{
          position: 'fixed',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: '#333',
          color: '#fff',
          padding: '10px 20px',
          borderRadius: '8px'
        }}>
          {message}
        </div>
      )}
    </div>
  );
};

export default SnackbarExample;
