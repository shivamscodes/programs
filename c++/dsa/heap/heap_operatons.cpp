#include<iostream>
using namespace std;

class maxheap{
    public:
    int *arr;
    int size;
    int total_size;

    maxheap(int n){
        arr=new int[n];
        size=0;
        total_size=n;

    }    

       //insert in heap

       void insert(int value){
        if(size==total_size){
            cout<<"heap overflow"<<endl;
            return;
        }
        
            arr[size]=value;
            int index =size;
            size++;

            //compare with parent


            while(index>0 && arr[(index-1)/2]<arr[index]){
                swap( arr[(index-1)/2],arr[index]);
                index=(index-1)/2;
            }
                    cout<<arr[index]<<"is inserted"<<endl;

        }


           void heapify(int index){
            int largest=index;
            int left=2*index+1;
            int right=2*index+2;

            //largest store the greatest

            if(left<size && arr[left]>arr[largest]){
                largest=left;
            }
              if(right<size && arr[right]>arr[largest]){
                largest=right;
            }
                 
                 if(largest!=index){
                    swap(arr[index],arr[largest]);
                    heapify(largest);
                 }
           }

        void remove(){
            if(size==0){
                cout<<"heap underflow"<<endl;
                return;
            }

            cout<<arr[0]<<"deleted"<<endl;

            arr[0]=arr[size-1];
            size--;

            if(size==0)
            return;

            heapify(0);
        }

        void print(){
            for(int i=0;i<size;i++){
                cout<<arr[i]<<" ";
            }
            cout<<endl;
        }

};

int main(){
         maxheap h1(6);
         h1.insert(54);
         h1.insert(44);
         h1.insert(93);
         h1.print();
         h1.remove();
         h1.print();
         h1.insert(76);
         h1.insert(34);
         h1.insert(12);
         h1.print();
          h1.remove();
         h1.print();

    return 0;
}