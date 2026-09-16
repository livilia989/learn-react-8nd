import React from 'react'

const Card = ({ imgUrl, itemName, onButtonClick, detailurl }) => {

  return (
    <div className='card'>
      {/* <img style={{"width": "198px"}} src="https://cf.product-image.s.zigzag.kr/original/d/2026/9/11/200_202609111604146509_27481.gif?width=400&height=400&quality=80&format=webp&transparent=true" alt="지그재그 이미지1" />
      <p>지그재그 이미지 1</p> */}
      {/* <img style={{"width": "198px"}} src="https://cf.image-farm.s.zigzag.kr/original/cms/2026/09/11/202609110039148761_048610.png?quality=80&format=webp&transparent=true&width=1029&height=1188" alt="지그재그 이미지2" />
      <p>지그재그 이미지2</p>
      <img style={{"width": "198px"}} src="https://cf.product-image.s.zigzag.kr/original/d/2026/9/11/41909_202609111107163427_17991.jpeg?width=400&height=400&quality=80&format=webp&transparent=true" alt="지그재그 이미지3" />
      <p>지그재그 이미지3</p> */}
      
      <img style={{"width":"198px"}} src={imgUrl} alt={itemName}  />
      <p>{itemName}</p>
      <button type='button' onClick={() => onButtonClick(itemName)}>제품 페이지로 가기</button>
    </div>
  )
}

export default Card