#include<iostream>
using namespace std;

class customer{
 string name;
 int acc_no,balance;
 static int total_customer;
 public:

 customer(string name,int acc_no,int balance){
    this->name=name;
    this->acc_no=acc_no;
    this->balance=balance;
    total_customer++;  
 }

 void display(){
    cout<<total_customer<<endl;
 }
};

int customer::total_customer=0;

int main(){
     
     customer c1("rohit",1,100);
     c1.display();
customer c2("mohit",2,400);
customer c3("sohit",3,500);
  c1.display();

    return 0;
}