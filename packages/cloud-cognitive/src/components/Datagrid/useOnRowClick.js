/*
 * Licensed Materials - Property of IBM
 * 5724-Q36
 * (c) Copyright IBM Corp. 2020
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
 */

const useOnRowClick = (hooks) => {
  const useInstance = (rowInstance) => {
    const { onRowClick } = rowInstance;
    const getRowProps = (props, datagridState) => {
      const { isFetching, row, instance } = datagridState;
      const { id, toggleRowSelected } = row;
      const onClick = () => {
        if (!isFetching && onRowClick) {
          onRowClick(row);
          instance.selectedFlatRows &&
            instance.selectedFlatRows.map((toggleRow) =>
              toggleRow.toggleRowSelected(false)
            );
          toggleRowSelected(id, true);
        }
      };

      return [
        props,
        { onClick },
        {
          style: {
            cursor: 'pointer',
          },
        },
      ];
    };

    hooks.getRowProps.push(getRowProps);
  };
  hooks.useInstance.push(useInstance);
};

export default useOnRowClick;
