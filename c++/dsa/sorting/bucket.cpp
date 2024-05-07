#include<bits/stdc++.h>
using namespace std;

void bucketsort(vector<float>&a){
    int n=a.size();

vector<vector<float>>bucket(n,vector<float>());

for(int i=0;i<n;i++){
        int bucketIndex=n*a[i];
        bucket[bucketIndex].push_back(a[i]);
}

for(int i=0;i<n;i++){
    if(!bucket[i].empty()){
        sort(bucket[i].begin(),bucket[i].end());

    }
}

int k=0;
for(int i=0;i<n;i++){
     for(int j=0;j<bucket[i].size();j++){
       a[k++]=bucket[i][j];
}
}
    
}


int main(){

    vector<float> arr = {0.42, 0.32, 0.33, 0.52, 0.37, 0.47, 0.51};
          
       bucketsort(arr);

       cout<<"sorted arr"<<endl;

       for(int i=0;i<7;i++){
        cout<<arr[i]<<" ";
       }
    return 0;
}