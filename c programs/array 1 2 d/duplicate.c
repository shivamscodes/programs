#include<stdio.h>
int main()
{
    int arr[]={1,2,3,4,4,35,6,7,5,6,7,78,9,0,8,9,0,};
    for(int i=0;i<17;i++){
        for(int j=i+1;j<17;j++){
            if (arr[i]==arr[j]){
                printf("duplicate is %d ",arr[i]);
break;

            }        
        }

    }
    return 0;
}