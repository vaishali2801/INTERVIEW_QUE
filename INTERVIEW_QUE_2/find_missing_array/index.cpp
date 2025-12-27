#include<iostream>
using namespace std;

int findElement(int array[],int n){
    int total = n + 1;
    int eSum = total * (total - 1)/2;

    int aSum = 0;
    for(int i = 0;i < n;i++){
        aSum += array[i];
    }
    return (eSum - aSum);
}
int main(){
    int array[] = {1,4,3,5,0};
    int n = sizeof(array)/sizeof(array[0]);

    cout << findElement(array,n);
    

    return 0;
}