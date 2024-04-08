#include<stdio.h>
float temp(float x);
int main()
{
    float  x;
    printf("enter the temperature");
    scanf("%f",&x);
    printf("the temperature in feranhite is %f \n", temp(x)); 
return 0;
}
float temp(float x)
{
    float convert;
    convert = (x*9/5)+32;
    return convert;
}