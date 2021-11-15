// création du routeur Express pour ce module
const express = require('express');
const routeur = express.Router();
const affichageControl = require('../controllers/ctrlAffichage');

// afficher les pages
routeur.get('/', affichageControl.afficher_accueil)
    .get('/accueil', affichageControl.afficher_accueil)
    .get('/connexion', affichageControl.afficher_connexion)

    .get('/liste_clients', affichageControl.afficher_liste_clients)
    .get('/liste_ordonnances', affichageControl.afficher_liste_ordonnances)
    .get('/liste_stocks', affichageControl.afficher_liste_stocks)
    .get('/liste_medecins', affichageControl.afficher_liste_medecins)
    .get('/liste_mutuelles', affichageControl.afficher_liste_mutuelles)
    .get('/liste_pathologies', affichageControl.afficher_liste_pathologies)

    .get('/form_client', affichageControl.afficher_form_client)
    .get('/form_ordonnance', affichageControl.afficher_form_ordonnance)
    .get('/form_stock', affichageControl.afficher_form_stock)
    .get('/form_medecin', affichageControl.afficher_form_medecin)
    .get('/form_mutuelle', affichageControl.afficher_form_mutuelle)
    .get('/form_pathologie', affichageControl.afficher_form_pathologie)
    // .get('/:dir', affichageControl.afficher_dir)
    
    .get('/fiche_client/:id', affichageControl.afficher_fiche_client)
    .get('/fiche_ordonnance/:id', affichageControl.afficher_fiche_ordonnance)
    .get('/fiche_medecin/:id', affichageControl.afficher_fiche_medecin)
    .get('/fiche_mutuelle/:id', affichageControl.afficher_fiche_mutuelle)
    .get('/fiche_pathologie/:id', affichageControl.afficher_fiche_pathologie)

    //executer les formulaires
    .post('/form_ordonnance', affichageControl.executer_form_ordonnance)
    .post('/form_client', affichageControl.executer_form_client)
    .post('/form_stock', affichageControl.executer_form_stock)
    .post('/form_medecin', affichageControl.executer_form_medecin)
    .post('/form_mutuelle', affichageControl.executer_form_mutuelle)
    
    //modifier / supprimer données
    .post('/fiche_client/:id', affichageControl.update_form_client)
    .post('/fiche_ordonnances/:id', affichageControl.update_form_ordonnance)

    .post('/delete_client/:id', affichageControl.delete_fiche_client) 
    .post('/delete_ordonnances/:id', affichageControl.delete_fiche_ordonnance)

    
module.exports = routeur;





