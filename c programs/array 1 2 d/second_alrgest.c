#include<stdio.h>
#include<limits.h>
int main()
{
    int m[9]={-12,-3,-445,54,666,8,7,-934};
    int max =m[0];
     int smax=m[0];
    for (int i=1;i<9;i++){
        if(max<m[i]){
            max=m[i];
        }
    
    }
     for (int i=1;i<9;i++){
        if(m[i]!=max && smax<m[i]){
            smax=m[i];
        }
    
    }
printf("%d",smax);
    return 0;
}