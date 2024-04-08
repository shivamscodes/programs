#include<iostream>
using namespace std;

class node{
public:
int data;
node*prev;
node*next;

node(int d){
    this->data=d;
    this->prev=NULL;
     this ->next=NULL;
   
}
 ~node(){

 }
};



void insertathead(node*&head,int d){
    node*temp=new node(d);
    temp->next=head;
    head->prev=temp;
    head=temp;
}

 
 
void insertattail(node*&tail,int d){
node* temp=new node(d);
// while(tail->next!=NULL){
//     tail=tail->next;
// }

tail->next=temp;
temp->prev=tail;
tail=temp;
}



void insertatposition(node*&tail,node*& head,int p,int d){
    if(p==1){
        insertathead(head,d);
        return;
    }
      else{
    node* temp=head;
    int count=1;
    while(count<p-1){
        temp=temp->next;
        count++;  

        if(temp->next==NULL){
            insertattail(tail,d);
            return;
        } 
    }
    node* insertion=new node(d);
    insertion->next=temp->next;
    insertion->prev=temp;
    temp->next->prev=insertion;
    temp->next=insertion;
}}






void deletion(node*&head,int p){
    if(p==1){
        node*temp=head;
        
        head=head->next;
        head->prev=NULL;
        temp->next=NULL;
        
        delete temp;
       
    }else{
    node*curr=head;
    node*back=NULL;
    int count=1;

    while(count<p){
        back=curr;
        curr=curr->next;
        count++;
    }
    if(curr->next==NULL){
     back->next=NULL;
     curr->prev=NULL;
     delete curr;
     return;
    }
    back->next=curr->next;
    curr->next->prev=back;
    curr->next=NULL;
    curr->prev=NULL;
    delete curr;
}}




void print(node* head){
    node*temp=head;
    while(temp!=NULL){
        cout<<temp->data<<" ";
        temp=temp->next;
    }
cout<<"\n";
}





int main(){
    node*node1=new node(4);
    node*head=node1;
     node*tail=node1;
     cout<<head->data<<endl;
     
     insertathead(head,7);
     print(head);
      insertathead(head,8);
     print(head);
     
     insertattail(tail,10);
     print(head);

     insertatposition(tail,head,3,5);
     print(head);
     insertatposition(tail,head,1,0);
     print(head);
     insertatposition(tail,head,7,90);
     print(head);

     deletion(head,5);
     print(head);
     deletion(head,3);
     print(head);
     cout<<head->data<<endl;
     cout<<tail->data<<endl;
     deletion(head,1);
     print(head);
     deletion(head,4);
     print(head);
     
    return 0;
}