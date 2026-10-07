package org.example.players;

import org.example.HabilidadEspecial;

public abstract class Personaje implements HabilidadEspecial {
    public String nombre;
    public int vida;
    public int nivel;

    public Personaje(String nombre, int vida, int nivel){
        this.nombre = nombre;
        this.vida = vida;
        this.nivel = nivel;
    }

    public abstract void saludar();
    public abstract int atacar();

}
