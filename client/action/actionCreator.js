//increment likes
export function increment(index){
  return{
    type:'INCREMENT_LIKES',
    index
  }
}
//add comments
export function addComment(postId, author,comment){
  return{
    type:'ADD_COMMENT',
    postId,
    author,
    comment
  }
}
//remove comments
export function removeCommnet(postId,i){
  return{
    type:'REMOVE_COMMENT',
    i,
    postId
  }
}
