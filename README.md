# React exercise

It is planned that you will develop this exercise within this same platform with your own GitHub user, and when you consider it you can share the result with us. Also, this same link will be used in subsequent instances of the evaluation.

The reference file is ment to understand the behavior, not to fully apply those styles, but you should set the avatar for the user in the blue circle.

Among the aspects to be evaluated are: the tidiness, the know-how and use of practices and technologies, the separation of concerns, etc.

You can use any tool you have at your disposal, good luck,

## Custom Input with stateful data list

The goal is to create a control that takes care of connecting to an API and allows to select users, adding them to a list.

The component must display a list of users from this API: https://randomuser.me/, store and filter them in frontend according to the user input.

The data gathering should start on the first focus of the field. The popover list will wait until the user starts typing considering the threshold, before this, it must show on the first loading message if the data isn't available yet.

The field entry will be validated in each change on the field considering a threshold of 2 seconds. A popover list will appear when the user starts typing (2sec delayed) and close on blur or the other behaviors to consider.

Pressing [ENTER] or clicking on an item in the popover list will confirm the item selection, and [ESC] will cancel the selection (any of these interactions will close the popover). Then, the items will be added to a list of results.

When the popover list opens, the first item on the list must be preselected, so that by pressing [ENTER] the first available item is selected.

Selected items, must remain on the popover list, but must be tagged and disabled as selected to prevents their re-selection.

If the input in the field filter doesn't have any matching values, an error message should appear indicating that the string is not on the data.

In the results list, the user must have the capacity to remove items from this list. If multiple items are being rendered, ordering controls appear. [Order by name]: Takes the result list and orders it alphabetically by name.
