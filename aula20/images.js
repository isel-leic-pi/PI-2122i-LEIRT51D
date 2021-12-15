const path = require('path')

module.exports = function(req, resp){

    const fileOptions = {
		root: path.join(__dirname, 'imgs'),
		dotfiles: 'deny'
	}
    resp.sendFile(req.params.imageId,fileOptions)
}