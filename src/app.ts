import app from "./config/index";
import env from './config/enviroment'

const PORT = env.getPort();

app.listen(PORT, () => {
   console.log('Express server listening on port ' + PORT);
});

