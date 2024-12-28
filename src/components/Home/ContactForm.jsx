import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
    alert("Gracias por contactarnos!");
  };

  return (
    <section className="home-section contact">
      <h2>Contáctanos</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <label>Nombre</label>
        <input
          type="text"
          name="name"
          placeholder="nombre"
          onChange={handleChange}
          required
        />
        <label>Correo</label>
        <input
          type="text"
          name="email"
          placeholder="correo"
          onChange={handleChange}
          required
        />
        <label>Mensaje</label>
        <textarea
          name="message"
          placeholder="Tu mensaje"
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default ContactForm;
