import React ,{useState} from 'react' ;
import { StyleSheet, Text , Button , Text ,  } from 'react-native/types';
import {signInWithEmailndPassword} from 'firebase/auth' ;
import {auth} from "../config/firebase" ;

const backImage = require("../assets/imageBackground.png") ;
