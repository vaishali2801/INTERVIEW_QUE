#include<iostream>
using namespace std;

void reverse(int arr[],int left,int right){
    while(left < right){
        int temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
}
int main(){

    int arr[] = {1,3,5,7,11};
    int n = sizeof(arr)/sizeof(arr[0]);
    int k = 2;
    k = k % n;

    reverse(arr,0,k-1);
    reverse(arr,k,n-1);
    reverse(arr,0,n-1);

    for(int i = 0;i< n;i++){
        cout<< arr[i] << " ";
    }

    return 0;
}