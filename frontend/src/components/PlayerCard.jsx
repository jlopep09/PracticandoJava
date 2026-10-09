import React from 'react'

const PlayerCard = ({img_link, title, description, badge_1, badge_2, onClick}) => {
  return (
    <div className="card bg-base-100 w-96 hover:shadow-md shadow-accent transition-all duration-300 ease-in-out" onClick={onClick}>
        <figure>
            <img
            src={img_link || "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"}
            alt="Shoes" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">
            {title}
            </h2>
            <p> {description}</p>
            <div className="card-actions justify-end">
            {badge_1 && (
                <div className="badge badge-outline">{badge_1}</div>
            )}
            {badge_2 && (
                <div className="badge badge-outline">{badge_2}</div>
            )}
            </div>
        </div>
    </div>
  )
}

export default PlayerCard