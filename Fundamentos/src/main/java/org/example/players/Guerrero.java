package org.example.players;

public class Guerrero extends Personaje{

    public int armadura;
    public final int VALOR_ATAQUE = 4;

    public Guerrero(String nombre, int vida, int nivel, int armadura) {
        super(nombre, vida, nivel);
        this.armadura = armadura;
    }

    @Override
    public void saludar() {
        System.out.println("Hola, soy un guerrero");
    }

    @Override
    public int atacar() {
        return this.VALOR_ATAQUE;
    }

    @Override
    public void usarHabilidad() {

    }
}
