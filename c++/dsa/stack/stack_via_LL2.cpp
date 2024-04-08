#include<iostream>
using namespace std;

class node{
    public:

    int data;
    node*next;

    node(int d){
        this->data=d;
        this->next=NULL;
    }
};

class stack{
    public :
    node* head;
    int curr_capacity;
    int size;

    stack(int s){
        head=NULL;
        size=s;
    
    }
     
     int count(){
        int c=0;
        if(head==NULL){
            return 0;
        }else{
            node* curr=head;
            while(curr!=NULL){
                c++;
                curr=curr->next;
            }
        }
       // cout<<c<<endl;
        return c;
     }

    bool empty(){
    if(head==NULL){
        // cout<<"empty"<<endl;
        return true;
    }else{
        // cout<<"not empty"<<endl;
        return false;
    }
    
    }

    bool full(){
        if(count()==size){
            // cout<<"full"<<endl;
            return true;
        }else{
            // cout<<"not full"<<endl;
            return false;
        }
    }


    void push(int d){
        if(count()==size){
            cout<<"full no space to insert"<<endl;
        }else{
            if(head==NULL){
                node* temp=new node(d);
                head=temp;
            }else{
                node* temp=new node(d);
                temp->next=head;
                head=temp;
            }
        }
    }



    void pop(){
        if(head==NULL){
            cout<<"no elsement"<<endl;
        }
        else{
            node*temp=head;
            head=head->next;
            temp->next=NULL;
            delete temp;
        }
    }


    void top(){
        cout<<head->data<<endl;
    }

    void print(){
    node*temp=head;
    while(temp!=NULL){
        cout<<temp->data<<" ";
        temp=temp->next;
    }
    cout<<endl;
    }
};



int main(){

    stack a(5);
    
    cout<<a.count()<<endl;
   cout<< a.empty()<<endl;
    
    cout<<a.full()<<endl;

    a.push(1);
    a.print();
      a.push(2);
    a.print();
      a.push(3);
    a.print();
      a.push(4);
    a.print();
      a.push(5);
    a.print();
     a.push(6);
    a.print();

   

    a.pop();
    a.print();
    a.pop();
    a.print();
    
    a.count();

    
    return 0;
}