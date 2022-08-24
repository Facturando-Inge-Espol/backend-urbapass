from behave import *
import src.https_request as http
from src.Aliquot import Aliquot

@given("a set of aliquots")
def step_impl(context):
    tmp = http.get_all_aliquot()
    aliquot_list = []

    for row in tmp:
        aliquot_list.append(Aliquot(row))

    context.aliquots = aliquot_list

@when("the client searchs aliquot by {criteria}")
def step_impl(context, criteria):
    if (criteria == "resident"):
        result, message = http.get_aliquot_by_resident(context.parameter)
    if (criteria == "status"):
        result, message = http.get_aliquot_by_status(context.parameter)
    context.result = result
    context.message = message

@then("all aliquots data of this resident will be displayed")
def step_impl(context):
    expected_aliquot = True
    result_aliquot = []
    for row in context.aliquots:
        result_aliquot.append(row.resident)
    for aliquot in context.result:
        if aliquot["residente"] not in result_aliquot:
            print("No aliquot of this resident")
            expected_aliquot = False
    assert expected_aliquot is True

@then("all aliquots data with this status will be displayed")
def step_impl(context):
    expected_aliquot = True
    result_aliquot = []
    for row in context.aliquots:
        result_aliquot.append(row.resident)
    for aliquot in context.result:
        if aliquot["residente"] not in result_aliquot:
            print("No aliquot with status this status")
            expected_aliquot = False
    assert expected_aliquot is True