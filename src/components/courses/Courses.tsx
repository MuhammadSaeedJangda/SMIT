import React from 'react';
import { Card } from 'antd';
import { Button } from 'antd';
import "./Courses.css";

const { Meta } = Card;

const data = [
  {
    title: "CCNP ROUTING & SWITCHING",
    description: "Dear Youth Of Karachi, As we are committed to the cause to develop Pakistan technologically, We are announcing another life changing course for the youth of karachi only Male. An amazing opportunity for all of you. Admissions Starting From 11th December 2022 to 25th December 2022.",
    image: "CISCO1.png"
  },
  {
    title: "TECNO KIDS",
    description: "Dear Pakistani Kids (Both Girls & Boys) We are offering this online course to school-going kids to educate them about upcoming worldwide technologies.",
    image: "../TECNO.png"
  },
  {
    title: "WEB & MOBILE HYBIRD APP DEVELOPMENT",
    description: " Dear Youth of Karachi,Here is surprise for you, we are announcing Web & MobiApp Development Course for Karachi Male Candidates.",
    image: "../WEB.png"
  },
  {
    title: "Mobile Repairing",
    description: " Dear Youth of Karachi,Here is opportunity for you, we are announcing Mobile Repairing Course for Karachi Male Candidates.",
    image: "../Mobile.jpg"
  },
  {
    title: "Graphic Designing & Video Animation",
    description: " Dear Youth of Karachi,Here is surprise for you, we are announcing Graphic Designing Course for Karachi Male Candidates.",
    image: "../Graphic.jpg"
  },
  {
    title: "AI & ChatBot",
    description: " Dear Youth of Karachi,Here is surprise for you, we are announcing AI & ChatBot Course for Karachi Male Candidates.",
    image: "../Ai.jpg"
  },
  {
    title: "Python",
    description: " Dear Youth of Karachi,Here is surprise for you, we are announcing Python Course for Karachi Male Candidates.",
    image: "../Python.jpg"
  },
  {
    title: "AI & Data Science",
    description: " Dear Youth of Karachi,Here is surprise for you, we are announcing AI & Data Science Course for Karachi Male Candidates.",
    image: "../Data.jpg"
  }
]

const Courses: React.FC = () => (
  <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center",marginTop: "6vh" }}>
    {data.map((item, index) => (
      <Card 
        hoverable
        style={{ width: 277, marginLeft: "7vh", marginBottom: "20px" }}
        cover={<img alt="example" src={item.image} />}
      >
        <Meta title={item.title} description={item.description} />
        <Button type="primary" style={{ marginTop: "25px" }}>Apply</Button>
      </Card>
    ))}
  </div>
);

export default Courses;
