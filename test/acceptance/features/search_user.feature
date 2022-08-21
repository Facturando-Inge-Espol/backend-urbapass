#language: en

Feature: Search user by criteria

    @userByNickname
    Scenario: Search user by nickname
        Given  a set of users
        | USER | CEDULA | EMAIL |
        | Byrd | 1204311386 | Byrd@gmail.com |
        | Santana | 1204313174 | Santana@gmail.com |
        | Sanford | 1204319417 | Sanford@gmail.com |
        | Dennis | 1204322885 | Dennis@gmail.com |
        | Holder | 1204327243 | Holder@gmail.com |
        Given the client enters the parameter: Dennis
        When the client searchs user by nick
        Then the user data will be displayed
        | NAME |
        | Dennis |

    @userByNicknameNotFound
    Scenario: Search user by nickname that not exists
        Given  a set of users
        | USER | CEDULA | EMAIL |
        | Byrd | 1204311386 | Byrd@gmail.com |
        | Santana | 1204313174 | Santana@gmail.com |
        | Sanford | 1204319417 | Sanford@gmail.com |
        | Dennis | 1204322885 | Dennis@gmail.com |
        | Holder | 1204327243 | Holder@gmail.com |
        Given the client enters the parameter: Makoto
        When the client searchs user by nick
        Then the following message is displayed: No user with nick Makoto was found

    @userByEmail
    Scenario: Search user by email
        Given  a set of users
        | USER | CEDULA | EMAIL |
        | Byrd | 1204311386 | Byrd@gmail.com |
        | Santana | 1204313174 | Santana@gmail.com |
        | Sanford | 1204319417 | Sanford@gmail.com |
        | Dennis | 1204322885 | Dennis@gmail.com |
        | Holder | 1204327243 | Holder@gmail.com |
        Given the client enters the parameter: Santana@gmail.com
        When the client searchs user by email
        Then the user data will be displayed
        | NAME |
        | Santana |

    @userByEmail
    Scenario: Search user by email that not exists
        Given  a set of users
        | USER | CEDULA | EMAIL |
        | Byrd | 1204311386 | Byrd@gmail.com |
        | Santana | 1204313174 | Santana@gmail.com |
        | Sanford | 1204319417 | Sanford@gmail.com |
        | Dennis | 1204322885 | Dennis@gmail.com |
        | Holder | 1204327243 | Holder@gmail.com |
        Given the client enters the parameter: antana@gmail.com
        When the client searchs user by email
        Then the following message is displayed: No user with email antana@gmail.com was found

    @userByCi
    Scenario: Search user by ci
        Given  a set of users
        | USER | CEDULA | EMAIL |
        | Byrd | 1204311386 | Byrd@gmail.com |
        | Santana | 1204313174 | Santana@gmail.com |
        | Sanford | 1204319417 | Sanford@gmail.com |
        | Dennis | 1204322885 | Dennis@gmail.com |
        | Holder | 1204327243 | Holder@gmail.com |
        Given the client enters the parameter: 1204311386
        When the client searchs user by ci
        Then the user data will be displayed
        | NAME |
        | Byrd |

    @userByCi
    Scenario: Search user by ci that not exists
        Given  a set of users
        | USER | CEDULA | EMAIL |
        | Byrd | 1204311386 | Byrd@gmail.com |
        | Santana | 1204313174 | Santana@gmail.com |
        | Sanford | 1204319417 | Sanford@gmail.com |
        | Dennis | 1204322885 | Dennis@gmail.com |
        | Holder | 1204327243 | Holder@gmail.com |
        Given the client enters the parameter: 1204311386
        When the client searchs user by ci
        Then the following message is displayed: No user with ci 1204311386 was found