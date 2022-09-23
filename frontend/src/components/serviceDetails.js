import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchServiceDetails } from '../redux/actions/action-creators';
import Error from './error';
import Loading from './loading';

function ServiceDetails() {
  const {id} = useParams();
  const {data, loading, error} = useSelector(state => state.serviceDetails);
  const dispatch = useDispatch();

  const loadServiceDetails = () => dispatch(fetchServiceDetails(id));

  useEffect(() => {
    loadServiceDetails()
  }, []);

  if (loading) {
    return <Loading />
  }

  if (error || !data) {
    return <Error retryAction={loadServiceDetails} />
  }

  return (
    <div>
      <h1>{data.name}</h1>
      <h4>{data.price}</h4>
      <p>{data.content}</p>
    </div>
  );
}

export default ServiceDetails;