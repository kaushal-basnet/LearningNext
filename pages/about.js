import React from "react";
import styles from "../styles/about.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <h2>About Learning NextJs</h2>
      <h3>Introduction</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, incidunt
        tempora quam fuga molestiae voluptatem sed quaerat molestias corporis,
        voluptas rerum est alias vitae amet corrupti ad, sapiente facilis fugiat
        beatae? Veniam sit ex nisi possimus? Ad molestiae, doloribus dolore
        illum labore omnis quos sunt laborum voluptatibus ipsum voluptatum
        dolores nisi odio recusandae a ea consectetur totam, veniam temporibus
        eveniet perferendis quisquam? Numquam quia, at odio ad tempore laborum
        sunt aliquid iste, possimus, doloribus officia qui quo. Quis inventore
        tenetur vitae deleniti illo! Suscipit minus expedita perferendis placeat
        modi nisi enim voluptates, quam iste nobis corporis, ipsam architecto
        eius sapiente.
      </p>
      <h3>Services</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quod
        porro, sit ratione deserunt ipsam consequatur repellat accusantium
        molestias officiis earum? Est nihil eum aperiam quidem minus. Amet fuga,
        tempora itaque modi vel reiciendis eveniet commodi veniam maiores,
        recusandae enim fugit nisi nulla, vitae consequatur. Quasi eum numquam
        quo repellat.
      </p>
      <ul>
        <p>some of the services in our project</p>
        <li>API</li>
        <li>Endpoints</li>
        <li>Design</li> <p>Summarize path in our project:</p>
        <ol>
          <li>Directory for post or fetch</li>
          <li>Directory for endpoints inside API</li>
          <li>pages</li>
        </ol>
      </ul>
      <h3>Contact us</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
        necessitatibus facilis id! Expedita veniam sit ducimus fugit
        reprehenderit tempore excepturi!
      </p>
    </div>
  );
};
export default About;
