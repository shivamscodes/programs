#include<iostream>
using namespace std;

class node{
    public:
    int data;
    node* next;

    node(int d){
        data=d;
        next=NULL;
    }

};

class stack{
    public:
    node* top;
     int  size;

     stack(int d){
       size=d;
       top=NULL;
     }

    int numberofnodes(){
        node* curr=top;
        int count=0;
        if(top==NULL){
            return 0;
        }else{
          while(curr!=NULL){
            count++;
            curr=curr->next;
          }
            return count;
        }
    }

     void insert(int d){
        node *newnode=new node(d);
        if(numberofnodes()==size){
            cout<<" stack is overflow";
        }else{
            newnode->next=top;
            top=newnode;
        }
     }
   

   void deletion(){
   
    if(top==NULL){
        cout<<"empty"<<endl;
    
    }else{
         node* temp=top;
         top=top->next;
         temp->next=NULL;

         delete temp;
    }

   }

   void print(){
    node* temp=top;
    while(temp!=NULL){
        cout<<temp->data<<" ";
        temp= temp->next;
    }
    cout<<endl;
   }

};




int main(){
     stack l(5);
    l.insert(1);
    l.print();
     l.insert(2);
     l.print();
      l.insert(3);
       l.print();
       l.insert(4);
       l.print();
        l.insert(5);
        l.print();

        l.deletion();
        l.print();
         l.deletion();
        l.print();
 



    return 0;
}