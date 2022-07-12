import React from 'react'

export default function Section(props) {
  return(
    <section {...props}>
      <div className="py-5 my-5">
        {props.children}
      </div>
    </section>
  )
}