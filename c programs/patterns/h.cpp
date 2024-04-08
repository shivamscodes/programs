#include <iostream>
using namespace std;

class node{
 public:
    int data;
    node *next;

 node(int a)
    {
        this->data=a;
        this->next=NULL;

    }
};

void print(node*head);

int main()
{
node* head=new node(1);

node*second=new node(2);
node*third=new node(3);
head->next=second;
second->next=third;
print(head);
}
void print(node *head)
{
    while(head!=NULL){
    cout<<head->data<<endl;
    head=head->next;}


} 