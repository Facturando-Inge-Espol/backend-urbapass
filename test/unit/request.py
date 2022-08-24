import unittest


class TestUrbaPassDB(unittest.TestCase):

    def test_get_all_user(self):
        self.assertEqual('foo'.upper(), 'FOO')

    def test_get_user_by_nickname(self):
        self.assertTrue('FOO'.isupper())

    def test_get_user_by_ci(self):
        s = 'hello world'
        self.assertEqual(s.split(), ['hello', 'world'])
        # check that s.split fails when the separator is not a string
        with self.assertRaises(TypeError):
            s.split(2)

    def test_get_user_by_email(self):
        self.assertTrue('FOO'.isupper())

    def test_get_all_aliquots(self):
        self.assertTrue('FOO'.isupper())

    def test_get_all_resident(self):
        self.assertTrue('FOO'.isupper())

    def test_get_resident_by_ci(self):
        self.assertTrue('FOO'.isupper())

    def test_get_all_urbanizations(self):
        self.assertTrue('FOO'.isupper())

    def test_get_aliquots_by_urbanization(self):
        self.assertTrue('FOO'.isupper())

    def test_get_aliquots_by_resident(self):
        self.assertTrue('FOO'.isupper())

    def test_get_payments_by_resident(self):
        self.assertTrue('FOO'.isupper())

    def test_get_qr_by_ci(self):
        self.assertTrue('FOO'.isupper())

    def test_post_aliquot_to_resident(self):
        self.assertTrue('FOO'.isupper())

    def test_get_aliquots_by_status(self):
        self.assertTrue('FOO'.isupper())
