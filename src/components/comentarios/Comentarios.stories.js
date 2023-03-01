import React from "react";
import Comentarios from "./Comentarios";
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

export default{
    title: 'sis719/comentarios',
    component: Comentarios,
}

const Template = (args)=> <Comentarios   {...args} />


export const comentario = Template.bind({});
comentario.args={
    sis719:'',
    num:2022,
    
}

export const sis719 = Template.bind({});
sis719.args={
    sis719:'Seminario de sistemas',
    num:2025,
    
}


