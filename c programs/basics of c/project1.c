#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main()
{
    int num, guess, nguess = 1;
    srand(time(0));
    num = rand() % 100 + 1;
    printf("%d", num);
    do
    {

        printf("guess the no,");
        scanf("%d", &guess);
        if (guess > num)
        {
            printf("lower the no,");
        }

        else       if(guess < num)
        {
            printf("higher the no,");
        }
        else
        {
            printf("gussed in %d", nguess);
        }
        nguess++;
    } while (guess != num);
    return 0;
}