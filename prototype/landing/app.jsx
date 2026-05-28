/* Mount: render Landing directly at 1440x900.
   No DesignCanvas wrapper since this is the actual browser preview.
*/

function App() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      background: '#f0eee9',
      padding: '24px 24px 80px',
    }}>
      <div style={{
        boxShadow: '0 30px 80px -40px rgba(26,24,20,0.45)',
        borderRadius: 18,
        overflow: 'hidden',
      }}>
        <Landing />
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
