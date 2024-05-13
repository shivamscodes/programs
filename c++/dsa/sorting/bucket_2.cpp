#include<bits/stdc++.h>
using namespace std;

 void bucketsort(vector<float>&a){
     int n=a.size();
     vector<vector<float>>v(n,vector<float>());
    //finding range
    float maxi=a[0];
    float mini=a[0];
      for(int i=0;i<n;i++){
        maxi=max(maxi,a[i]);
        mini=min(mini,a[i]);
      }
      float range =(maxi-mini)/n;
         

     for(int i=0;i<n;i++){
        int bucket=(a[i]-mini)/range;
        //boundry

        float diff =(a[i]-mini)/range-bucket;
        if(diff==0 && a[i]!=mini){
                   v[bucket-1].push_back(a[i]);

        }else{
        v[bucket].push_back(a[i]);
     }
     }
        
        for(int i=0;i<n;i++){
            if(!v[i].empty()){
            sort(v[i].begin(),v[i].end());
        }
        }
        
        int k=0;
        for(int i=0;i<n;i++){
            for(int j=0;j<v[i].size();j++){
                  a[k++]=v[i][j];
            }
        }
           

         

 }

int main(){
        vector<float> arr = {0.42, 0.32, 0.33, 0.52, 0.37, 0.47, 0.51};
   
   bucketsort(arr);

   for(int i=0;i<arr.size();i++){
    cout<<arr[i]<<" ";
   }
    return 0;
}



//o n+k
 //N*2      


//  sc=n+k