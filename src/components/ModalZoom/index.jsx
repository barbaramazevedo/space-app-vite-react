import Image from "../Gallery/Image";
import { styled } from "styled-components";
import IconButton from "../IconButton";

const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`

const StyledDialog = styled.dialog`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: transparent;
    padding: 0;
    border: 0;
    width: 90%;
    max-width: 900px;
    display: flex;
    justify-content: center;

    form {
        button {
            position: relative;
            top: 20px;
            right: 60px;
        }
    }
`

const ModalZoom = ({ photo, whenClose, toToggleFavorite }) => {

    return ( 
        <>
            {photo && <> 
                <Overlay />
                <StyledDialog open={!!photo} onClose={whenClose}>
                    <Image
                        photo={photo} 
                        expand={true}
                        toToggleFavorite={toToggleFavorite}
                    />
                    <form method="dialog">
                        <IconButton formMethod="dialog">
                            <img src="/icones/fechar.png" alt="Close button" />
                        </IconButton>
                    </form>
                </StyledDialog>
            </>}
        </>
    );
};

export default ModalZoom;