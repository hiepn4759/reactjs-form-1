import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
     this.state = {
      txtName: '',
      txtPassword: '',
      txtDesc: 'abc',
      sltGender: 0,
      rdLang: 'vi',
      chkbStatus: false
     };
     this.onHandlChange = this.onHandlChange.bind(this);
     this.onHandlSubmit = this.onHandlSubmit.bind(this);
  }
  onHandlChange(event){
   var target = event.target;
   var name = target.name;
   var value = target.type === 'checkbox' ? target.checked : target.value;
   this.setState({
    [name]: value
   });
  }
  onHandlSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }
  render() {
    return(
      <div className="container mt-30">
        <div className="row">
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <div className="panel panel-primary">
                <div className="panel-heading">
                  <h3 className="panel-title">Form</h3>
                </div>
                <div className="panel-body">
                  <form onSubmit={this.onHandlSubmit}>
                    <div className="form-group">
                      <label >Username</label>
                      <input
                        type="text"
                        className="form-control"
                        name="txtName"
                        onChange={ this.onHandlChange}
                        value={this.state.txtName}
                      />
                    </div>

                    <div className="form-group">
                      <label >Password</label>
                      <input
                        type="password"
                        className="form-control"
                        name="txtPassword"
                        onChange={ this.onHandlChange}
                        value={this.state.txtPassword}
                      />
                    </div>

                    <div className="form-group">
                      <label >Mo ta</label>
                      <textarea 
                        className="form-control" 
                        rows="3" name="txtDesc"
                        onChange={ this.onHandlChange}
                        value={this.state.txtDesc}
                      ></textarea>
                    </div>

                    <label >gioi Tinh</label>
                    <select 
                      className="form-control" 
                      name="sltGender" 
                      value={this.state.sltGender}
                      onChange={this.onHandlChange}
                    >
                      <option value={0} >nu</option>
                      <option value={1} >nam</option>
                    </select>
                    <br></br>

                    <label >ngon ngu</label>
                    <div className="radio">
                      <label>
                        <input 
                          type="radio" 
                          name="rdLang" 
                          value="en"
                          onChange={this.onHandlChange}
                          checked={this.state.rdLang === "en"}
                        />
                        Tieng Anh
                      </label>
                      <br></br>
                      <label>
                        <input 
                          type="radio" 
                          name="rdLang" 
                          value="vi"
                          onChange={this.onHandlChange}
                          checked={this.state.rdLang === "vi"}
                        />
                        Tieng Viet
                      </label>
                    </div>

                    <div className="checkbox">
                      <label>
                        <input 
                          type="checkbox"
                          name="chkbStatus"
                          value={true}
                          onChange={this.onHandlChange}
                          checked={this.state.chkbStatus === true}
                        />
                        Trang Thai
                      </label>
                    </div>
                    

                    <button type="submit" className="btn btn-primary">Luu lai</button>&nbsp;
                    <button type="reset" className="btn btn-default">Xoa</button>
                  </form>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
