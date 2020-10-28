import axios from 'axios'

class Users {

  static async checkId(req, res) {
    try {
      const identity = req.body.identity 
      const downloadUrl = 'http://app.mobicash.rw/rnit-1/check-id'
      const { data } = await axios({
        method: 'Post',
        url: downloadUrl,
        params: {'identification': identity }})

      return res.status(200).json({
        identification: data
      });
    } catch (error) {
      console.log('\n\n\n\n\n', error)
      return res.status(500).json({
        message: error.message
      });
    }
  }

}

export default Users;
