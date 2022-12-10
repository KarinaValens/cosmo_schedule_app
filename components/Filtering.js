import Image from "next/image"//this module automaticaly automise the img with Squoosh
import bi_search from "../public/media/bi_search.png" // it is necesary import the images as so
import bi_filter_right from "../public/media/bi_filter_right.png" // it is necesary import the images as so

export default function Filtering() {

  return (
    <div className="flex-container">
      <div className="icon-container">
      <Image  className="icon" src={bi_search} alt={""} width={"15"} height={"15"} priority sizes="(max-width: 700px) 100vw, 700px" />
      <input className="input border1" type="text" placeholder='Search by band name'/>

      </div>
      <div className="icon-container">
      <Image  className="icon" src={bi_filter_right} alt={""} width={"15"} height={"15"} priority sizes="(max-width: 700px) 100vw, 700px" />
      <input className="input border1" type="text" placeholder='FIlter by genre'/>
      </div>
{/*         <input className="input" type="text" placeholder='FIlter by day'/>
 */}    </div>
  
  )
}



	
