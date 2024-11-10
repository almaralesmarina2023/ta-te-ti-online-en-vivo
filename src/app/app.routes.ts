import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { JugarComponent } from './pages/jugar/jugar.component';

export const routes: Routes = [
    {
     path:'',component:HomeComponent
    },
    {
     path:'jugar',component:JugarComponent
    }
];

