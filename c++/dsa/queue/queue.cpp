#include<iostream>
using namespace std;

class queue{
    public:
    int front;
    int rare;
    int *arr;
    int size;

    queue(int s){
        arr=new int[s];
        front=-1;
        rare=-1;
        size=s;
    }
  
  bool empty(){
    if(front==-1 && rare==-1){
        cout<<"empty"<<endl;
        return true;
    }else{
        cout<<"not empty"<<endl;
        return false;
    }
  }

  bool full(){
    if(rare==size-1){
     cout<<"queue is full"<<endl;
     return true;
    }else{
        cout<<"not full"<<endl;
    return false;
    }
  }

  void enqueue(int d){
   if(rare==size-1){
    cout<<"queue is full"<<endl;
    return;
   }else{
    if(front==-1 && rare==-1)
{
    front++;
    }
    rare++;
    arr[rare]=d;
   }
  }

  void dequeue(){
   
  }
   
   void print() {
   for (int i=0;i<=rare;i++){
    cout<<arr[i]<<" ";
   }
   cout<<endl;
   }
};


int main(){

    queue l(5);
    l.empty();
    l.full();

    l.enqueue(1);
  l.print();
    l.enqueue(2);
    l.print();
    l.enqueue(3);
   l.print();
    l.enqueue(4);
    l.print();
    l.enqueue(5);
  l.print();

  l.dequeue();
  l.print();
  l.dequeue();
  l.print();
  l.dequeue();
  l.print();

    return 0;
}