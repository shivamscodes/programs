#include<iostream>
using namespace std;


// void fun(){
//      static int x=0;    //initial statement
//       cout<<x<<endl;
//       x++;

// };


// class a{
//     public:
//     int x;

//     void inc(){
//         x++;
//     }
// };


// int main(){
//     //  fun();
//     //  fun();
//     //  fun();


//     a obj1;
//     a obj2;
    

//     // obj1.x=0;

//     obj1.x=100;
//     obj2.x=200;

//     cout<<obj1.x<<endl;
//      obj1.inc();
//      cout<<obj1.x<<endl;

//      cout<<obj2.x<<endl;


//     return 0;
// }



class ABC{
    public:
    ABC(){
        cout<<"constructor"<<endl;

    }

    ~ABC(){
        cout<<"destructor"<<endl;
        
    }
};


int main(){
    if(true)
{
    static ABC obj;
}

cout<<"end of main function"<<endl;
    return 0;
}


