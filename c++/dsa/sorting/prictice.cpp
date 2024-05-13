// #include<bits/stdc++.h>
// using namespace std;

// void mrg(vector<int>&a,int l,int mid,int h){
//    vector<int>ans(h-l+1);

//    int left=l,right=mid+1,index=0;
    
//     while(left<=mid && right<=h){

//         if(a[left]<=a[right]){
//              ans[index]=a[left];
//              index++;
//              left++;
//         }else{
//             ans[index]=a[right];
//             right++;
//             index++;
//         }
//     }

//     while(left<=mid){
//         ans[index]=a[left];
//         index++;
//         left++;
//    }

//    while(right<=h){
//         ans[index]=a[right];
//         index++;
//         right++;
//    }

//    index=0;
//    while(l<=h){
//     a[l]=ans[index];
//     l++;
//     index++;
//    }
// }


// void mergesort(vector<int>&a,int l,int h){
//         if(l==h){
//             return;
//         }else
// {
//             int mid=(l+h)/2;
//         mergesort(a,l,mid);
//         mergesort(a,mid+1,h);

//         mrg(a,l,mid,h);}
// }

// int main(){
//   vector<int>v={43,12,45,11,8,88,100,6,34,99};
//     // vector<int>v={9,8,7,6,5,4,3,2,1,0};
//     // int n=v.size();
       
//        mergesort(v,0,9);

//     for(int i=0;i<10;i++){
//         cout<<v[i]<<" ";
//     }
//     return 0;

// }      





// #include<bits/stdc++.h>
// using namespace std;

// int split(vector<int>&a,int l,int h){
//     int i=l;
 
//     for(int j=l;j<h;j++){
//         if(a[j]<=a[h]){
//             swap(a[i],a[j]);
//             i++;
//         }
//     } 
//    swap(a[i], a[h]);
//     return i;
// }

//    void quicksort(vector<int>&a,int l,int h){
//     if(l>=h){
//         return;
//     }
//     int pivort=split(a,l,h);

//     quicksort(a,l,pivort-1);
//     quicksort(a,pivort+1,h);
//    }
//  int main(){
//   vector<int>v={43,12,45,11,8,88,100,6,34,99};
//     // vector<int>v={9,8,7,6,5,4,3,2,1,0};
//     // int n=v.size();
       
//        quicksort(v,0,9);

//     for(int i=0;i<10;i++){
//         cout<<v[i]<<" ";
//     }
//     return 0;

// }      














// #include<bits/stdc++.h>
// using namespace std;

// int main(){
// //    int a[]={43,12,45,11,8,88,100,6,34,99};
//     int a[]={9,8,7,6,5,4,3,2,1,0};
//     int n=10;
      

//       for(int i=1;i<n;i++){
//         int j=i;
//         while(j>0){
//           if(a[j]<a[j-1]){
//             swap(a[j],a[j-1]);
//           }
//           j--;
//         }
//       }


//     for(int i=0;i<n;i++){
//         cout<<a[i]<<" ";
//     }
//     return 0;

// }      





// #include<bits/stdc++.h>  //bubble
// using namespace std;

// int main(){
//    // int a[]={43,12,45,11,8,88,100,6,34,99};
//     int a[]={9,8,7,6,5,4,3,2,1,0};
//     int n=10;

//     for(int i=0;i<n-1;i++){
//         for(int j=0;j<n-1-i;j++){
//             if(a[j]>a[j+1]){
//                 swap(a[j],a[j+1]);
//             }
//         }
//     }


//     for(int i=0;i<n;i++){
//         cout<<a[i]<<" ";
//     }
//     return 0;

// }      


// #include<bits/stdc++.h>         //selecti0n
// using namespace std;

// int main(){
//    int a[]={43,12,45,11,8,88,100,6,34,99};
//     // int a[]={9,8,7,6,5,4,3,2,1,0};
//     int n=10;

      
//        int j;
//        for(int i=0;i<n-1;i++){
//          int min=INT_MAX;
//        int mindx=-1;
//         for(j=i;j<n;j++){
//             if(a[j]<min){
//                 min=a[j];
//                 mindx=j;
//             }
//         }
//         swap(a[i],a[mindx]);
//        }


//     for(int i=0;i<n;i++){
//         cout<<a[i]<<" ";
//     }
//     return 0;

// }      

















// #include<iostream>
// using namespace std;

// int binary(int a[],int l,int h,int target){
//    if(l>h){
//     return -1;
//    }

//    int mid=(l+h)/2;
   
//     if(a[mid]==target){
//         return mid;
//     }

//     else if(target<a[mid]){
//       binary(a,l,mid-1,target);
//     }
//     else if(target>a[mid]){
//         binary(a,mid+1,h,target);
//     }

// }

// int main(){
//     int a[]={12,23,45,57,67,76,87,99,200};
//     cout<<binary(a,0,8,87);
      
//     return 0;

// }      


// #include<iostream>
// using namespace std;

// int binary(int a[],int l,int h,int target){
//    while(l<h)
//     {
//         int mid=(l+h)/2;
      
//     if(a[mid]==target){
//         return mid;
//     }

//     else if(target<a[mid]){
//         h=mid-1;
//     }
//     else if(target>a[mid]){
//         l=mid+1;
//     }
//     }

//     return -1;
// }

// int main(){
//     int a[]={12,23,45,57,67,76,87,99,200};
//     cout<<binary(a,0,8,89);
      
//     return 0;

// }      





// #include<iostream>
// using namespace std;

// int linear(int a[],int l,int n,int tar){
//       if(l>n){
//         return -1;
//       }
//        if(a[l]==tar){
//         return l;
//        }
//        else{
//         linear(a,l+1,n,tar);
//        }
// }

// int main(){
//      int a[]={12,23,45,57,67,76,87,99,200};
//       cout<<linear(a,0,8,87);

//     return 0;

// }      





// #include<bits/stdc++.h>
// using namespace std;

// int linear(int a[],int l,int h,int tar){
//     for(int i=0;i<=h;i++){
//         if(a[i]==tar){
//             return i;
//         }
//     }
//     return -1;
// }

// int main(){
//     int a[]={12,23,45,57,67,76,87,99,200};
//       cout<<linear(a,0,8,77);

//     return 0;
// }