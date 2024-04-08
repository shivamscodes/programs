
#include <stdio.h>
int main()
{
    int n;
    printf("enter the n");
    scanf("%d", &n);
    for (int i = 1; i <= n; i++)
    {
        int a = 1;
        for (int j = 1; j <= i; j++)
        {
            int d = 64 + a;
            char ch = (char)d;
            a++;
            printf("%c", ch);
        }
        printf("\n");
    }
    return 0;
}