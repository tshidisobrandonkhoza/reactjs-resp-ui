import { Link } from 'react-router-dom'

function CardItem(props) {
  return (
    <>
      <li className='cards--item'>
        <Link to={props.path} className='cards--item-link'>
          <figure className='cards-item-picWrap'  data-category={props.label}>
            <img 
            src={props.src} 
            alt=''
            className='cards--item-img'
            />
          </figure>
          <div className='cards--item-info'>
            <h5 className='cards--item-text'>
              {props.text}
            </h5>
          </div>
        </Link>
      </li>
    </>
  )
}

export default CardItem
