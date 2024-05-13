// #include<iostream>
// using namespace std;

// void countsort(int a[],int n){
//     int b[n];
       
//        int max=a[0];
//     for(int i=1;i<n;i++){
//      if(max<a[i]){
//         max=a[i];
//      }
//     }


//     int freq[max+1]={0};

//     for(int i=0;i<n;i++){
//         freq[a[i]]++;
//     }

//     for(int i=1;i<=max;i++){
//         freq[i]=freq[i]+freq[i-1];
//     }

//     for(int i=n-1;i>=0;i--){
//         b[--freq[a[i]]]=a[i];
//     }

//     for(int i=0;i<n;i++){
//        
//     }
    
// }

// int main(){
//         int a[]={1,4,5,6,3,3,7,8,4,5,6,1};
//       countsort(a,12);

//       for(int i=0;i<12;i++){
//         cout<<a[i]<<" ";
//       }
//     return 0;

// }      


// #include<bits/stdc++.h>
// using namespace std;

//  void bucketsort(vector<float>&a){
//      int n=a.size();
//      vector<vector<float>>v(n,vector<float>());

//      for(int i=0;i<n;i++){
//         int bucket=n*a[i];
//         v[bucket].push_back(a[i]);
//      }
        
//         for(int i=0;i<n;i++){
//             if(!v[i].empty()){
//             sort(v[i].begin(),v[i].end());
//         }
//         }
        
//         int k=0;
//         for(int i=0;i<n;i++){
//             for(int j=0;j<v[i].size();j++){
//                   a[k++]=v[i][j];
//             }
//         }
           

         

//  }

// int main(){
//         vector<float> arr = {0.42, 0.32, 0.33, 0.52, 0.37, 0.47, 0.51};
   
//    bucketsort(arr);

//    for(int i=0;i<arr.size();i++){
//     cout<<arr[i]<<" ";
//    }
//     return 0;
// }





// #include<bits/stdc++.h>
// using namespace std;

// void countsort(vector<int>&a,int pos){
//      vector<int>freq (10,0);
//       int n=a.size();

//      for(int i=0;i<n;i++){
//        freq[(a[i]/pos)%10]++;
//      }

//      for(int i=1;i<10;i++){
//         freq[i]=freq[i]+freq[i-1];   
//      }

//      vector<int>ans(n);
//      for(int i=n-1;i>=0;i--){
//         ans[--freq[(a[i]/pos)%10]]=a[i];
//      }

//      for(int i=0;i<n;i++){
//         a[i]=ans[i];
//      }
// }

// int getmax(vector<int>&a,int n){
//     int max=INT_MIN;
//     for(int i=0;i<n;i++){
//         if(a[i]>max){
//             max=a[i];
//         }
//     }
//     return max;
// }

// void radixsort(vector<int>&a,int n){
//     int maxi=getmax(a,n);
       
//     for(int pos=1;maxi/pos>0;pos=pos*10){
//         countsort(a,pos);
//     }
// }


// int main(){
//      vector<int> arr={12,8,119,199,76,84,43};
//      int n=7;

//      radixsort(arr,n);

//      for(int i=0;i<n;i++){
//         cout<<arr[i]<<" ";
//      }
//     return 0;
// }


#include<bits/stdc++.h>
using namespace std;


  

 void heapify(int a[],int index,int n){
    int largest=index;
    int left=(2*index)+1;
    int right=(2*index)+2;

    if(left<n && a[left]>a[largest]){
        largest=left;
    }
     if(right<n && a[right]>a[largest]){
        largest=right;
    }

    if(largest!=index){
        swap(a[largest],a[index]);
        heapify(a,largest,n);
    } 

 }

void builtheap(int arr[],int n){
       for(int i=n/2;i>=0;i--){
              heapify(arr,i,n);
       }
}

void sort(int arr[],int n){
for(int i=n-1;i>0;i--){
    swap(arr[i],arr[0]);
    heapify(arr,0,n);    
}
}


int main(){
     int arr[]={10,3,8,9,5,13,18,14,11,70};

     builtheap(arr,10);
      sort(arr,n);

     for(int i=0;i<10;i++){
        cout<<arr[i]<<" ";
     }
    return 0;
}



