//FUNCTION OVERLOADING


// #include<iostream>
// using namespace std;

// class print{
//     public:

//     void show(int x){
//         cout<<x<<"int value "<<endl;
//     }

//     void show(char ch){
//         cout<<ch<<"char value"<<endl;
//     }
// };



// int main(){
    
//     print p1;

//     p1.show('g');
    
//     return 0;

// }      


// ____________________________________________________________________________________________

//OPERATOR OVERLOADING





// ______________________________________________________________________________________________


// FUNCTION  OVERRIDDING



#include<iostream>
using namespace std;

class parent{
    public:

    void show(){
        cout<<"PARENT CLASS "<<endl;
    }

};


class child : public parent{
    public:

    void show(){
        cout<<"child CLASS "<<endl;
    }

};


int main(){
    
   parent c1;
   c1.show();
    
    return 0;

}      