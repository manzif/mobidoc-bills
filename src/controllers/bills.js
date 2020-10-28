import model from '../db/models';

const { billing } = model;

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
            console.log('\n\n\n\n\n', 'turi hano')
            const findBilling = await billing.findAll();
            console.log('\n\n\n\n\n', 'turi hano')
            if (findBilling) {
                return res.status(200).json({ total: findBilling.length, billings: findBilling });
            }
            return res.status(400).json({ message: "No Billing Found" });
        } catch (error) {
            console.log('\n\n\n\n', error.message)
            return res.status(500).json({ error });
        }
    }

}

export default BillingManager;