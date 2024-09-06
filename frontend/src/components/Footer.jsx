import { assets } from "../assets/assets"

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img className="mb-5 w-32" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, doloribus placeat explicabo doloremque corrupti facere nam unded exercitationem architecto ipsam odio molestias</p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-grey-600">
            <li>HOME</li>
            <li>ABOUT US</li>
            <li>DELIVERY</li>
            <li>PRIVACY POLICY</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-grey-600">
            <li>+977 9849000012</li>
            <li>contact.shopatus@gmail.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-y text-sm text-center">Copyright2024@ forever.com - All Rights Reserved</p>
      </div>

    </div>
  )
}
export default Footer