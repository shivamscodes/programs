#include<bits/stdc++.h>
#include<iostream>
using namespace std;
int main()
{

//     char a[10];
   
//    cin>>a;
//  a[5]='\0';
//    cout<<a;
  string s1="shivam";
//getline(cin,s1);
    
//      s2="sharma";
    
//      s2.pop_back();
//      s3=s1+s2;
//   cout<<sizeof(s1)<<endl;
//  cout<<s3;
       
int start=0,end=s1.size()-1;
while(start<end){
  swap(s1[start],s1[end]);
  start++,end--;


}
  cout<<s1;
    return 0;
}