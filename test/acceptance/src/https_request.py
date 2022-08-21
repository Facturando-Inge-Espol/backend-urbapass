import requests as rq


def get_all_user():
    request = rq.get("http://localhost:3001/usuario")
    return request.json()


def get_user_by_nick(nickname):
    request = rq.get("http://localhost:3001/usuario/user/%s" % nickname)
    try:
        result = request.json()
    except:
        result = []
    if len(result) == 1:
        message = "A user with nick %s was found" % nickname
    else:
        message = "No user with nick %s was found" % nickname
    return result, message


def get_user_by_email(email):
    request = rq.get("http://localhost:3001/usuario/correo/%s" % email)
    try:
        result = request.json()
    except:
        result = []
    if len(result) == 1:
        message = "A user with email %s was found" % email
    else:
        message = "No user with email %s was found" % email
    return result, message


def get_user_by_ci(ci):
    request = rq.get("http://localhost:3001/usuario/%s" % ci)
    try:
        result = request.json()
    except:
        result = []
    if len(result) == 1:
        message = "A user with ci %s was found" % ci
    else:
        message = "No user with ci %s was found" % ci
    return result, message


def get_all_payment():
    request = rq.get("http://localhost:3001/alicuota")
    return request.json()

def get_payment_by_status(status):
    request = rq.get("http://localhost:3001/alicuota/estado/%s" % status)
    try:
        result = request.json()
    except:
        result = []
    if len(result) == 1:
        message = "A payment with status %s was found" % status
    elif len(result) > 1:
        message = "A %d payments with status %s were found" % (len(result), status)
    else:
        message = "No payment with status %s was found" % status
    return result, message

def get_payment_by_resident(resident):
    request = rq.get("http://localhost:3001/alicuota/%s" % resident)
    try:
        result = request.json()
    except:
        result = []
    if len(result) == 1:
        message = "A payment of resident %s was found" % resident
    elif len(result) > 1:
        message = "A %d payments of resident %s were found" % (len(result), resident)
    else:
        message = "No payment of resident %s was found" % resident
    return result, message