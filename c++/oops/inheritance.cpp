// #include<iostream>
// using namespace std;

// class human {
//     private:
//     int a;
//     protected:
//     int b;
//     public:
//     int c;

//     void fun(){
//         a=10;
//         b=20;
//         c=30;
//     }
// };


// int main(){

//  human rohit;
//  rohit.c=10;
//  rohit.fun();
//     return 0;

// }



#include<iostream>
using namespace std;

class human{
    public :
    string name;
    int age ,weight;
};

class student : public human{
    int roll,fees;

};

int main(){
    student a;
    a.name="rohit";
    return 0;
}