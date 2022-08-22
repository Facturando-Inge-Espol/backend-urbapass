#language: en
    Feature: Search payment
    
        @searchPaymentByResident
        Scenario: Search payment by resident
            Given a set of payments
            | UID | RESIDENT | STATUS | URBANIZATION |
            | 09c4942a-5fb0-4808-95e8-821c29a08731 | 1204335027 | SIN PAGAR | Urba1 |
            | 59989b9f-7b32-4637-b7ae-d1b52d2b2a0d | 1204311386 | SIN PAGAR | Urba1 |
            | 6e3cdcd9-d3a0-402c-80e5-562096edc7f1 | 1204335027 | SIN PAGAR | Urba1 |
            | 1390db9b-0e23-4831-a2f5-62d2cc02cdcc | 1204389793 | PAGADO | Urba2 |
            | a2dafc7d-504f-4cb7-9b33-7f8d1de3d3ed | 1204389793 | PAGADO | Urba2 |
            Given the client enters the parameter: 1204335027
            When the client searchs payment by resident
            Then all payments data of this resident will be displayed
            | UID | RESIDENT | STATUS | URBANIZATION |
            | 09c4942a-5fb0-4808-95e8-821c29a08731 | 1204335027 | SIN PAGAR | Urba1 |
            | 6e3cdcd9-d3a0-402c-80e5-562096edc7f1 | 1204335027 | SIN PAGAR | Urba1 |

        @searchPaymentByResidentNotFound
        Scenario: Search payment by resident that not exists
            Given a set of payments
            | UID | RESIDENT | STATUS | URBANIZATION |
            | 09c4942a-5fb0-4808-95e8-821c29a08731 | 1204335027 | SIN PAGAR | Urba1 |
            | 59989b9f-7b32-4637-b7ae-d1b52d2b2a0d | 1204311386 | SIN PAGAR | Urba1 |
            | 6e3cdcd9-d3a0-402c-80e5-562096edc7f1 | 1204335027 | SIN PAGAR | Urba1 |
            | 1390db9b-0e23-4831-a2f5-62d2cc02cdcc | 1204389793 | PAGADO | Urba2 |
            | a2dafc7d-504f-4cb7-9b33-7f8d1de3d3ed | 1204389793 | PAGADO | Urba2 |
            Given the client enters the parameter: 1919191919
            When the client searchs payment by resident
            Then the following message is displayed: No payment of resident 1919191919 was found

        @searchPaymentByStatus
        Scenario: Search payment by resident
            Given a set of payments
            | UID | RESIDENT | STATUS | URBANIZATION |
            | 09c4942a-5fb0-4808-95e8-821c29a08731 | 1204335027 | SIN PAGAR | Urba1 |
            | 59989b9f-7b32-4637-b7ae-d1b52d2b2a0d | 1204311386 | SIN PAGAR | Urba1 |
            | 6e3cdcd9-d3a0-402c-80e5-562096edc7f1 | 1204335027 | SIN PAGAR | Urba1 |
            | 1390db9b-0e23-4831-a2f5-62d2cc02cdcc | 1204389793 | PAGADO | Urba2 |
            | a2dafc7d-504f-4cb7-9b33-7f8d1de3d3ed | 1204389793 | PAGADO | Urba2 |
            Given the client enters the parameter: PAGADO
            When the client searchs payment by status
            Then all payments data with this status will be displayed
            | UID | RESIDENT | STATUS | URBANIZATION |
            | 1390db9b-0e23-4831-a2f5-62d2cc02cdcc | 1204389793 | PAGADO | Urba2 |
            | a2dafc7d-504f-4cb7-9b33-7f8d1de3d3ed | 1204389793 | PAGADO | Urba2 |

        @searchPaymentByStatusNotFound
        Scenario: Search payment by resident
            Given a set of payments
            | UID | RESIDENT | STATUS | URBANIZATION |
            | 09c4942a-5fb0-4808-95e8-821c29a08731 | 1204335027 | SIN PAGAR | Urba1 |
            | 59989b9f-7b32-4637-b7ae-d1b52d2b2a0d | 1204311386 | SIN PAGAR | Urba1 |
            | 6e3cdcd9-d3a0-402c-80e5-562096edc7f1 | 1204335027 | SIN PAGAR | Urba1 |
            | 1390db9b-0e23-4831-a2f5-62d2cc02cdcc | 1204389793 | PAGADO | Urba2 |
            | a2dafc7d-504f-4cb7-9b33-7f8d1de3d3ed | 1204389793 | PAGADO | Urba2 |
            Given the client enters the parameter: COMPROBANDO
            When the client searchs payment by status
            Then the following message is displayed: No payment with status COMPROBANDO was found

