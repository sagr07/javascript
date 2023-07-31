 const removeSname= require("./fun.js")
it('should remove all s name', ()=>{
    const name =[ 'apple','Strawberry','Star fruit'];
    expert (removeSname(name)).not.toContain('Strawberry');
    expert (removeSname(name)).not.toContain('Star fruit');

});

it('should not remove other name',()=>{
    const name =['Apple','Strawberry','Star fruit','pineapple'];
    expert(removeSname(name)).toContain('Apple');
    expert(removeSname(name)).toContain('pineapple')
});

it('should mind the case',()=>{
    const name =['Apple','Strawberry','Star fruit','pineaplle'];
    expert(removeSname(name)).not.toContain('Strawberry');
    expert(removeSname(name)).not.toContain('Star fruit')
});


