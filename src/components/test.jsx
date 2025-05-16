export default function Test({children}){
console.log(children)
return( <>
    {children.map((Element)=>{
        return Element
    })}
    </>
)
}