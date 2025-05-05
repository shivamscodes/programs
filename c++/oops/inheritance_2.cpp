#include<iostream>
using namespace std;


class parent{
    public:
    string name;
    int age;

    parent(){
        cout<<"parent  constuctor"<<endl;
    }


    parent(string name, int age){
        this->name=name;
        this->age=age;
    }


    ~parent(){
        cout<<"i am parent desctructor"<<endl;
    }


};

class child : public parent{
    public:
     string subject;

     child(){
        cout<<"child constructor"<<endl;
     }


     child(string name, int age, string sub) : parent(name,age){
        subject=sub;
     }


     void data(){
        cout<<name<<endl;
        cout<<age<<endl;
        cout<<subject<<endl;
     }


     
    ~child(){
        cout<<"i am child desctructor"<<endl;
    }

    };

int main(){
    

    // child c1();
    // c1.age=22;
    // c1.name="harry";
    //c1.subject="hindi";

    // c1.data();
    
    // child c2;

    child c3("shradha",23,"cpp");
    c3.data();

    return 0;

}      

