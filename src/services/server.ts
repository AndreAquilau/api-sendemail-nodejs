import 'dotenv/config';
import app from './App';

app.listen(process.env.PORT, () => {
  console.log(`${process.env.BASE_URL}:${process.env.PORT}`);
});
