import { Link } from 'wouter'

const LEVELS_URL = [
  {
    id:10,
    label: 'Easy',
    route: '/EasyMode'
  }
]

export default function Menu() {
  return (
    <div className='grid place-content-center max-w-2xl gap-y-10'>
      {LEVELS_URL.map((level) => (
        <nav key={level.id} className='grid grid-col'>
          <Link href={level.route} >
            <a className='text-center text-2xl font-mono font-bold border-2 border-[#222] py-4 px-6 rounded-full hover:border-[#444]'>{level.label}</a>
          </Link>
        </nav>
      ))}
    </div>
  )
}
