import React from 'react'
import Card from './Card'

const product = () => {
  return (
    <>
    <h1 className='text[3.5rem] font-extrabold text-center'>Here You Can See Card!</h1>
    <div className='flex flex-wrap justify-center gap-15 p-10'>
    <Card heading="Harley" src="https://cdn.bikedekho.com/processedimages/harley-davidson/custom-1250/source/custom-12506664382718732.jpg" />
      <Card heading="HONDA 400CC" src="https://www.rushlane.com/wp-content/uploads/2021/12/2022-honda-400cc-cb400x-cb400r-launch-price-6.jpg" />
      <Card heading="Hondacl400" src="https://global.honda/content/dam/site/global-en/newsroom-new/cq_img/worldnews/1998/2980922/01.jpg" />
      <Card heading="Motohar" src="https://s.alicdn.com/@sc04/kf/H8c47b5de905848d3a6b42c71ffdb3600j.jpg_300x300.jpg" />
      <Card heading="Tesla" src="https://www.pngplay.com/wp-content/uploads/13/Tesla-Roadster-Transparent-Background.png" />
      <Card heading="Buggati" src="https://www.pngplay.com/wp-content/uploads/9/Luxury-Car-PNG-Clipart-Background.png" />
      <Card heading="Dodge" src="https://www.pngplay.com/wp-content/uploads/12/Dodge-Background-PNG-Clip-Art-Image.png" />
      <Card heading="Civic Oriel" src="https://www.pngplay.com/wp-content/uploads/13/Honda-Civic-Type-R-PNG-Background.png" />
    </div>
    </>
  )
}

export default product
