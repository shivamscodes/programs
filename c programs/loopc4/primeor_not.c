
#include <stdio.h>
int main()
{                                    
// incomplet program    >>??//
    int n,prime=0;
    printf("enter the value to check");
    scanf("%d",&n);
for(int i=2;i<100;i++){
if (n%i==0)
{
    prime =1;
    break;
}
}


    return 0;
}