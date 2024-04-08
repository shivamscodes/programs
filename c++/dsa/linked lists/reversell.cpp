#include<iostream>
using namespace std;

class node{
    public:
    int data;
    node*next;

    node(int data){
     this->data=data;
     this->next=NULL;
    }
};
void reverse(node*head){
    if(head==NULL || head->next==NULL){
        return ;
    }
    
    node*prev=NULL;
    node*curr=head;
    node*forward=NULL;

     while(curr!=NULL){
        forward=curr->next;
        curr->next=prev;
        prev=curr;
        curr=forward;
     }
}
int main(){

    
    return 0;
}