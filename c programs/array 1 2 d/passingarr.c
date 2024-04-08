#include<stdio.h>
void ext(int x[]){
    x[1]=34;
    return;
}
int main()
{
    int a[5]={1,2,3,4,5};
    printf("%d \n",a[1]);
    ext(a);
    printf("%d \n",a[1]);
    return 0;
}