#include<iostream>
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


void insert(node* &root){
    int d;
    int n;
    

    if(root == NULL){
       cout<<"enter the data"<<endl;
    cin>>d;
    node* temp=new node(d);
        root=temp;
       return;
    }
    else
    {
        
        cout<<"1 for left and 0 for right"<<endl;
        cin>>n;

        if(n==1){
             
          insert(root->left);

            return;
        }else{
            if(n==0){
                
                 
                    insert(root->right);
           return;
            }
        }
    }
}

int height(node* root){
    if(root==NULL){
    return 0;
}else{
    return max(height(root->left),height(root->right));
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

    insert(root);
    insert(root);
     insert(root);
      insert(root);
       insert(root);
   
   preorder(root);
   

    return 0;
}