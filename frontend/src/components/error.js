function Error({retryAction}) {
  return (
    <div className='error'>
      <div>Произошла ошибка!</div>
      <button onClick={retryAction}>Повторить запрос</button>
    </div>
  );
}

export default Error;