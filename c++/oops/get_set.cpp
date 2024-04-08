#include<iostream>
using namespace std;

class student{
   private:
      string name;
      int age,roll_no;
      string grade;
    
    public:
    void setname(string s){
        name=s;
    }

     void setage( int a){
        age=a;
    }

     void setroll_no(int r){
             roll_no=r;
         }
     
     void setgrade(string s){
             grade =s;
         }
     
       void getname(){
             cout<<name<<endl;
         }
          void getage(){
             cout<<age<<endl;
         }
          void getroll_no(){
             cout<<roll_no<<endl;
         }
     void getgrade(){
        cout<<grade<<endl;
    }
 };

   int main(){
     student s1;
      s1.setgrade("A");
      s1.setname("shivam");
      s1.setroll_no(53);
      s1.setage(22);

      s1.getname();
       s1.getage();
        s1.getroll_no();
         s1.getgrade();

    return 0;
}