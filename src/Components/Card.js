import React from 'react'

export default function Card() {
  return (
    <div>
        <div><div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px"  }}>
        <img src="https://th.bing.com/th/id/OIP.Wp6XgnYRrIXB2P0mSTBhBAHaEo?w=304&h=190&c=7&r=0&o=5&pid=1.7" className="card-img-top" alt="sorry" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">this is some important text.</p>
          <div className='container w-100'>
            <select className='m-2 h-100  bg-success rounded' >
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1} >{i + 1}</option>
                )
              })}
            </select>

            <select className='m-2 h-100 bg-success rounded'>
              <option value='half'>Half</option>
              <option value='half'>Full</option>
            </select>
            <div className='d-inline h-100 fs-5'>Total price</div>
          </div>

        </div>
      </div></div>
    </div>
  )
}
