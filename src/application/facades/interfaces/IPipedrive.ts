export interface ICreatorIUserId {
    id: number
    name: string
    email: string
    has_pic: number
    pic_hash?: string
    active_flag: boolean
    value: number
}

export interface IUserId {
    id: number
    name: string
    email: string
    has_pic: number
    pic_hash?: string
    active_flag: boolean
    value: number
}

export interface IPhone {
    label: string
    value: string
    primary: boolean
}

export interface PersonId {
    active_flag: boolean
    name: string
    email: IEmail[]
    phone: IPhone[]
    owner_id: number
    value: number
}

export interface IOrg {
    name: string
    people_count: number
    owner_id: number
    address?: string
    active_flag: boolean
    cc_email: string
    value: number
}

export interface IData {
    id: number
    creator_IUser_id: ICreatorIUserId
    IUser_id: IUserId
    person_id: PersonId
    org_id: IOrgId
    stage_id: number
    title: string
    value: number
    currency: string
    add_time: string
    update_time: string
    stage_change_time?: string
    active: boolean
    deleted: boolean
    status: string
    probability?: string
    next_activity_date?: string
    next_activity_time?: string
    next_activity_id?: string
    last_activity_id?: string
    last_activity_date?: string
    lost_reason?: string
    visible_to: string
    close_time?: string
    pipeline_id: number
    won_time?: string
    first_won_time?: string
    lost_time?: string
    products_count: number
    files_count: number
    notes_count: number
    followers_count: number
    email_messages_count: number
    activities_count: number
    done_activities_count: number
    undone_activities_count: number
    participants_count: number
    expected_close_date: string
    last_incoming_mail_time?: string
    last_outgoing_mail_time?: string
    label?: string
    renewal_type: string
    stage_order_nr: number
    person_name: string
    org_name: string
    next_activity_subject?: string
    next_activity_type?: string
    next_activity_duration?: string
    next_activity_note?: string
    group_id?: string
    group_name?: string
    formatted_value: string
    weighted_value: number
    formatted_weighted_value: string
    weighted_value_currency: string
    rotten_time?: Date
    owner_name: string
    cc_email: string
    org_hidden: boolean
    person_hidden: boolean
}

export interface Pagination {
    start: number
    limit: number
    more_items_in_collection: boolean
}

export interface AdditionalData {
    pagination: Pagination
}

export interface IUser {
    [key: string]: {
        id: number
        name: string
        email: string
        has_pic: number
        pic_hash?: string
        active_flag: boolean
    }
}

export interface IOrgId {
    id: number
    name: string
    people_count: number
    owner_id: number
    address?: string
    active_flag: boolean
    cc_email: string
}

export interface Organization {
    [key: string]: IOrgId
}

export interface IEmail {
    label: string
    value: string
    primary: boolean
}

export interface IPhone {
    label: string
    value: string
    primary: boolean
}

export interface IPerson {
    [key: string]: number
}

export interface IRelatedObjects {
    IUser: IUser
    organization: Organization
    person: IPerson
}

export interface IDeal {
    success: boolean
    data: IData[]
    additional_data: AdditionalData
    related_objects: IRelatedObjects
}


