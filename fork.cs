#include <unistd.h>
#include <stdio.h>

int var == 22; // Esto es un error de sintaxis, debe ser "int var = 22;"

int main(void)
{
    __pid_t pidC;
    printf(" proceso. PID = %d comienza \n", getpid()); // Imprime el PID del proceso padre.

    pidC = fork(); // Crea un nuevo proceso hijo y almacena su PID en pidC.

    printf("Proceso. PID = %d, pidC = %d ejecutandose \n", getpid(), pidC);

    if (pidC > 0)
    {
        var = 44; // En el proceso padre, cambia el valor de var a 44.
    }
    else if (pidC == 0)
    {
        var = 33; // En el proceso hijo, cambia el valor de var a 33.
    }
    else
    {
        // Si fork() devuelve un valor negativo, indica un error en la creación del proceso hijo.
        // En este caso, no se hace nada.
    }

    while (1)
    {
        sleep(2); // Hace que el proceso espere durante 2 segundos.
        printf("proceso. PID = %d, var = %d ejecutandose \n", getpid(), var); // Imprime el PID y el valor de var en ambos procesos.
    }

    return 0;
}