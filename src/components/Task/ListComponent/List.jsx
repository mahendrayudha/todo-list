import React from "react";
import Done from "./DoneComponent/Done";
import OnProgress from "./OnProgressComponent/OnProgress";

const List = () => {
    return (
        <div className="row">
            <OnProgress />
            <Done />
        </div>
    );
}

export default List;