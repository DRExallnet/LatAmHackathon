from brownie import network, accounts, config, interface


def get_breed(breed_number):
    switch = {0: "DREX1"}
    return switch[breed_number]
