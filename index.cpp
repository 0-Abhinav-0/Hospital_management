#include<bits/stdc++.h>
using namespace std;

int main(){
    vector<int>nums={3,4,-1,1,2,7};
    int count=1;
    sort(nums.begin(),nums.end());
    for(int num:nums){
        if(num==0)continue;
        if(num<0)continue;
        else{
            if(num==count)count++;
            else{
                cout<<count;
                return 0;
            }

        }
    }
    return 0;
}