import './index.css'

import Blob from 'ui/blob'

export default function Slogan () {
  return (
    <div className="slogan">
      <div className="slogan__content">

        <Blob className="slogan__image"></Blob>
        <h1 className="slogan__title">PetShop</h1>
        <div className="slogan__description">
          Los mejores productos para los peluditos de la casa
        </div>
        {/* <button className="slogan__button">ver productos</button> */}

      </div>
    </div>
  )
}
