/*************************************************************************
* PROGRAM NAME : 지뢰찾기의 공통코드
* DESCRIPTION  : 
* DATE         : 2020.01.09
* PROGRAMMER   : 김나리
*************************************************************************/

//CODE 를 export하여 다른 .js파일에서 사용할수 있는 상태로 만듦
export const CODE = {        //지뢰판의 상태 코드
        MINE: -5,            //지뢰 칸
        NORMAL: -1,          //일반 칸
        FLAG: -2,            //지뢰 결과표시 
        FLAG_MINE: -3,       //깃발 표시
        CLICKED_MINE: -4,    //지뢰선택
        OPENED: 0,           //일반 칸
    }
