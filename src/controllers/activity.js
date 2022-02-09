import axios from 'axios';

class ActivityManager {

    static async login(req, res) {
        try {
            const { username, password, changeDeviceID } = req.body

            const loginAction = await axios.post('https://local-api.kinz.jo/v4/default/login', {username, password, changeDeviceID})

            console.log('\n\n\n', loginAction)

            if (loginAction.status === 200) {
                return res.status(200).json({
                    data: loginAction.data
                });
            }
        } catch (error) {
            return res.status(400).json({
                message: error.message
            });
        }
        
    }
}

export default ActivityManager;
