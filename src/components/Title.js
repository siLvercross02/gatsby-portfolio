import React from "react"

export default function Title ({ title }) {
  return (
    <div className="section-title">
      <h2>{title || 'Default Title'}</h2>
      <div className="underline"></div>
    </div>
  )
}

