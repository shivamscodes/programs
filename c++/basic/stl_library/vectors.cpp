#include<iostream>
#include<vector>
using namespace std;

int main(){
    vector<int>v;
   cout<<"size"<<v.size()<<endl;
   cout<<v.capacity()<<endl;
   v.push_back(1);
    cout<<"size"<<v.size()<<endl;
   cout<<v.capacity()<<endl;
    v.push_back(2);
    cout<<"size"<<v.size()<<endl;
   cout<<v.capacity()<<endl;
   v.push_back(3);
    cout<<"size"<<v.size()<<endl;
   cout<<v.capacity()<<endl;
   v.push_back(4);
    cout<<"size"<<v.size()<<endl;
   cout<<v.capacity()<<endl;
   v.push_back(5);
    cout<<"size"<<v.size()<<endl;
   cout<<v.capacity()<<endl;
    v.resize(9);
    cout<<"size"<<v.size()<<endl;
   cout<<v.capacity()<<endl;
  //  cout<<v.begin();
  v.pop_back();
  v.pop_back();

    cout<<"size"<<v.size()<<endl;
   cout<<v.capacity()<<endl;
v.begin();
   cout<<v[0];
  //  cout<<v.end();
    return 0;
}