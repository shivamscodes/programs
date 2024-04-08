/*charcter which are lowercase in ASCII starts with 97 to 122
a - z*/
#include<stdio.h>
int main()             
{
    char vari;
    printf("enter the alphabet");
    scanf("%c", &vari);
    if(vari <=122 && vari >=97){
        printf("it is lowercase");

    }else{
        printf("it is not in lowercse");
    }
    
    return 0;
}