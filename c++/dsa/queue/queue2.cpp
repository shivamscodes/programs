#include<iostream>
using namespace std;

class queue{
    public:
    int f;
    int r;
    int*arr;
    int size;

    queue(int s){
        arr=new int[s];
        size=s;
        f=-1;
        r=-1;
    }

    void empty(){
         if(f ==-1 && r==-1){
            cout<<"empty"<<endl;
         }else{
            cout<<"not empty"<<endl;
         }
    }


    void full(){
        if(r==size-1){
            cout<<"full"<<endl;
        }else{
            cout<<"not full"<<endl;
        }
    }


    void enqueue(int d){
        if(r==size-1){
            cout<<"no space q full"<<endl;
        }else{
            if(f==-1 && r==-1){
                f++;
                r++;
                arr[r]=d;
            }else{
                r++;
                arr[r]=d;
            }
        }
    }
  
     
     void dequeue(){
        if(f==-1 && r==-1){
            cout<<"Q is empty"<<endl;
        }else{
            f++;
        }
     }

    void print(){
        for(int i=f;i<=r;i++){
            cout<<arr[i]<<" ";
        }cout<<endl;
    }
};



int main(){
  
    queue q(6);
    q.empty();
    q.full();

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
     
     q.dequeue();
     q.print();
     q.dequeue();
     q.print();
     q.dequeue();
     q.print();
     


    return 0;
}