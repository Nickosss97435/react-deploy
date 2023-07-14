import React from 'react';

import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser"; /* importer emailjs après l'avoir téléchargé*/

import bgImage from '../assets/img/blurred-image-1.jpg';

const Contact = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
      } = useForm();
      const onSubmit = (data) => {
        // console.log(data);
        emailjs.send(
            'service_hjg3gj2',/* ajouter le service donné par emailjs*/
            'template_g55hg6k',/* ajouter la template donné par emailjs*/
            {
                subject: data.subject,
                name: data.name,
                lastname: data.lastname,
                company: data.company,
                phone: data.phone,
                email: data.email,
                message: data.message
            },
            '1FGh54GHGJJGH,_O'/* ajouter lla clé publique donné par emailjs*/
        )
        alert(JSON.stringify("Votre message à bien été envoyé !"));
      }; // votre fonction de soumission de formulaire qui s'invoquera après une validation réussie
      console.log(watch("example")); // vous pouvez regarder une entrée individuelle en transmettant le nom de l'entrée
    
  return (
    <div className="container pt-2 pb-5" style={{ backgroundImage: `url(${bgImage})`, backgroundRepeat:'no-repeat', backgroundSize:'cover'  }}>
      <div className="section-header pt-5 pb-5 mx-5 text-center">
        <h3 className="section-title">
          <span>Nous </span>Contacter
        </h3>
        <h6 className="section-subtitle mx-auto ">
          N'hésitez pas à nous contacter pour toute demande, commentaire ou question que vous pourriez avoir.
        </h6>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="block-label" htmlFor="subject">
            Sujet
          </label>
          <input {...register('subject')} className="form-control" placeholder="Votre Sujet ..." type="text" id="subject" required />
          {errors.subject && <p className="text-[red]">indiquez le sujet de votre mail.</p>}
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Nom
          </label>
          <input {...register('name', {required:true})} className="form-control" placeholder="Votre Nom ..."  type="text" id="name" required />
          {errors.name && <p className="text-[red]">Nom requis</p>}
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="lastname">
            Prénom
          </label>
          <input {...register('lastname', {required:true})} className="form-control" placeholder="Votre Prénom ..." type="text" id="lastname" required />
          {errors.lastname && <p className="text-[red]">Prénom requis</p>}
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="company">
            Société
          </label>
          <input {...register('company')} className="form-control" placeholder="Nom de votre Société..." type="text" id="company" />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="phone">
            N° Téléphone
          </label>
          <input {...register('phone', {required:true})} className="form-control" placeholder="Votre Numéro ..." type="text" id="phone" required />
          {errors.phone && <p className="text-[red]">N° de téléphone requis</p>}
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input {...register('email', {required:true})} className="form-control" placeholder="Votre Email ..." type="email" id="email" required />
          {errors.email && <p className="text-[red]">Email requis</p>}
        </div>
        <div className="mb-3">
          <label className="form-label"  htmlFor="message">
            Message
          </label>
          <textarea {...register('message')} className="form-control" placeholder="Votre message ..." id="message" required />
        </div>
        
        <button className="btn btn-danger" type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default Contact;
