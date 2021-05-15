from os import name
import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
import datetime as dt
from datetime import date, timedelta

from flask import Flask, jsonify

from flask import Flask
from flask_sqlalchemy import SQLAlchemy

engine = create_engine('sqlite:///wine_db.sqlite')

Base = automap_base()

Base.prepare(engine, reflect=True)

Wines_Clean = Base.classes.wines_clean

#################################################
# Flask Setup
#################################################
app = Flask(__name__)

#################################################
# Database Setup
#################################################



# Remove tracking modifications
# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# wine_db = SQLAlchemy(app)

# class Wines(wine_db.Model):
#     __tablename__ = 'wines__clean'
#     # id = wine_db.Column(wine_db.Integer, primary_key=True)
#     Vintage = wine_db.Column(wine_db.String)
#     Country = wine_db.Column(wine_db.String)
#     County = wine_db.Column(wine_db.String)
#     Designation = wine_db.Column(wine_db.String)
#     Points = wine_db.Column(wine_db.Integer)
#     Price = wine_db.Column(' Price ', wine_db.String)
#     Province = wine_db.Column(wine_db.String)
#     Title = wine_db.Column(wine_db.String, primary_key=True)
#     Variety = wine_db.Column(wine_db.String)
#     Winery = wine_db.Column(wine_db.String)
#     Year = wine_db.Column(wine_db.Integer)


#create route that renders index.html template
@app.route("/")
def home():
    return ("index.html")

# @app.route("/api/wine_data")
# def wine_data():
#     results = wine_db.session.query(
#         Wines.Vintage,
#         Wines.Country,
#         Wines.County,
#         Wines.Designation,
#         Wines.Points,
#         Wines.Price,
#         Wines.Province,
#         Wines.Title,
#         Wines.Variety,
#         Wines.Winery,
#         Wines.Year
#     ).limit(10).all()
#     return jsonify(results)

@app.route("/api/wine_data")
def wine_data():
    session = Session(engine)

    wine_results = session.query(Wines_Clean.Country, Wines_Clean.Price, Wines_Clean.Points, Wines_Clean.Title, Wines_Clean.Variety, Wines_Clean.Year).\
        order_by(Wines_Clean.Price).all()
    session.close()

    wine = []

    for Country, Price, Points, Title, Variety, Year in wine_results:
        wine_dict = {}
        wine_dict['Country'] = Country
        wine_dict['Price'] =  Price
        wine_dict['Points']= Points
        wine_dict['Title']= Title
        wine_dict['Variety']= Variety
        wine_dict['Year']= Year
    return jsonify(wine)


# @app.route("/api/kayla")
# def plots():
#     return render_template("./index_km.html")

# @app.route("/api/redvarietals")
# def redvarietals():
#     return render_template("redvarietals.html")

if __name__ == "__main__":
    app.run(debug=True)
