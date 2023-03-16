import image from '../assets/home_cover.png'
import '../styles/Banner.css'

const text = 'Chez vous, partout et ailleurs'

function Banner() {
  return (
    <div className="banner">
      <img className="banner_img" src={image} alt="falaises" />
      <div className="banner_transparent"></div>
      <h1 className="banner_txt">{text}</h1>
    </div>
  )
}
export default Banner
