#include<bits/stdc++.h>
using namespace std;


void countsort(vector<int> &arr,int n,int pos){
    
   vector<int>count(10,0);
     
     for(int i=0;i<n;i++){
        count[(arr[i]/pos)%10]++;
     }

     //cumulative freq
     for(int i=1;i<10;i++){
        count[i]=count[i]+count[i-1];
     }

     //ans arr
     vector<int>ans(n);

     for(int i=n-1;i>=0;i--){
       ans[--count[(arr[i]/pos)%10]] = arr[i];
     }

     for(int i=0;i<n;i++){
        arr[i]=ans[i];
     }
 }


int getmax(vector<int>a,int n)
{
    int max=INT_MIN;
   for(int i=0;i<n;i++){
        if(a[i]>max){
            max=a[i];
        }
}
return max;
}


void radixsort(vector<int> &a,int n){
   int max=getmax(a,n);

     int pos;
   for( pos=1;max/pos>0;pos=pos*10){
         countsort(a,n,pos);
   }
   }
   


int main(){
     vector<int> arr={12,8,119,199,76,84,43};
     int n=7;
    //  //12,8,119,199,76,84,43
    //  cout<<"enter n";
    //  cin>>n;
    //  cout<<endl;

    //  for(int i=0;i<n;i++){
    //   cin>>arr[i];
    //  }




    radixsort(arr,n);

    for(int i=0;i<n;i++){
        cout<<arr[i]<<" ";
    }

    return 0;
}