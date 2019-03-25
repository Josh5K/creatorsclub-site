import React, { Component } from 'react';
import './settings.scss';
import axios from 'axios'

class Settings extends Component {

    saveShipping() {
        let url = `${process.env.REACT_APP_API}/api/v1/shipping`
        console.log(this.Address);
        axios.put(url, {
            email: localStorage.getItem("auth"),
            name: this.Fullname.value,
            address: this.Address.value,
            city: this.City.value,
            zip_code: this.Zip.value,
            state: this.State.value,
            country: this.Country.value
        }).then(response => {
            alert("Saved!")
        });
    }

    saveUserSettings() {
        let url = `${process.env.REACT_APP_API}/api/v1/users`

        axios.put(url, {
            about: 'Test',
            email: localStorage.getItem("auth")
        }).then(response => {
            alert("Saved!");
        });
    }

  render() {
    return (
        <div className="settings-container">
            <div className="form-container">
                <h1>Account Settings</h1>
                <hr/>
                <form>
                    <input type="file" name="profile-picture" id="profile-picture" ref={(input) => {this.ProfilePicture = input }} />
                    <button type="button" className="btn btn-primary" onClick={this.saveUserSettings.bind(this)} >Update</button>
                </form>
            </div>
            <div className="form-container">
                <h1>Shipping information</h1>
                <hr/>
                <form>
                    <label htmlFor="fullName">Full Name</label>
                    <input name="fullName" id="fullname" ref={(input) => {this.Fullname = input }} type="text" defaultValue=""/>
                    <label htmlFor="address">Address</label>
                    <input name="address" id="address" ref={(input) => {this.Address = input }} type="text" defaultValue=""/>
                    <label htmlFor="city">City</label>
                    <input name="city" id="city" ref={(input) => {this.City = input }} type="text" defaultValue=""/>
                    <label htmlFor="zip">Postal / Zip Code</label>
                    <input name="zip" id="zip" ref={(input) => {this.Zip = input }} type="text" defaultValue=""/>
                    <label htmlFor="state">Province / State</label>
                    <input name="state" id="state" ref={(input) => {this.State = input }} type="text" defaultValue=""/>
                    <label htmlFor="country">Country</label>
                    <input name="country" id="country" type="text" ref={(input) => {this.Country = input }} defaultValue=""/>
                    <button type="button" className="btn btn-primary" onClick={this.saveShipping.bind(this)}>Save!</button>
                </form>
            </div>
        </div>
    );
  }
}

export default Settings;
