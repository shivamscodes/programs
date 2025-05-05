// // MULTI-LEVEL INHERITANCE

// #include<iostream>
// using namespace std;

// class person{
//     public:
//    string name;
//    int age;

//    person(){
//     cout<<"person contrutor"<<endl;
//    }

// };


// class student : public person{
//     public:
//     int rollNo;

//     student(){
//         cout<<"child contrutor"<<endl;
//     }
// };

// class graduateStud : public student {
//     public:
//     string area;

//     graduateStud(){
//         cout<<"grad contrutor"<<endl;
//     }

//     void data(){
//         cout<<name<<endl;
//         cout<<age<<endl;
//         cout<<rollNo<<endl;
//         cout<<area<<endl;
//      }

// };

// int main(){
    
//     graduateStud g1;
//     g1.name= "ram";
//     g1.age=22;
//     g1.rollNo=54;
//     g1.area="compiler";
 
//     g1.data();

//     return 0;

// }      



// ___________________________________________________________________________________________



// // MULTIPLE INHERITANCE

// #include<iostream>
// using namespace std;

// class person{
//     public:
//    string name;
//    int age;

//    person(){
//     cout<<"person contrutor"<<endl;
//    }

// };


// class student {
//     public:
//     int rollNo;
//     string area;

//     student(){
//         cout<<"student contrutor"<<endl;
//     }
// };

// class TA : public student, public person {
//     public:
//    int salary;

//     TA(){
//         cout<<"grad contrutor"<<endl;
//     }

//     void data(){
//         cout<<name<<endl;
//         cout<<age<<endl;
//         cout<<rollNo<<endl;
//         cout<<area<<endl;
//         cout<<salary<<endl;
//      }

// };

// int main(){
    
//     TA t1;
//     t1.name= "ram";
//     t1.age=22;
//     t1.rollNo=54;
//     t1.area="compiler";
//     t1.salary=25000;


//     t1.data();

//     return 0;

// }       





//______________________________________________________________________________________




// HIERARCHIAL INHERITANCE

#include<iostream>
using namespace std;

class person1{
    public:
   string name;
   int age;
   int rollNo;

   person1(){
    cout<<"person1 contrutor"<<endl;
   }

};


class child1 : public person1 {
    public:
    string area;

    child1(){
        cout<<"child1 contrutor"<<endl;
    }
};



class child2 : public person1 {
    public:
   int salary;

    child2(){
        cout<<"child2 contrutor"<<endl;
    }

};

int main(){
    

    child1 ch1;
    ch1.name= "surbhi";
    ch1.age=24;
    ch1.rollNo=33;
    ch1.area="network";

    cout<<ch1.name<<endl;


    child2 ch2;
    ch2.name= "shradha";
    ch2.age=32;
    ch2.rollNo=18;
    ch2.salary=24000;

    cout<<ch2.age<<endl;
   
    return 0;

}       




//_________________________________________________________________________________________



//HYBRIDE INHERTANCE 

