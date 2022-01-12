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
            "day": randint(0, 6)
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
            "month": randint(0, 11)
        })

    return data


SELLING_TIPS = [
    {
        "pl": "Bądź ekologiczny!",
        "en": "Be ECO!"
    },
    {
        "pl": "Bądź pomocny!",
        "en": "Be helpfull!"
    },
    {
        "pl": "Dawaj, sprzedawaj!",
        "en": "Let's sell!"
    },
    {
        "pl": "Analizuj rynek!",
        "en": "Analyze market!"
    },
    {
        "pl": "Znajdź nowe kanały sprzedaży!",
        "en": "Find new selling channels!"
    }
]

MASTER_USER_1 = "SklepIdylla"
MASTER_USER_2 = "Galakpizza"

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

NICKNAME1_CUSTOMERS_OPINIONS_1 = [
    {
        "text": "Średni produkt, nie polecam...",
        "mark": 3
    },
    {
        "text": "Tandeta",
        "mark": 1
    },
    {
        "text": "2/10",
        "mark": 2
    },
    {
        "text": "ŻAL!!!",
        "mark": 1
    },
    {
        "text": "ODDAJ PIENIĄDZE!",
        "mark": 2
    }
]
NICKNAME1_CUSTOMERS_OPINIONS_2 = [
    {
        "text": "Not great, not terible",
        "mark": 5
    },
    {
        "text": "Good product for this price",
        "mark": 6
    },
    {
        "text": "Może nie idealnie, ale jako tako",
        "mark": 6
    },
    {
        "text": "Przynajmniej tanio.",
        "mark": 7
    },
    {
        "text": "Może być.",
        "mark": 5
    }
]
NICKNAME1_CUSTOMERS_OPINIONS_3 = [
    {
        "text": "Cudowne urządzenie!",
        "mark": 10
    },
    {
        "text": "Sehr gut :)",
        "mark": 9
    },
    {
        "text": "I love it <3",
        "mark": 10
    },
    {
        "text": "Dobry towar",
        "mark": 8
    },
    {
        "text": "Podoba mi się, polecę znajomym!",
        "mark": 8
    }
]

NICKNAME2_CUSTOMERS_OPINIONS_1 = [
    {
        "text": "No złom totalny",
        "mark": 1
    },
    {
        "text": "Chińskie badziewie",
        "mark": 2
    },
    {
        "text": "Waste of money",
        "mark": 2
    },
    {
        "text": "-",
        "mark": 3
    },
    {
        "text": "Tandeta",
        "mark": 2
    }
]
NICKNAME2_CUSTOMERS_OPINIONS_2 = [
    {
        "text": "Akceptowalnie",
        "mark": 5
    },
    {
        "text": "W miarę",
        "mark": 6
    },
    {
        "text": "Nie jest źle",
        "mark": 6
    },
    {
        "text": "-",
        "mark": 5
    },
    {
        "text": "Nie jest dobrze, nie jest też źle. Można powiedzieć, że jest średnio.",
        "mark": 6
    }
]
NICKNAME2_CUSTOMERS_OPINIONS_3 = [
    {
        "text": "Tego potrzebowałem.",
        "mark": 9
    },
    {
        "text": "Cudne niczym ciepłe, wygazowane piwo.",
        "mark": 10
    },
    {
        "text": "Gorąco polecam",
        "mark": 9
    },
    {
        "text": "Dobre urządzenie!",
        "mark": 8
    },
    {
        "text": "Super!!!",
        "mark": 10
    }
]

NICKNAME3_CUSTOMERS_OPINIONS_1 = []
NICKNAME3_CUSTOMERS_OPINIONS_2 = []
NICKNAME3_CUSTOMERS_OPINIONS_3 = []


@app.route("/masterUsers/<string:master_user>/users")
def get_children_nicknames(master_user):
    if master_user == MASTER_USER_1:
        return {
            "nicknames": [
                NICK1,
                NICK3
            ]
        }
    if master_user == MASTER_USER_2:
        return {
            "nicknames": [
                NICK2
            ]
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


@app.route("/users/<string:nickname>/customersOpinions")
def get_customers_opinions(nickname):
    rank = request.args.get("rank")
    print(rank)

    if nickname == NICK1:
        if rank == "1":
            return {
                "opinions": NICKNAME1_CUSTOMERS_OPINIONS_1
            }
        if rank == "2":
            return {
                "opinions": NICKNAME1_CUSTOMERS_OPINIONS_2
            }
        if rank == "3":
            return {
                "opinions": NICKNAME1_CUSTOMERS_OPINIONS_3
            }

        abort(404)

    if nickname == NICK2:
        if rank == "1":
            return {
                "opinions": NICKNAME2_CUSTOMERS_OPINIONS_1
            }
        if rank == "2":
            return {
                "opinions": NICKNAME2_CUSTOMERS_OPINIONS_2
            }
        if rank == "3":
            return {
                "opinions": NICKNAME2_CUSTOMERS_OPINIONS_3
            }

        abort(404)

    if nickname == NICK3:
        if rank == "1":
            return {
                "opinions": NICKNAME3_CUSTOMERS_OPINIONS_1
            }
        if rank == "2":
            return {
                "opinions": NICKNAME3_CUSTOMERS_OPINIONS_2
            }
        if rank == "3":
            return {
                "opinions": NICKNAME3_CUSTOMERS_OPINIONS_3
            }

        abort(404)


@app.route("/sellingTips")
def get_selling_tips():
    return {
        "sellingTips": SELLING_TIPS
    }


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
