import { assets } from "../assets/assets"
import Title from "../components/Title"

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'About'} text2={'Us'} />
      </div>
      <div className="my-10 flex flex-col sm:flex-row gap-16 ">
        <img className='w-full max-w-[450px]' src={assets.about_img} alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quaerat! Commodi quam incidunt suscipit illum inventore aliquam eligendi architecto cupiditate consequuntur sunt nisi quae similique ab voluptate fugit, optio cumque?</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit esse exercitationem eum nulla, delectus cupiditate repudiandae qui a pariatur, necessitatibus perspiciatis. Harum ea nam provident labore asperiores obcaecati, soluta ipsum.
            Facilis recusandae itaque distinctio velit, id numquamrepellat culpa earum voluptate!</p>
          <b className="text-gray-800 ">Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit vero accusamus incidunt optio qui illum cum in ex assumenda, atque impedit placeat non rerum. Fugit ipsam illum nulla. Ipsum, placeat.</p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={'Why'} text2={'Choose Us'} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias saepe assumenda, omnis esse ducimus nisi doloribus quo facilis culpa voluptatum distinctio voluptatibus vel, optio, enim error delectus odit eligendi ut?1.5</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convinence:</b>
          <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias saepe assumenda, omnis esse ducimus nisi doloribus quo facilis culpa voluptatum distinctio voluptatibus vel, optio, enim error delectus odit eligendi ut?1.5</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Costumer Service:</b>
          <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias saepe assumenda, omnis esse ducimus nisi doloribus quo facilis culpa voluptatum distinctio voluptatibus vel, optio, enim error delectus odit eligendi ut?1.5</p>
        </div>
      </div>
    </div>
  )
}
export default About