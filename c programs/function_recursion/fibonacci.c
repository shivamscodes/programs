#include <stdio.h>
int fibo(int n );

int main()
{
    int n;
    printf("enter the value of n");
    scanf("%d",n);
    printf("the fibonachi series is %d",fibo(n));
    return 0;
}
int fibo(int n){
    int f;
    if (n==1 || n==0)
 {   return n;
}else{
    f=fibo(n-1)+fibo(n-2);
}
    return f;
}