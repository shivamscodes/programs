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

 ~ node(){

 }
};

void insertathead(node*&head,int d){
    if(head==NULL){
        node*temp=new node(d);       //check this
        head=temp;
        temp->next=temp;
        return;
    }
    node*tail=head;
    while(tail->next != head){
        tail=tail->next;
    }
    node*temp=new node(d);
    temp->next=head;
    tail->next=temp;
    head=temp;
}

void insertattail(node*&head,int d){
    if(head==NULL){
        node*temp=new node(d);
        head=temp;
        temp->next=temp;
    }
    node*tail=head;
    while(tail->next!=head){
        tail=tail->next;
    }
    node*temp=new node(d);
    temp->next=tail->next;
    tail->next=temp;
    tail=temp;
}

void insertatposition(node*&head,int p,int d){
    if(p==1){
        insertathead(head,d);
        return;
    }
    node*temp=head;
    int cnt=1;
    while(cnt<p-1){
        temp=temp->next;
        cnt++;
        }

        if(temp->next==head){
           insertattail(head,d);
            
        }else
        {
        node*insertion=new node(d);
        insertion->next=temp->next;
        temp->next=insertion;
    }
}

void deletenode(node*&head, int p){
     if(p==1){
        node*tail=head;
        while(tail->next!=head){
            tail=tail->next;
        }
        node*temp=head;
         tail->next=head->next;
        head=head->next;
        temp->next=NULL;
        
        delete temp;
        return;
    }
        node*curr=head;
        node*prev=NULL;

        int c=1;
        while(c<p){
        prev=curr;
        curr=curr->next;
        c++;
        }
        prev->next=curr->next;
        curr->next=NULL;
        delete curr;
    

    }

void print(node*head){
    node*temp=head;
    do{
       cout<<temp->data<<" ";
       temp=temp->next;
    }while(temp!=head);
cout<<endl;
}
 
 void checkcircular(node*head){
    node*temp=head;
    for(int i=0;i<=10;i++){
     cout<<temp->data<<" ";
       temp=temp->next;
    }
 }
int main(){
    node*head=NULL; 
    
    insertathead(head,1);
    print(head);
    insertathead(head,2);
    print(head);
    insertathead(head,3);
    print(head);
    

    insertattail(head,5);
    print(head);

    insertatposition(head,3,9);
    print(head);
    
     insertatposition(head,1,0);
    print(head);
    insertatposition(head,7,7);
    print(head);
     //checkcircular(head);
     cout<<head->data<<endl;
    deletenode(head,4);
    print(head);
     deletenode(head,1);
    print(head);
    return 0;
}
