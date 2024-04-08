#include<iostream>
#include<queue>
using namespace std;

int main(){
//     priority_queue<int>p;        //maxheap
    
//     //insert
//     p.push(10);
//      p.push(20);
//       p.push(34);
//        p.push(7);
//         p.push(15);
//          p.push(45);

//      cout<<p.top()<<endl;
//      //delete
//      p.pop();
//      //top
//           cout<<p.top()<<endl;
//         //size
//       cout<<p.size()<<endl;   

//    while(!p.empty()){
//          cout<<p.top()<<" ";
//          p.pop();
//    }

// }



//priotity queue for min heap

priority_queue<int,vector<int>,greater<int>>p;

 
    //insert
    p.push(10);
     p.push(20);
      p.push(34);
       p.push(7);
        p.push(15);
         p.push(45);

     cout<<p.top()<<endl;
     //delete
     p.pop();
     //top
          cout<<p.top()<<endl;
        //size
      cout<<p.size()<<endl;   

   while(!p.empty()){
         cout<<p.top()<<" ";
         p.pop();
   }

}