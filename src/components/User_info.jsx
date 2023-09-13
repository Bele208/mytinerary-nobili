export default function User_info({ user, show, setShow }) {
    return (
        <>
            <div>
                <img src={user.photo} />
                <p >{user.name}</p>
                <p >{user.lastName}</p>
                <p >{user.country}</p>
            </div>
            <div>
                {show ? (
                    <input
                        type="button"
                        value="Hide!"
                        onClick={() => setShow(!show) }

                    />
                ) : (
                    <input
                        type="button"
                        value="Update!"
                        onClick={() => setShow(!show)}
                    />
                )}
            </div>
        </>

    );
}