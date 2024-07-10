/* eslint-disable react/prop-types */
export const Message = ({ msg, bgColor }) => {
    let styles = {
        padding: "1rem",
        marginBottom: "1rem",
        textAlign: "center",
        color: "white",
        fontWeight: "bold",
        backgroundColor: bgColor
    }
    return (
        <div style={styles}>
            <p dangerouslySetInnerHTML={{ __html: msg }}></p>
        </div>
    )
}
