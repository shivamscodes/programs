#include<iostream>
using namespace std;

class stack{
    public:
    int top;
    int *arr;
    int size;

    stack(int s){
        top=-1;
        arr=new int [s];
        size=s;
    }

    void empty(){
        if(top==-1){
            cout<<"stack is empty"<<endl;
        }else{
            cout<<"not empty"<<endl;
        }
    }


    void full(){
        if(top==size-1){
          cout<<"stack overflow"<<endl;
        }
        else{
            cout<<"not full"<<endl;
        }
    }



    void push(int x){
        if(top==size-1){
            cout<<"stack is full"<<endl;
        }else{
            top++;
            arr[top]=x;
        }
    }


    void pop(){
        if(top==-1){
            cout<<"stack is empty"<<endl;
        }else{
            top--;
        }
    }

    void print(){
        for(int i=0;i<=top;i++){
            cout<<arr[i]<<" ";
        }
        cout<<endl;
    }
};




int main(){

    stack a(5);
    a.empty();
    a.full();
    a.push(1);
     a.push(2);
     a.push(3);
      a.push(4);
       a.push(5);
    a.print();
    a.empty();
    a.full();

    a.pop();
    a.pop();
    a.pop();
    a.print();
    
    return 0;
}