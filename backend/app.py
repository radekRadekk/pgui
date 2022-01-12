from flask import Flask, request, abort
from flask_cors import CORS
from random import randint, random

app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})


def generate_today_sellings(x):
    data = {
        "sellings": []
    }

    for _ in range(x):
        data["sellings"].append({
            "price": round(random() * randint(10, 100), 2),
            "piecesNum": randint(1, 30),
            "time": {
                "hour": randint(0, 23),
                "minute": randint(0, 59)
            }
        })

    return data


def generate_current_week_sellings(x):
    data = {
        "sellings": []
    }

    for _ in range(x):
        data["sellings"].append({
            "price": round(random() * randint(10, 100), 2),
            "piecesNum": randint(1, 30),
            "day": randint(1, 7)
        })

    return data


def generate_previous_week_sellings(x):
    data = {
        "sellings": []
    }

    for _ in range(x):
        data["sellings"].append({
            "price": round(random() * randint(10, 100), 2),
            "piecesNum": randint(1, 30),
            "month": randint(1, 12)
        })

    return data


NICK1 = "JanKowalski"
NICK2 = "RomanNowak"
NICK3 = "SebastianOlech"

NICKNAME1_TODAY_SELLINGS = generate_today_sellings(100)
NICKNAME2_TODAY_SELLINGS = generate_today_sellings(20)
NICKNAME3_TODAY_SELLINGS = generate_today_sellings(0)

NICKNAME1_CURRENT_WEEK_SELLINGS = generate_current_week_sellings(700)
NICKNAME2_CURRENT_WEEK_SELLINGS = generate_current_week_sellings(140)
NICKNAME3_CURRENT_WEEK_SELLINGS = generate_current_week_sellings(0)

NICKNAME1_PREVIOUS_WEEK_SELLINGS = generate_previous_week_sellings(7000)
NICKNAME2_PREVIOUS_WEEK_SELLINGS = generate_previous_week_sellings(1400)
NICKNAME3_PREVIOUS_WEEK_SELLINGS = generate_previous_week_sellings(0)

NICKNAME1_ORDERS_NUMS = {
    "unpaid": 100,
    "unsent": 27,
    "returns": 13
}
NICKNAME2_ORDERS_NUMS = {
    "unpaid": 12,
    "unsent": 3,
    "returns": 1
}
NICKNAME3_ORDERS_NUMS = {
    "unpaid": 0,
    "unsent": 0,
    "returns": 0
}


@app.route("/users/<string:nickname>/orders")
def get_orders_nums(nickname):
    if nickname == NICK1:
        return NICKNAME1_ORDERS_NUMS
    if nickname == NICK2:
        return NICKNAME2_ORDERS_NUMS
    if nickname == NICK3:
        return NICKNAME3_ORDERS_NUMS


@app.route("/users/<string:nickname>/sellings")
def get_sellings(nickname):
    period = request.args.get("period")

    if period == "today":
        return get_sellings_today(nickname)

    if period == "current_week":
        return get_sellings_current_week(nickname)

    if period == "previous_week":
        return get_sellings_previous_week(nickname)

    abort(404)


def get_sellings_today(nickname):
    if nickname == NICK1:
        return NICKNAME1_TODAY_SELLINGS

    if nickname == NICK2:
        return NICKNAME2_TODAY_SELLINGS

    if nickname == NICK3:
        return NICKNAME3_TODAY_SELLINGS


def get_sellings_current_week(nickname):
    if nickname == NICK1:
        return NICKNAME1_CURRENT_WEEK_SELLINGS

    if nickname == NICK2:
        return NICKNAME2_CURRENT_WEEK_SELLINGS

    if nickname == NICK3:
        return NICKNAME3_CURRENT_WEEK_SELLINGS


def get_sellings_previous_week(nickname):
    if nickname == NICK1:
        return NICKNAME1_PREVIOUS_WEEK_SELLINGS

    if nickname == NICK2:
        return NICKNAME2_PREVIOUS_WEEK_SELLINGS

    if nickname == NICK3:
        return NICKNAME3_PREVIOUS_WEEK_SELLINGS


if __name__ == '__main__':
    app.run(host="0.0.0.0")
