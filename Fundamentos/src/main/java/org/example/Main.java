package org.example;

import org.example.players.Arquero;
import org.example.players.Guerrero;
import org.example.players.Mago;
import org.example.players.Personaje;

import java.util.ArrayList;
import java.util.InputMismatchException;
import java.util.Scanner;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
abstract class Main {

    public static void printMenu(){
        System.out.println("" +
                "===== GREMIO =====\n" +
                "\n" +
                "1. Reclutar aventurero\n" +
                "2. Ver aventureros\n" +
                "3. Enviar a misión\n" +
                "4. Descansar\n" +
                "5. Ver historial\n" +
                "6. Ver estado del gremio\n" +
                "0. Salir");
        System.out.println("===============");
        System.out.println("Introduzca la opción deseada por teclado:");
    }

    public static void main(String[] args){
        System.out.println("Bienvenido al Simulador de Gremio de Aventureros");
        System.out.println("El objetivo es conseguir 500 monedas antes de quedarse sin guerreros");
        Scanner sc = new Scanner(System.in);
        int opt = -1;

        while (opt != 0){
            Main.printMenu();

            try {
                opt = sc.nextInt();
                if (opt < 0){throw new NegativeOptionNotValid("Cant use negative option values");}


                Personaje gr = new Guerrero("Guerrero Paco", 10, 1, 20);
                Personaje mg = new Mago("Mago Juan", 10, 1, 120.0);
                Personaje arq = new Arquero("Arquero Jose", 10, 1, 0.7);

                ArrayList<Personaje> personajes = new ArrayList<>();
                personajes.add(gr);
                personajes.add(mg);
                personajes.add(arq);

                for(Personaje p : personajes){
                    System.out.println(p.nombre+" "+p.atacar());
                }
                System.out.println("----------------");

                Mision mision = new Mision(Mision.Dificultad.DIFICIL, Mision.Enemigo.ESQUELETO);
                mision.printEvents();

                System.out.println("Intro para continuar...");


            }catch (InputMismatchException e){
                System.out.println("Opción no válida");
            }catch (NegativeOptionNotValid e2){
                System.out.println(e2.getMessage());
            }
            sc.nextLine();
            String temp = sc.nextLine();
        }



    }
}
