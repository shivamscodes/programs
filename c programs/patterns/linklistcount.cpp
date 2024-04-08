#include <iostream>
using namespace std;

class node{
    public:
    int data;
    node*next;

    node(int a)
    {
        this->data=a;
        this->next=NULL;
    }
};
int count(node*head);

         int main(){
            node*head=new node(1);
            node*second=new node(2);
            node*third=new node(3);
            node*fourth=new node(4);
            head->next=second;
            second->next=third;
            third->next=fourth;
         int x=   count(head);
cout<<x;
         }                                         
      int count(node*head)
    {
        int coun=0;
        while(head!=NULL){
           coun++;
            head=head->next;
     
        }return coun;
                               
    }                                               
