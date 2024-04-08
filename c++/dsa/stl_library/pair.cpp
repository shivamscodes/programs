#include<iostream>
#include<bits/stdc++.h>
using namespace std;

int main(){
    // pair<string,int>p;
    // //p=make_pair("shivam",53);
    //   p.first="Shivam";
    //   p.second=53;
 
     //name,age,weight

     pair<string,pair<int,int>>p; 

//pair<pair<int,int>,pair<int,int>> for 4 pair 
    
    //  p.first="shivam";
    //  p.second.first=22;
    // p.second.second=50;

   p=make_pair("shivam",make_pair(22,50));

    cout<<p.first<<" ";
       cout<<p.second.first<<" ";
        cout<<p.second.second<<" ";

    return 0;
}