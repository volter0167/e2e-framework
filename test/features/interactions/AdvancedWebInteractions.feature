Feature: AdvancedWebInteractions

    @demo @smoke
    Scenario Outline: Advanced WebInetraction Demo feature
        Given Login to the Inventory
        Then Validate the page containing <NumberOfItems>
        Then Verify all prices are positive value

        Examples:
            | TestID    | NumberOfItems |
            | Web_TC003 | 6             |
