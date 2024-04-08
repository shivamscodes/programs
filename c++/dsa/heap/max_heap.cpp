#include<iostream>
using namespace std;

void insert(int a[],int s){
int temp, i=s;
temp=a[s];
while(i>1 && temp >a[i/2]){
    a[i]=a[i/2];
    i=i/2;
}
a[i]=temp;
}

int main(){
     int a[]={0,1,6,23,12,9,7,13,10};
      for(int i=1;i<9;i++){
        insert(a,i);
     }
       
     for(int i=1;i<9;i++){
        cout<<a[i]<<" ";
     }
    return 0;
}