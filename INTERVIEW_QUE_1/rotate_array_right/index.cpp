#include<iostream>
using namespace std;

int main(){
    int arr[] = {1,4,6,7,9,10};
    int n = sizeof(arr)/sizeof(arr[0]);
    int k = 3;

    k = k % n;
    for(int i = 1;i<=k;i++){
        int temp = arr[n - 1];

        for(int j = n-1;j>0;j--){
            arr[j] = arr[j-1];
        }
        arr[0] = temp;
    }
    cout << "array after right rotation : ";
    for(int i = 0;i< n;i++){
        cout << arr[i] << " ";
    }

    return 0;
}