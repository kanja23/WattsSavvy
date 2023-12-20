import './aboutServicesCard.css'

const AboutServicesCard = ({ img, title, content }) => {
  return (
    <div className='aboutServicesCardContainer'>
      <div className='aboutServicesCardL'>
        <img
          src={img}
          alt='aboutServicesCardImg'
          className='aboutServicesCardImg'
        />
      </div>
      <div className='aboutServicesCardR'>
        <h1 className='aboutServicesCardT'>{title}</h1>
        <p className='aboutServicesCardP'>{content}</p>
      </div>
    </div>
  )
}

export default AboutServicesCard
