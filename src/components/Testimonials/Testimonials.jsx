import React from 'react'
import './Testimonials.css'
import Ava1 from '../../assets/fitz-avatar.jpg'

const Testimonials = () => {
  return (
    <section id='Testimonials'>
      <h5>Reviews from clients</h5>
      <h2>Testimonials</h2>

      <div className='container testimonials__containter'>
        <article className='testimonial'>
          <div className='client__avatar'>
            <img src={Ava1} alt="Avatar 1 - Fitz"/>
            </div>
            <h2>CaptainPopCulture</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempor diam eget massa posuere, eu viverra diam sollicitudin. Praesent nisl nunc, volutpat eget augue at, commodo rhoncus nisl. Maecenas non ipsum ultrices tellus fermentum ullamcorper. Phasellus mollis pharetra risus ut varius. Phasellus luctus risus non dui iaculis, nec porta elit finibus. Phasellus maximus tristique iaculis. Nulla facilisi. Suspendisse facilisis et justo quis varius. Praesent fermentum nibh eu justo porttitor, vel tempor eros malesuada. Donec ante est, faucibus ut nisl ac, vehicula blandit nunc. Nulla dignissim neque id risus convallis, eu rutrum ante aliquet. Donec aliquet feugiat nisi, nec dapibus augue eleifend vel. Nunc sed ex ac sem ultricies accumsan ac at augue. Curabitur egestas rutrum urna, dignissim eleifend sem. Phasellus volutpat nisi nibh, at elementum nulla tincidunt quis. Donec rutrum tellus sed enim auctor tempor. Aliquam at nunc convallis, facilisis nibh id, venenatis metus. Phasellus molestie mattis metus, ac venenatis est volutpat sit amet. Suspendisse mattis, urna a pellentesque euismod, nisl libero ullamcorper neque, sed varius arcu quam sit amet justo. Cras egestas sit amet dui id molestie.</p>
        </article>
      </div>
    </section>
  )
}

export default Testimonials