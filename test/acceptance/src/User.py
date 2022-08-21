class User(object):
    """"Class User"""

    def __init__(self, row_info) -> None:
        self.user = row_info["user"]
        self.cedula = row_info["cedula"]
        self.email = row_info["correo"]

    def __str__(self) -> str:
        return self.user
