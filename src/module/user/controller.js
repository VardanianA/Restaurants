import User from '../../model/user';

export const getData = async (req, res) => {
    const user = await User.find({}).populate('menuId');
    res.send(user)
}

export const createData = async (req, res) => {
    const user = new User( req.body );

    user.save((err) => {
        if (err) {
            res.json({ message: err.message, type: 'danger' })
        } else {
            res.send('ok');
        }
    })

}
