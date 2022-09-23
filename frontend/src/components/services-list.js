import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchServices } from '../redux/actions/action-creators';
import Loading from './loading';
import Error from './error';
import { useEffect } from 'react';

function ServicesList() {
  const {data, loading, error} = useSelector(state => state.services);
  const dispatch = useDispatch();

  const loadServices = () => dispatch(fetchServices());

  useEffect(() => {
    loadServices()
  }, []);

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error retryAction={loadServices} />
  }

  return (
    <ul>
      {data.map(service => (
        <li key={service.id}>
          <Link to={`/${service.id}/details`}>{service.name}</Link>
        </li>
      ))}
    </ul>
  );
}

export default ServicesList;