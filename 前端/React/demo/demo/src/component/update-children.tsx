export const UpdateChildren = (props) => {
  const data = { name: '张三', value: 123 }
  return props.children(data)
}
