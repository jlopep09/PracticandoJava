package org.example.players;

import java.util.Random;

public class Arquero extends Personaje{
    public double precision; /*0.0 y 1.0*/
    public final int VALOR_ATAQUE = 2;

    public Arquero(String nombre, int vida, int nivel, double precision) {
        super(nombre, vida, nivel);
        this.precision = precision;
    }

    @Override
    public void saludar() {

    }

    @Override
    public int atacar() {
        Random r = new Random();
        int contador = 0;
        for (int i = 0; i < 3; i++) {
            contador = (r.nextDouble()<this.precision)? (contador+this.VALOR_ATAQUE): contador;
        }
        return contador;
    }

    @Override
    public void usarHabilidad() {

    }
}
