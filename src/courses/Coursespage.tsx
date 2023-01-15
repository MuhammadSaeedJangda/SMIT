import React from 'react'
import Courses from '../components/courses/Courses'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import Form from '../components/container/Form'

const Coursespage = () => {
  return (
    <div>
      <Navbar/>
      <Courses />
      <Form />
      <Footer />
    </div>
  )
}

export default Coursespage;
