import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function BandsCards ({bands, schedule}) {
   /*  const router = useRouter();
    const {name} = router.query
    const band = bands.find(band => band.name === name) */
    
    return (
    <> 
    <div>  
    <ul className='grid' >
    {bands.map((band) => (
          <Link key={band.name + Date.now()} href={`bands/${band.name}`}>
           <> 
           {/* <Image alt={band.name} src={band.logo} width={200} height={200} /> */}
            <h3>{band.name}</h3>
            <p>Genre: {band.genre}</p>            
            <h4>About {band.name}</h4>
            <p>{band.bio}</p></>
            <>
            <ul>
            <li>Monday</li>
            <li>00:00</li>
            <li>MIDGARD STAGE</li>
            </ul>
            <button>LEARN MORE</button></>
          </Link>
      ))}
       
        </ul>
       
        </div>
    </>
  )
}
