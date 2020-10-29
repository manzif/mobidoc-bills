import dbConn  from '../db/lib/db';


class BillingManager {

    static async viewApplication(req, res) {
        try {
            const application = await Application.findOne({ where: { id: req.params.id } });
            if (application) {
                return res.status(200).json({
                    application: application
                });
            }
            return res.status(404).json({
                message: 'Application does not exist'
            });
        } catch (error) {
            return res.status(400).json({
                message: error.message
            });
        }
        
    }

    static async getAllBillings(req, res) {
        try {
            dbConn.query('SELECT * FROM billing',function(err,rows)     {
 
            if(err) {
              return res.status(400).json({ message: err });

            } else {
                if (rows.length === 0) {
                   return res.status(400).json({ message: 'No bills found' }); 
                }
                return res.status(200).json({message: 'Bills successfuly fetched', data: rows, total: rows.length });
              }
            });
        } catch (error) {
            return res.status(500).json({ error });
        }
    }
}

export default BillingManager;
