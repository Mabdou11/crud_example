#include <stdlib.h>
#include <stdio.h>
#include <iostream>

bool existe( int a , int b){
    if( a % 10 == b){
        return true;
    }else{
        if( a < b ){
           return false; 
        }
        return existe(a / 10 , b);
    }
}

int main(){
    printf("hello, world!\n");
    bool value = existe(346758 , 5);
    if(value){
        printf("Hell yeah");
    }else{
        printf("Hell no");
    }
    return 0;
}