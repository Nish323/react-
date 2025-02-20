export const ColorfullMessage = ({ color, children: message }) => {
    console.log("Message");
    //{ color, children: message} = props;
    const contentStyle = {
        color,
        fontSize: "18px",
    };

    return (
        <p style={contentStyle}>{message}</p>
    )
}