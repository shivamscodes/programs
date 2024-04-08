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

   ~node(){

   }
};

void insert(node* &root,int d){
    if(root==NULL){
     node* temp=new node(d);
     root=temp;
    }
    else{
        if(root->data > d){ 
            insert(root->left,d);
            return;
        }else{
            if(root->data <d){
            insert(root->right,d);
            return;
        }
        }
    }
}


void deletion(node* &root,int key){
if(root==NULL){
    return;

}else if(root->data == key){

     if(root->left==NULL && root->right==NULL){
      
        root=NULL;
     }
     else if(root->left == NULL){
        root=root->right;
        root->right=NULL;
        delete root->right;
        return;
     }
     else if(root->right == NULL){
        root=root->left;
        root->left=NULL;
         delete root->left;
        return;
     }
     else{
        node* temp=root->left;
        node* prev=root->left;

        while(temp->left != NULL && temp->right != NULL){
            prev=temp;
            temp=temp->right;
        }
        if(prev==temp){
        root->data=temp->data;
        root->left=temp->left;
          return;      
      }
       root->data=temp->data;
       prev->right=NULL;
        delete temp;
     }
}
else if(root-> data > key){
    deletion(root->left,key);
    
}
else if(root->data < key){
    deletion(root->right,key);
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

    insert(root,15);
   
    insert(root,12);
    
 
     insert(root,11);
 //   preorder(root);
   //  cout<<endl; 
     insert(root,17);
    //preorder(root);
      //cout<<endl; 
     insert(root,29);
    //preorder(root);
  insert(root,14);
insert(root,6);
insert(root,1);
insert(root,9);
insert(root,16);

preorder(root);
cout<<endl; 
deletion(root,29);
preorder(root);
cout<<endl; 
deletion(root,12);
preorder(root);
cout<<endl; 
deletion(root,6);
preorder(root);


    return 0;
}




