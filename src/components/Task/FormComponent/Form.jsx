import React from "react";

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            file: null
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        this.setState({
            file: URL.createObjectURL(event.target.files[0])
        })
    }
    render() {
        return (
            <div className="row mb-4">
                <div class="col-md-12">
                    <form>
                        <div class="row justify-content-center">
                            <div class="col-xxl-3 col-xl-4 mb-3">
                                <label htmlFor="task" className="form-label">
                                    Task
                                </label>
                                <div class="text-center">
                                    <div className="input-group">
                                        <input
                                            type="text"
                                            id="task"
                                            name="task"
                                            className="form-control"
                                            required
                                            placeholder="Input your task here"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="col-xxl-3 col-xl-4 mb-3">
                                <label htmlFor="date" className="form-label">
                                    Date
                                </label>
                                <div class="text-center">
                                    <div className="input-group">
                                        <input
                                            type="date"
                                            id="date"
                                            name="date"
                                            className="form-control"
                                            required
                                            placeholder="Input your date here"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="col-xxl-6 col-xl-8">
                                <div class="text-center">
                                    <img src={ this.state.file } style={{ maxWidth: "30%" }} />
                                    <div class="small font-italic text-muted mb-4">Format JPG or PNG, max 2 MB</div>
                                    <label class="btn btn-secondary" type="button" htmlFor="photo">Choose Photo</label>
                                    <input id="photo" name="photo" type="file" accept="image/x-png,image/jpeg" onChange={ this.handleChange } style={{ display: "none" }} />
                                </div>
                                <hr class="my-4" />
                                <button class="btn btn-primary mr-3" type="submit">Save</button>
                                <a class="btn btn-danger text-white">Cancel</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
};

export default Form;