import './homeEfficiencyCard2.css'

const HomeEffiencyCard2 = ({ img, title, content }) => {
  return (
    <div className='homeEfficiencyCardContainer'>
      <div className='homeEfficiencyCardWrapper'>
        <img src={img} alt='card-img' className='homeeffImg' />
        <p className='homeEfficiencyCardP'>{title}</p>
        <div className='homeEfficiencyCardContent'>{content}</div>
      </div>
    </div>
  )
}

export default HomeEfficiencyCard2
