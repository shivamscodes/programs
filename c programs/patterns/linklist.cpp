#include <iostream>
using namespace std;

class node
{
public:
  int data;
  node *next;
  node(int d) // constructor
  {
    (*this).data = d;
    this->next = NULL;
    // cout<<"i am in contructor"<<endl;
  }
};
void print(node *s)
{
  while (s != NULL)
  {
    cout << s->data;
    s = s->next;
  }
}
int main()
{
  node *a, *b;
  a = new node(33);
  b = new node(12);
  a->next = b;
  print(a);
}
