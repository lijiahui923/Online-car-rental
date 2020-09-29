export function columns() {
    return [{
            checkbox: true
        },
        {
            type: 'expand'
        },
        {
            prop: 'parkingName',
            label: '停车场名称'
        },
        {
            prop: 'area',
            label: '城市'
        },
        {
            prop: 'address',
            label: '详细地址'
        },
        {
            prop: 'type',
            label: '停车场类型',
            type: "slot",
            slotName: "type"
        },
        {
            label: "禁启用",
            prop: "status",
            type: "slot",
            slotName: "status"
        }
    ];
}