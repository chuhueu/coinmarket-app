import type { NextPage } from 'next'
import Header from '../components/Header'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className='min-h-screen'>
      <Header />
      <div className='mt-10'></div>
      {/* Trending */}
      <div className='mt-20'></div>
      {/* CMC table */}
    </div>
  )
}

export default Home
