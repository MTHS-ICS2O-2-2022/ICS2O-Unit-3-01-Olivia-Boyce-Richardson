// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

'use strict'

function calculate () {
 // input
 const aBase = parseInt(document.getElementById('a-base').value)
 const bBase = parseInt(document.getElementById('b-base').value)
 const height = parseInt(document.getElementById('height').value)

 // process
 const area = [ (aBase + bBase) / 2 ] * height

 // output
 document.getElementById('area').innerHTML = 'Area : ' + area.toFixed(2) + ' mm².'
}