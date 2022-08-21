from behave import *
import src.https_request as http
from src.Payment import Payment

@given("a set of payments")
def step_impl(context):
    tmp = http.get_all_payment()
    payment_list = []

    for row in tmp:
        payment_list.append(Payment(row))

    context.payments = payment_list

@when("the client searchs payment by {criteria}")
def step_impl(context, criteria):
    if (criteria == "resident"):
        result, message = http.get_payment_by_resident(context.parameter)
    if (criteria == "status"):
        result, message = http.get_payment_by_status(context.parameter)
    context.result = result
    context.message = message

@then("all payments data of this resident will be displayed")
def step_impl(context):
    expected_payment = True
    result_payment = []
    for row in context.payments:
        result_payment.append(row.resident)
    for payment in context.result:
        if payment["residente"] not in result_payment:
            print("No payment of this resident")
            expected_payment = False
    assert expected_payment is True

@then("all payments data with this status will be displayed")
def step_impl(context):
    expected_payment = True
    result_payment = []
    for row in context.payments:
        result_payment.append(row.resident)
    for payment in context.result:
        if payment["residente"] not in result_payment:
            print("No payment with status this status")
            expected_payment = False
    assert expected_payment is True