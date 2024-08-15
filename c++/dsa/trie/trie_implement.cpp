#include<iostream>
using namespace std;

class trienode{
    public:
    char data;
    trienode* children[26];
    bool isterminal;

    trienode(char ch){
        data=ch;
        for(int i=0;i<26;i++){
            children[i]=NULL;
        }
        isterminal=false;
    }
};

class trie{
    public:
    trienode* root;

   trie(){
    root=new trienode('\0');
   }
    void insertutil(trienode *root,string word){
        //base case
        if(word.length()==0){
            root->isterminal=true;
            return;
        }
         
         //assuming all char are capital
        int index=word[0]-'A';

        trienode* child;

          //persent
        if(root->children[index]!=nullptr){
          child=root->children[index];
        }
        else{
            //absent
         child=new trienode(word[0]);
         root->children[index]=child;
        }

        //recursion
        insertutil(child,word.substr(1));

    }

    void insertword(string word){
        insertutil(root,word);
    }


    bool searchutil(trienode *root,string word){
       //base case
       if(word.length()==0){
        return root->isterminal;
       }

       int index=word[0]-'A';
       trienode *child;

       //present
       if(root->children[index]!=NULL){
        child=root->children[index];
       }
       else{
        //absent
        return false;
       }

    //recursion
      return searchutil(child,word.substr(1));
    }
    

    bool search(string word){
       return searchutil(root,word);
    }

    
};


int main(){

    trie *t=new trie();
 
    t->insertword("ABCD");
      t->insertword("HELP");
      t->insertword("CALL");
      t->insertword("HELLO");
    cout<<"present or not "<<t->search("CALL");
   

    return 0;
    
}