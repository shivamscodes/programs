#include<iostream>
using namespace std;

class node{
    public:
    int data;
    node*next;
    node*prev;

  node(int d){
  data=d;
 next=NULL;
 prev=NULL; 
  }
};
void insertathead(node*&head,int d){
    if(head==NULL){
       node*node1=new node(d);
       head=node1;
       node1->next=node1;
       node1->prev=node1;
     return;  
    }
    node*tail=head;
    while(tail->next!=head){
        tail=tail->next;
    }
    node*temp=new node(d);
    temp->next=head;
    temp->prev=tail;
    head->prev=temp; 
    tail->next=temp;
    head=temp;
    }

void insertatend(node*&head,int d){
    if(head==NULL){
        node*node1=new node(d);
        head=node1;
        node1->next=node1;
        node1->prev=node1;
    return;
    }
    node*tail=head;
    while(tail->next!=head){
        tail=tail->next;
    }
    node*temp=new node(d);
    temp->next=head;
    temp->prev=tail;
    tail->next=temp;
    head->prev=temp;
    tail=temp;
}

void insertatposition(node*&head,int p,int d){
    if(p==1){
        insertathead(head,d);
        return;
    }
     node*curr=head;
     node*back=NULL;
     int c=1;
     while(c<p){
        back=curr;
        curr=curr->next;
        c++;
     }
     
     node*insertion=new node(d);
     insertion->next=curr;
     insertion->prev=back;
     back->next=insertion;
     curr->prev=insertion;
}

void deletion(node*&head,int p){
    if(p==1){
     node*tail=head;
     while(tail->next!=head){
        tail=tail->next;
     }        
     node*temp=head;
     head=head->next;
     head->prev=tail;
     tail->next=head;
     delete temp;
     return;
    }
    node*tail=head;
    while(tail->next!=head){
        tail=tail->next;
    }
    node*temp=head;
    int c=1;
    while(c<p){
        temp=temp->next;
        c++;
    }
   if(temp==tail){
    tail=tail->prev;
    tail->next=head;
    head->prev=tail;
    delete temp;
    return;
   }
   temp->next->prev=temp->prev;
   temp->prev->next=temp->next;
   delete temp;
}
void print(node*head){
    node*temp=head;
    do{
        cout<<temp->data<<" ";
        temp=temp->next;
    }while(temp!=head);
cout<<endl;
}

void check(node*head){
    node*temp=head;
    for(int i=0;i<=10;i++){
        cout<<temp->data<<"->";
        temp=temp->next;
    }
}
int main(){

    node*head=NULL;

    insertathead(head,1);
 print(head);
 insertathead(head,3);
 print(head);
 insertatend(head,5);
 print(head);
 insertathead(head,6);
 print(head);

insertatposition(head,3,0);
print(head);
insertatposition(head,6,9);
print(head);
insertatposition(head,1,2);
print(head);
deletion(head,1);
print(head);
deletion(head,6);
print(head);
deletion(head,3);
print(head);
deletion(head,2);
print(head);
    return 0;
}