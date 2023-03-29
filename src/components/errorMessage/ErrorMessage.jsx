import error from '..//../resources/404.svg'

export default function ErrorMessage({errorMessage}) {
  return (
    <div>
      <img height="400px" alt='404 Error' src={error}/>
      <p>{errorMessage}</p>
    </div>
  )
}
