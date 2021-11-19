// création du routeur Express pour ce module
const { Router } = require('express');
const express = require('express');
const routeur = express.Router();

var accueilController = require('../controllers/ctrlAccueil')
var medecinController = require('../controllers/ctrlMedecin');
var mutuelleController = require('../controllers/ctrlMutuelle');
var pathologieController = require('../controllers/ctrlPathologie');
var clientController = require('../controllers/ctrlClient')
var ordonnanceController = require('../controllers/ctrlOrdonnance')
var stockController = require('../controllers/ctrlStock')

//routage accueil
routeur.get('/accueil', accueilController.afficher_accueil)
    .get('/', accueilController.afficher_accueil)
//routage medecin 
routeur.get('/liste_medecins',medecinController.afficher_liste_medecins)
    .get('/form_medecin', medecinController.afficher_form_medecin)
    .get('/fiche_medecin/:id', medecinController.afficher_fiche_medecin)
    .post('/form_medecin', medecinController.executer_form_medecin)
    .post('/fiche_medecin/:id', medecinController.update_form_medecin)
    .post('/delete_medecin/:id', medecinController.delete_fiche_medecin)

//routage mutuelle
routeur.get('/liste_mutuelles', mutuelleController.afficher_liste_mutuelles)
    .get('/form_mutuelle', mutuelleController.afficher_form_mutuelle)
    .get('/fiche_mutuelle/:id', mutuelleController.afficher_fiche_mutuelle)
    .post('/form_mutuelle', mutuelleController.executer_form_mutuelle)
    .post('/fiche_mutuelle/:id', mutuelleController.update_form_mutuelle)
    .post('/delete_mutuelle/:id', mutuelleController.delete_fiche_mutuelle)

//routage pathologies
routeur.get('/liste_pathologies', pathologieController.afficher_liste_pathologies)
    .get('/form_pathologie', pathologieController.afficher_form_pathologie)
    .get('/fiche_pathologie/:id', pathologieController.afficher_fiche_pathologie)
    .post('/form_pathologie', pathologieController.executer_form_pathologie)
    .post('/fiche_pathologie/:id', pathologieController.update_form_pathologie)
    .post('/delete_pathologie/:id', pathologieController.delete_fiche_pathologie)

//routage client 
routeur.get('/liste_clients', clientController.afficher_liste_clients)
    .get('/form_client', clientController.afficher_form_client)
    .get('/fiche_client/:id', clientController.afficher_fiche_client)
    .post('/form_client', clientController.executer_form_client)
    .post('/fiche_client/:id', clientController.update_form_client)
    .post('/delete_client/:id', clientController.delete_fiche_client) 

//routage ordonnance 
routeur.get('/liste_ordonnances', ordonnanceController.afficher_liste_ordonnances)
    .get('/form_ordonnance', ordonnanceController.afficher_form_ordonnance)
    .get('/fiche_ordonnance/:id', ordonnanceController.afficher_fiche_ordonnance)
    .post('/form_ordonnance', ordonnanceController.executer_form_ordonnance)
    .post('/fiche_ordonnances/:id', ordonnanceController.update_form_ordonnance)
    .post('/delete_ordonnances/:id', ordonnanceController.delete_fiche_ordonnance)

//routage stock 
routeur.get('/liste_stocks', stockController.afficher_liste_stocks)
    .get('/form_stock', stockController.afficher_form_stock)
    .get('/fiche_stock/:id', stockController.afficher_fiche_stock)
    //.post('/form_stock', stockController.executer_form_stock)
    .post('/fiche_stock/:id', stockController.update_form_stock)
    .post('/delete_stock/:id', stockController.delete_fiche_stock)


//executer form stock (bug async)
// routeur.post('/form_stock', affichageControl.executer_form_stock)

    //.get('/liste_clients', affichageControl.afficher_liste_clients)
    //.get('/liste_ordonnances', affichageControl.afficher_liste_ordonnances)
    //.get('/liste_stocks', affichageControl.afficher_liste_stocks)
    //.get('/liste_medecins', affichageControl.afficher_liste_medecins)
    //.get('/liste_mutuelles', affichageControl.afficher_liste_mutuelles)
    //.get('/liste_pathologies', affichageControl.afficher_liste_pathologies)

    //.get('/form_client', affichageControl.afficher_form_client)
    //.get('/form_ordonnance', affichageControl.afficher_form_ordonnance)
    //.get('/form_stock', affichageControl.afficher_form_stock)
    //.get('/form_medecin', affichageControl.afficher_form_medecin)
    //.get('/form_mutuelle', affichageControl.afficher_form_mutuelle)
    //.get('/form_pathologie', affichageControl.afficher_form_pathologie)
    
    //.get('/fiche_client/:id', affichageControl.afficher_fiche_client)
    //.get('/fiche_ordonnance/:id', affichageControl.afficher_fiche_ordonnance)
    //.get('/fiche_stock/:id', affichageControl.afficher_fiche_stock)
    //.get('/fiche_medecin/:id', affichageControl.afficher_fiche_medecin)
    //.get('/fiche_mutuelle/:id', affichageControl.afficher_fiche_mutuelle)
    //.get('/fiche_pathologie/:id', affichageControl.afficher_fiche_pathologie)

    //executer les formulaires
    //.post('/form_ordonnance', affichageControl.executer_form_ordonnance)
    //.post('/form_client', affichageControl.executer_form_client)
   // .post('/form_medecin', affichageControl.executer_form_medecin)
    //.post('/form_mutuelle', affichageControl.executer_form_mutuelle)
    //.post('/form_pathologie', affichageControl.executer_form_pathologie)
    
    //modifier / supprimer données
    //.post('/fiche_client/:id', affichageControl.update_form_client)
    //.post('/fiche_ordonnances/:id', affichageControl.update_form_ordonnance)
    //.post('/fiche_stock/:id', affichageControl.update_form_stock)
    //.post('/fiche_medecin/:id', affichageControl.update_form_medecin)
    //.post('/fiche_mutuelle/:id', affichageControl.update_form_mutuelle)
    //.post('/fiche_pathologie/:id', affichageControl.update_form_pathologie)

    //.post('/delete_client/:id', affichageControl.delete_fiche_client) 
    //.post('/delete_ordonnances/:id', affichageControl.delete_fiche_ordonnance)
    //.post('/delete_medecin/:id', affichageControl.delete_fiche_medecin)
    //.post('/delete_mutuelle/:id', affichageControl.delete_fiche_mutuelle)
    //.post('/delete_pathologie/:id', affichageControl.delete_fiche_pathologie)

    

    
module.exports = routeur;





