import PerroImg from 'assets/img/perro.png'

export default function Blob (props) {
  return (
    <svg viewBox="28 30 136 140" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M162.5 77.4c6.4 21.9-8.9 48.7-31.7 65.3-22.8 16.7-53.2 23.3-74.7 9.6-21.5-13.8-34.2-47.8-25.4-73C39.5 54 69.8 37.6 98.9 37.9c29.2.4 57.2 17.6 63.6 39.5z"
      />
      <image xlinkHref={PerroImg} x="20" y="20" width="150" height="150"></image>
    </svg>
  )
}
