import React from 'react'

export default function OtherUserCards({ data= [] }) {
  return (
      <div className="grid grid-cols-3 gap-3 ">
        {data?.map((item) => (
          <MypageCardItem key={item.id} data={item} />
        ))}
      </div>
  )
}
