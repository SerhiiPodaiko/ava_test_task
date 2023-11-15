import './Preloader.css'

const Preloader = () => (
  <div className='w-full flex justify-center loading'>
    <div className='lds-roller'>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
)

export default Preloader
