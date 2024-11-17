import Bentos from './components/Bento';

const App = () => {
  return (
    <div>
      <h1>My Bento Box</h1>
      <Bentos
        Bento="This is a bento box"
        style={{ backgroundColor: '#000', border: '1px solid #ccc' }}
        width={400}
        height={200}
        borderRadius={10}
        position={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      />
    </div>
  );
};

export default App;
