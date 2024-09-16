import { FC } from "react"
import { IconSVG } from "../../types"

const Github: FC<IconSVG> = ({ fill = ['none', '#DADADA', 'white'] }) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill={fill[0]} xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_201_3635)">
        <path
          d="M12 1.00001C9.11346 0.970682 6.33338 2.08862 4.27073 4.10814C2.20809 6.12766 1.03166 8.8835 1 11.77C1.01112 14.0512 1.74494 16.2701 3.09606 18.1082C4.44718 19.9462 6.34608 21.3087 8.52 22C9.07 22.1 9.27 21.77 9.27 21.48C9.27 21.19 9.27 20.55 9.27 19.65C6.21 20.3 5.56 18.21 5.56 18.21C5.3563 17.5539 4.92323 16.9931 4.34 16.63C3.34 15.97 4.42 15.98 4.42 15.98C4.76565 16.0262 5.09635 16.1501 5.38731 16.3423C5.67826 16.5346 5.92192 16.7902 6.1 17.09C6.41033 17.6281 6.91953 18.0229 7.51801 18.1894C8.11649 18.3558 8.75639 18.2806 9.3 17.98C9.35591 17.4324 9.60389 16.9223 10 16.54C7.56 16.27 5 15.35 5 11.22C4.97818 10.1427 5.37624 9.09912 6.11 8.31001C5.77583 7.38508 5.81529 6.36633 6.22 5.47001C6.22 5.47001 7.15 5.18001 9.22 6.57001C11.0219 6.08985 12.9181 6.08985 14.72 6.57001C16.82 5.18001 17.72 5.47001 17.72 5.47001C18.1247 6.36633 18.1642 7.38508 17.83 8.31001C18.5808 9.08466 19.0005 10.1212 19 11.2C19 15.34 16.42 16.25 14 16.52C14.265 16.7773 14.4697 17.0901 14.5994 17.4359C14.729 17.7817 14.7805 18.1519 14.75 18.52V21.47C14.75 21.47 14.95 22.1 15.5 21.99C17.6678 21.2944 19.5603 19.9316 20.9072 18.0962C22.2541 16.2607 22.9866 14.0466 23 11.77C22.9683 8.8835 21.7919 6.12766 19.7293 4.10814C17.6666 2.08862 14.8865 0.970682 12 1.00001Z"
          fill={fill[1]} />
      </g>
      <defs>
        <clipPath id="clip0_201_3635">
          <rect width="24" height="24" fill={fill[2]} />
        </clipPath>
      </defs>
    </svg>
  )
}
export default Github
