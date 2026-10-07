package org.example.players;

import java.util.Random;

public class Mago extends Personaje{
    public double mana; /*0.0 y 120.0*/
    public final int VALOR_ATAQUE_MAX = 8;

    public Mago(String nombre, int vida, int nivel, double mana) {
        super(nombre, vida, nivel);
        this.mana = mana;
    }

    @Override
    public void saludar() {

    }

    @Override
    public int atacar() {
        Random r = new Random();
        return (int) (r.nextDouble()*this.VALOR_ATAQUE_MAX);
    }

    @Override
    public void usarHabilidad() {

    }
}
