
#include<iostream>
using namespace std;

class teacher{
    //attributes /properties

    private:
    double sal;

    public: 
    string name;
    string dept;
    string sub;
    

    teacher(){              //default constructor
        cout<<"hello"<<endl;
    }


    // teacher(string n,string d,string s, double salary){         //parameter constuctor
    //  name=n;
    //  dept= d;
    //  sub= s;
    //  sal= salary;
    // }

    
    teacher(string name,string dept,string sub, double sal){         //parameter constuctor
        this->name=name;
        this->dept= dept;
        this->sub= sub;
        this->sal= sal;
       }


       teacher(teacher &orgobj){              //copy constructor
        cout<<"copy constructor"<<endl;
        this->name= orgobj.name;
        this->dept=orgobj.dept;
        this->sub=orgobj.sub;
        this->sal=orgobj.sal;
       }


    //methods
    void changedept(string newdept){
        dept=newdept;
    }

    //setter
    void setsal(double salary){
        sal= salary;
    }

    //getter
    void getsal(){
        cout<<sal<<endl;
    }


    void data(){
        cout<<name<<endl;
        cout<<dept<<endl;
        cout<<sub<<endl;
        cout<<sal<<endl;
    }

};



class student{
    public:
    string name;
    double *cgpaptr;

    student(string name, double cgpa){      //constructor
      this->name= name;
      cgpaptr = new double;
     *cgpaptr= cgpa;
      
    }
    

    // //shallow copy
    // student(student &obj){             //copy contructor
    //     this->name=obj.name;
    //     this->cgpaptr=obj.cgpaptr;
    // }



    // //deep copy
    student(student &obj){             //copy contructor
        this->name=obj.name;
        cgpaptr = new double;
        *cgpaptr=*obj.cgpaptr;
    }



    void data(){
        cout<<name<<endl;
        cout<<*cgpaptr<<endl;
    }


    ~student(){              //destructor
        cout<<"i am destructor"<<endl;
        delete cgpaptr;
    }
};

int main(){
    
//     teacher t1;
//     t1.name= "shradha";
//     t1.dept="computer";
//     t1.sub="cpp";
//     t1.setsal(20000);
//    // t1.getsal();
//     //  cout<< t1.name<<endl;
    

//     teacher t2("maam","cs","cpp",3500);
//     t2.data();
//     cout<<endl;

//    teacher t3(t2);
//    t3.name="sir";
//    t3.data();
    


//concept of copying

student s1("shivam",8.2);


s1.data();

// student s2(s1);

// s2.name="heena";
// *(s2.cgpaptr )= 9.2;
// s1.data();

// cout<<endl;
// s2.data();

    return 0;


}      

