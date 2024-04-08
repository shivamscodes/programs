#include<stdio.h>

int main()
{
   int phy,chem,maths;
   printf("enter the marks of physics");
   scanf("%d",&phy);
   printf("enter the marks of chemistry");
   scanf("%d",&chem);
    printf("enter the marks of maths");
   scanf("%d",&maths);
   float total;
total=(phy+chem+maths)/3;
if((total>40) || phy>33||chem>33||maths>33){
    printf("you are pass and your percentage is %f",total);
}else{
    printf("you are fail and your percentage is %f",total);
}
   
    return 0;
}