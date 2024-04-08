#include<iostream>
#include<vector>
#include<bits\stdc++.h>
using namespace std;

int main(){
 // vector<int>v={1,2,3,4,5};
 // vector<int>v(4,1);
//   vector<int>v;
//    cout<<"size of vectot v "<<v.size()<<endl;
//      cout<<"vcapacity of vectot v "<<v.capacity()<<endl;
//      v.push_back(1);
//      v.push_back(2);
//           v.push_back(3);
//      v.push_back(4);
//      v.push_back(5);
     
//     v.pop_back();
//      v.erase(v.begin()+1);
//      //  v.clear();

//     //  v[1]=44;   //update value
//      v.insert(v.begin()+1,17);
//      v.insert(v.begin()+2,99);
     
//      cout<<"size of vectot v "<<v.size()<<endl;
//      cout<<"vcapacity of vectot v "<<v.capacity()<<endl;
//       for(int i=0;i<v.size();i++){
//         cout<<v[i]<<" ";
//       }
      

// //  cout<<"size of vectot v "<<v.size()<<endl;
// //      cout<<"vcapacity of vectot v "<<v.capacity()<<endl;




vector<int>a;
a.push_back(21);
a.push_back(11);
a.push_back(76);
a.push_back(45);
a.push_back(5);
a.push_back(90);

cout<<a.front()<<endl;
cout<<a.back()<<endl;
cout<<a[a.size()-1]<<endl;
cout<<a.empty()<<endl;

// vector<int>b;

// b=a;
// for(int i=0;i<b.size();i++){
// cout<<b[i]<<" ";
//}

cout<<"sorting in assecding"<<endl;
 sort(a.begin(),a.end());
  
  for(int i=0;i<a.size();i++){
   cout<<a[i]<<" ";
  }
  cout<<endl;

//   cout<<"sorting in decending"<<endl;
//   sort(a.begin(),a.end(),greater<int>());
//  // sort(a.rbegin(),a.rend());
//   for(int i=0;i<a.size();i++){
//     cout<<a[i]<<" ";
//   }
//   cout<<endl;


  //search in bs

  cout<<binary_search(a.begin(),a.end(),211)<<endl;

  cout<<find(a.begin(),a.end(),45)-a.begin()<<endl;

cout<<count(a.begin(),a.end(),45)<<endl;

  //doubt...............//int max = max_element(a.begin(),a.end());
// cout<<max<<endl;
    return 0;
}