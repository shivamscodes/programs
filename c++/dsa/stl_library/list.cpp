#include<iostream>
#include<list>
using namespace std;

int main(){
     list<int>l;
     l.push_back(20);
     l.push_back(30);
     l.push_back(40);
     l.push_back(50);
     l.push_front(10);
      


 cout<<l.front()<<endl;
 cout<<l.back()<<endl;    
 cout<<l.size()<<endl;

l.pop_front();
cout<<l.size()<<endl;

l.pop_back();
cout<<l.size()<<endl;

l.push_back(70);
l.push_back(80);
l.push_back(90);

//for(list<int>::iterator it=l.begin(); it!= l.end(); it++)
for(auto it=l.begin(); it!= l.end(); it++)
{
    cout<<*it<<" " ;
}
    return 0;
}