export class LikeComponent
{
    
    
    constructor(private _likeCount:number,private _isSelect:boolean)
    {
        
    }

    onclick()
    {
        if(this._isSelect)
        {
            this._likeCount-=this._likeCount;
        }
        else
        {
            this._likeCount+=this._likeCount;
        }
    }
    get likeCount()
    {
        return this._likeCount;
    }
}