""" This is the package __doc__. It should start one space after the initial
    triple quote and not be more than 80 characters long.
    
    Paragraphs should be separated by a single line and continue on a four
    space indent.
"""

# import statements should be grouped semantically in the following order

# standard library

import datetime

# framework / library imports

from deform import Form
from pyramid.config import Configurator

# project imports

from project.models import Model

GLOBAL_CONSTANT = 'all in uppercase with underscores'

def func(required_arg, optional_arg=None):
    """ optional function docstring...
    """

    scoped_var = 'all in lowercase with underscores'

    short_dict = {'key1': 'val1', 'key2': 'val2'}

    long_dict = {'key1': 'val2',
                 'key2': 'val2',
                 'key3': 'val3',
                 'key4': 'val4',
                 'key5': 'val5',
                 'key6': 'val6',
                 'key7': 'val7',
                 'key8': 'val8',
                 'key9': 'val9',
                 }

    short_list = ['val1', 'val2']

    long_list = ['val1',
                 'val2',
                 'val3',
                 'val4',
                 'val5',
                 'val6',
                 'val7',
                 'val8',
                 'val9',
                 ]

    return dict(scoped_var = scoped_var,
                short_dict = short_dict,
                long_dict = long_dict,
                short_list = short_list,
                long_list = long_list,
                )

class Klass(object):
    """ A very long doc string so that we can demonstrate it falling on to the
        next line after 80 chars.

        The next paragraph is a line lower with the same indentation.
    """

    def method(self):
        """ Single line docstrings should follow the same quote format.
        """

