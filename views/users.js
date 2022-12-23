const {users} = require ('../database/data.json')

module.exports = `<table>
<tr>
  <th>Pseudo</th>
  <th>Email</th>
</tr>
${users.map(({ pseudo, email }) => `
  <tr>
    <td>${pseudo}</td>
    <td>${email}</td>
  </tr>
`).join('')}
</table>
`
