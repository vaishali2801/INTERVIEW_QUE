#include<iostream>
using namespace std;

int main(){
    int array[] = {2,2,4,4,7,9,3,5,5};
    int num = sizeof(array)/sizeof(array[0]);

    int temp[num];
    int j = 0;
    temp[j++] = array[0];

    for(int i = 1;i< num;i++){
        if(array[i] != array[i - 1]){
            temp[j++] = array[i];
        }
    }

    for(int i = 0;i<j;i++){
        cout << temp[i] << " ";
    }

    return 0;
}