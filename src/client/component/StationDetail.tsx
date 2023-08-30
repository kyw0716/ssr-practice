import { stationIdStore } from '../stores/stationIdStore';
import { useExternalValue } from '../utils/external-state';

function StationDetail() {
  const stationId = useExternalValue(stationIdStore);

  return <h1>안녕하세요! {stationId}</h1>;
}

export default StationDetail;
