#include <iostream>
using namespace std;

class node{
    public:
    int data;
    node* left;
   node* right;

   node(int d){
    data=d;
    left=NULL;
    right=NULL;
   }
};


void insert(node* &root,int d){
    node* temp=new node(d);
    int n;

    if(root== NULL){
        root=temp;
        return;
    }else{
        cout<<"1 for left and 0 for right"<<endl;
        cin>>n;
        if(n==1){
            insert(root->left,d);
            return;
        }else{
            if(n==0){
                 insert(root->right,d);
            return;
            }
        }
    }
}

int height(node* root){

     if(root==NULL){
      return -1;
      
 }else{
    return (1+ max(height(root->left),height(root->right)));
 }
}

int getsize (node*root){
    if(root==NULL){
        return 0;
    }else{
        return(1 + getsize(root->left) + getsize(root->right));
    }
}

void preorder(node* root){
    if(root==NULL){
        return;
    }else{
        cout<<root->data<<" ";
        preorder(root->left);
         preorder(root->right);
    }
}

void postorder(node* root){
    if(root==NULL){
        return;
    }else{
        
        postorder(root->left);
        postorder(root->right);
         cout<<root->data<<" ";
    }
}


void inorder(node* root){
    if(root==NULL){
        return;
    }else{
       
        inorder(root->left);
         cout<<root->data<<" ";
         inorder(root->right);
    }
}



int main(){
 node* root=NULL;

 insert(root,1);
  insert(root,2);
   insert(root,3);
    insert(root,4);
     insert(root,5);
      insert(root,6);

preorder(root);

  cout<<"height "<<height(root)<<endl;
  cout<<"size "<< getsize(root)<<endl;
  
    return 0;
}