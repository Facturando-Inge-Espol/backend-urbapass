class Payment(object):
    """"Class Payment"""

    def __init__(self, row_info) -> None:
        self.uid = row_info["uid"]
        self.resident = row_info["residente"]
        self.status = row_info["estado"]
        self.urbanization = row_info["info_urbanizacion"]["nombre"]

    def __str__(self) -> str:
        return self.resident
