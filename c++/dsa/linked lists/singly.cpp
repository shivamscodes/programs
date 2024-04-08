#include <iostream>
using namespace std;
class node{
    public:
    int data;
    node* next;
    
    node(int d){
      this->  data=d;
      this-> next=NULL;
    }
    
    ~node(){
        
    }
};

void insertathead(node*&head,int d){
    node*temp=new node(d);
    temp->next=head;
    head=temp;
}

 
void insertatend(node* &tail,int d){   
 node*temp=new node(d);
 tail->next=temp;
 tail=temp;
}

void insertatposition(node*&tail,node*&head,int p,int d){
  if(p==1){
    insertathead(head,d);
    return ;
}
    node*temp=head;
    int count=1;
    
    while(count<p-1){
        temp=temp->next;
        count++;
    }
    if(temp==NULL){
        insertatend(tail,d);
    return;
    }
    node* insertion=new node(d);
    insertion->next=temp->next;
    temp->next=insertion;
}


void deletein(node*&head,int p){
    if(p==1){
        node*temp=head;
        head=head->next;
        temp->next=NULL;
        delete temp;
    }
    else{
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
}

void revlist(node* &head){
    node* prev=NULL;
    node* curr=head->next;
    while(curr!=NULL){
        head->next=prev;
        prev=head;
        head=curr;
        curr=curr->next;
    }
    head->next=prev;
}


node* revrecurssion(node* &head){
   //base case..
   if(head==NULL || head->next==NULL){
    return head;
   }
    //recc case
    node* new_head=revrecurssion(head->next);
    head->next->next=head;
    head->next=NULL;

    return new_head;
}

// void deleteattail(node* &head){
//     node* curr=head;
//     node* prev=NULL;
//     while(curr->next!=NULL){
//         prev=curr;
//         curr=curr->next;
//     }
    
//     delete curr; 
// }

void reverseprint(node*&head){
 //base condition
 if(head==NULL){
    return;
 }

 //recursion call
reverseprint(head->next);
 cout<<head->data<<" ";
 }



 

void sorting(node* &head){
    node* prev=head;
    node* curr=head->next;

  while(curr!=NULL){
    if(curr->data < prev->data){
        prev->next=curr->next;
        curr->next=head;
       // head=curr;
         curr=prev;
    }
   else{
    prev=curr;
    curr=curr->next;
   }
  }
}


void print(node*&head){
    node*temp=head;
    while(temp!=NULL){
        cout<<temp->data<<" ";
        temp=temp->next;
    }
    cout<<"\n";
}

int main() {
node*node1=new node(1);

node*head=node1;
node*tail=node1;
cout<<node1->data<<endl;

insertathead(head,4);
print(head);

insertatend(tail,7);
print(head);

insertatposition(tail,head,3,13);
print(head);
insertatposition(tail,head,1,0);
print(head);
insertatposition(tail,head,6,100);
print(head);

deletein(head,1);
print(head);
deletein(head,5);
print(head);


// cout<<head->data<<endl; 
// cout<<tail->data<<endl;
// reverseprint(head);

//revrecurssion(head);
//print(head);
 
 revlist(head);
 print(head);

sorting(head);
print(head);
    return 0;
}



