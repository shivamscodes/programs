#include<iostream>
using namespace std;

class student{
    public:
      string name;
      int age,roll_no;
      string grade;

};

int main(){
     student s1;
     s1.name="shivam";
     s1.age=22;
    s1.roll_no=53;
    s1.grade="A+";

    cout<<s1.name<<endl;
  cout<<s1.age<<endl;
cout<<s1.roll_no<<endl;
cout<<s1.grade<<endl;


    return 0;
}