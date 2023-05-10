export default function handler(req, res) {
    console.log('api/time.js')
    if( req.method === 'GET' ){
        return res.status(200).json({time: new Date().toISOString()});
    }

}