#include<iostream>
using namespace std;

void moveArray(int arr[],int n){
    int nz = 0,z = 0;
    while(nz < n){
        if(arr[nz] != 0){
            int temp = arr[nz];
            arr[nz] = arr[z];
            arr[z] = temp;
            nz++;
            z++;
        }else{
            nz++;
        }
    }
}
int main(){
    int array[] = {0,3,0,6,11};
    int n = sizeof(array)/sizeof(array[0]);

    moveArray(array,n);

    for(int i = 0;i < n;i++){
        cout << array[i] << " ";
    }

    return 0;
}