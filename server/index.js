import express from 'express';
const app=express();
app.get('/api/items',(_req,res)=>res.json([{id:1,title:'CSS',description:'Première animation'},{id:2,title:'Mon beau titre',description:'Icône animée'},{id:3,title:'GSAP',description:'Séquence interactive'}]));
app.listen(3001,()=>console.log('API sur http://localhost:3001/api/items'));
