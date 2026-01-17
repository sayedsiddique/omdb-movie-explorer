import React, { useEffect } from 'react'
import { DetailCard } from '../components'
import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks';

export const DetailsPage = () => {
  const params = useParams();
  const {data:item, error, setUrl, isLoading} = useFetch();

  useEffect(() => {
    const itemId = params.id;
    const URL = `${process.env.REACT_APP_API_URL}${itemId}`;
    setUrl(URL);
  });

  const errorTitle = 'Something went wrong. Please try again';

  return (
    <main>
      <section>
        <h2 className='dark:text-slate-50 text-slate-800 text-4xl'>{ error ? errorTitle : '' }</h2>
      </section>
      { item && <DetailCard item={item} />}
    </main>
  )
}
