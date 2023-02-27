export default function Forms(){
    return (
        <>
            <form action="" method="post">
                <div>
                    <label htmlFor="name">Nom :</label>
                    <input type="text" name="name" id="name" />
                </div>
                <div>
                    <label htmlFor="age">Age</label>
                    <input type="number" name="age" id="age" />
                </div>
                <button type="submit">Envoyez</button>
            </form>
        </>
    )
}