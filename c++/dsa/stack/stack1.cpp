#include<iostream>
using namespace std;

class stack{
   public:
   int top;
   int *arr;
   int size;

   stack(int s){
      top=-1;
      arr=new int[s];
      size=s;
   }


   bool empty(){
   if(top==-1){
      return true;
      }else{
         return false;
      }
}

bool full(){
   if(top==size-1){
      return true;
   }else {
      return false;
   }
}

void push(int d){
   if(top==size-1){
      cout<<"satcke is full"<<endl;
   }
   else{
      top++;
      arr[top]=d;
   }
}

void pop(){
   if(empty()==true){
      cout<<"stack is empty"<<endl;
   }else{
      top--;
   }
}

void print(){
   for(int i=0;i<=size;i++){
      cout<<arr[i]<<" ";
   }
}
};


int main(){
  stack a(5);
  a.empty();
  a.push(1);
  
   return 0;
}