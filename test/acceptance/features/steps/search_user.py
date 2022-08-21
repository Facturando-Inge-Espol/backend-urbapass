from behave import *
import src.https_request as http
from src.User import User

def before_scenario(context, scenario):
    context = {}

@given("a set of users")
def step_impl(context):
    tmp = http.get_all_user()
    user_list = []

    for row in tmp:
        user_list.append(User(row))

    context.users = user_list

@given("the client enters the parameter: {parameter}")
def step_impl(context, parameter):
    context.parameter = parameter

@when("the client searchs user by {criteria}")
def step_impl(context, criteria):
    if (criteria == "ci"):
        result, message = http.get_user_by_ci(context.parameter)
    if (criteria == "email"):
        result, message = http.get_user_by_email(context.parameter)
    if(criteria == "nick"):
        result, message = http.get_user_by_nick(context.parameter)
    context.result = result
    context.message = message

@then("the user data with this nickname will be displayed")
def step_impl(context):
    expected_user = True
    result_user = []
    for row in context.users:
        result_user.append(row.user)
    for user in context.result:
        if user.user not in result_user:
            print("No user %s" % user)
            expected_user = False
    assert expected_user is True

@then("the user data will be displayed")
def step_impl(context):
    expected_user = True
    result_user = []
    for row in context.users:
        result_user.append(row.user)
    user = context.result
    if len(user) > 0 and user["user"] not in result_user:
       print("No user %s" % user["user"])
       expected_user = False
    assert expected_user is True

@then("the following message is displayed: {message}")
def step_impl(context, message):
    print(message)
    print(context.message)
    assert context.message == message

