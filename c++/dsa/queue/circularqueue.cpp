#include<iostream>
using namespace std;

class queue{
    public:
    int f;
    int r;
    int *arr;
    int size;

    queue(int s){
        arr=new int [s];
        size=s;
        f=-1;
        r=-1;

    }

    
    bool empty(){
        if(f==-1 && r==-1){
            cout<<"Q is empty"<<endl;
            return true;
        }else{
            return false;
        }
    }


    bool full(){
        if((r+1)%size==f){
            cout<<"full"<<endl;
            return true;
        }else{
            return false;
        }
    }


    void enqueue(int d){
        if((r+1)%size==f){
            cout<<"queue is full"<<endl;
        }else{
            if(f==-1 && r==-1){
                f++;
                r++;
                arr[r]=d;
            }else{
                r=(r+1)%size;
                arr[r]=d;
            }
        }
    }



     void dequeue(){
        if(f==-1 && r==-1){
            cout<<"full"<<endl;
        }else{
            f=(f+1)%size;
        }
     }



     void print(){
        for(int i=f;i<=r;i++){
            cout<<arr[i]<<" ";
        }
        cout<<endl;
     }
};


int main(){
     
   queue q(6);
   cout<<q.empty()<<endl;
   cout<<q.full()<<endl;

   q.enqueue(1);
   q.print();
    q.enqueue(2);
   q.print();
    q.enqueue(3);
   q.print();
    q.enqueue(4);
   q.print();
    q.enqueue(5);
   q.print();
    q.enqueue(6);
   q.print();
    q.enqueue(7);
   q.print();

  cout<<q.empty()<<endl;
   cout<<q.full()<<endl;

   q.dequeue();
   q.print();
   q.dequeue();
   q.print();
  q.dequeue();
   q.print();



    return 0;
}