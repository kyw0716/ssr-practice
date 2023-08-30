import { useState } from 'react';
import StationDetail from './component/StationDetail';
import { stationIdStore } from './stores/stationIdStore';
import { useExternalState } from './utils/external-state';

function App() {
  const [stationId, setStationId] = useExternalState(stationIdStore);
  const [id, setId] = useState('');

  const goToTestPage = () => {
    setStationId(id);
    location.href = `/test/${id}`;
  };

  return (
    <>
      <h1>Hello World!</h1>
      <input value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={goToTestPage}>테스트</button>
      {stationId !== null && <StationDetail />}
    </>
  );
}

export default App;
