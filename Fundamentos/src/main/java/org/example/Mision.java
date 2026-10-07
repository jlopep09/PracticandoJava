package org.example;

import jdk.jfr.Event;

import java.time.LocalDateTime;
import java.util.ArrayList;

public class Mision {

    public enum Dificultad{
        FACIL,
        MEDIA,
        DIFICIL
    }
    public enum Enemigo{
        ZOMBIE,
        ESQUELETO,
        DRAGON
    }

    private Dificultad dificultad;
    private Enemigo enemigo;
    private int recompensa;
    private ArrayList<Evento> eventos;

    public Mision(Dificultad dificultad, Enemigo enemigo){
        this.dificultad = dificultad;
        this.enemigo = enemigo;
        this.eventos = new ArrayList<>();
        this.eventos.add(new Evento("Misión creada"));
        switch (dificultad){
            case FACIL:
                this.recompensa = 50;
                break;
            case MEDIA:
                this.recompensa = 100;
                break;
            case DIFICIL:
                this.recompensa = 250;
                break;
            default:
                break;
        }
    }

    public void printEvents(){
        for (Evento e : this.eventos){
            System.out.println(e.datetime+" - "+e.descripcion);
        }
    }

    class Evento{
        private String descripcion;
        private LocalDateTime datetime;
        public Evento(String desc){
            this.descripcion = desc;
            this.datetime = LocalDateTime.now();
        }
    }


}
