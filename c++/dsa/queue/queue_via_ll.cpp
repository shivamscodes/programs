#include <iostream>
using namespace std;

class node{
    public:
     int data;
     node*next;

     node(int d){
        data=d;
        next=NULL;
     }
};


class queue{
    public:
     node*front;
     node*rear;
     int size;

     queue(){
        front=NULL;
        rear=NULL;
        size=0;
     }


     int count(){
      int c=0;
        if(front==NULL && rear==NULL){
            return 0;
        }else{
            node*temp=front;
            while(temp!=NULL){
              c++;
                temp=temp->next;
              
            }
        }
        return  c;
     }

     bool empty(){
        if(front==NULL && rear==NULL){
            cout<<"list is empty"<<endl;
            return true;
        }else{
            cout<<"not empty"<<endl;
            return false;
        }
     }

     void enqueue(int d){
        node*temp=new node(d);
        if(front==NULL && rear==NULL){
            front=temp;
            rear=temp;
            
        }else{
            node*curr=front;
            while(curr->next!=NULL){
                curr=curr->next;
            }
            curr->next=temp;
            rear=temp;
          
        }
        size++;
     }

     void dequeue(){
      if(front==NULL && rear==NULL){
        cout<<"list is empty"<<endl;
      }    else{
        node*temp=front;
        front=front->next;
        temp->next=NULL;
        delete temp;
      }
      size--;
     }



     void print(){
        node*temp=front;
        while(temp!=rear){
            cout<<temp->data<<"->";
           temp=temp->next;
        }
        cout<<temp->data<<" ";
        cout<<endl;
     }
};


int main(){
    queue q;
     
      cout<<q.count()<<endl;
       cout<<q.empty()<<endl;

   
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
     q.enqueue(8);
    q.print();

   cout<<q.count()<<endl;
       cout<<q.empty()<<endl;


       q.dequeue();
       q.print();
         q.dequeue();
       q.print();
         q.dequeue();
       q.print();
         q.dequeue();
       q.print();
    
     cout<<q.count()<<endl;

       q.enqueue(1);
    q.print();

    cout<<q.count()<<endl;
return 0;
}