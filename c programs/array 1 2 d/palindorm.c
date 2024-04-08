#include<stdio.h>
int main()
{
    int arr[11]={1,2,3,4,5,6,5,4,3,2,1};

for(int i=0,j=10;i<j;i++,j--){
    if(arr[i] !=arr[j])
     
    {
        printf("it is not palindorm");

    }
    else{
        printf("it is plaindorm");
    }
   break;
}
    return 0;
}