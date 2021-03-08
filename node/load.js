const req = require.context('./mapJson', false, /\.json$/)
const requireAll = (requireContext) => {
  requireContext.keys().map(requireContext)
  console.log(requireContext)
}
requireAll(req)
console.log('----a----------')