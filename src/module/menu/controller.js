import Menu from '../../model/menu';

export const getData = async(req, res) =>{
    const menu = await Menu.find({}).exec();
    res.send(menu)
}

export const createData = async(req, res) =>{
    const menu = new Menu({
        name: req.body.name,
        type: req.body.type,
        count: req.body.count
    });

    menu.save((err) => {
        if(err){
            res.json({message: err.message, type: 'danger'})
        }else{
            res.send('ok');
        }
    })

}
