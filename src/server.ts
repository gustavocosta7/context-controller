import app from './app';

app.listen(process.env.PORT || 8080, () => {
    console.log("Action controller running")
});