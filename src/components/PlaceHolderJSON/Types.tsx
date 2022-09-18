export type PostTypes = {
  id: string
  userId: string
  title: string
  body: string
}
export type CommentTypes = {
  postId: string
  id: string
  name: string
  email: string
  body: string
}
export type UserTypes = {
  id: string
  name: string
  username: string
  email: string
  address: AddressTypes
  phone: string
  website: string
  company: CompanyTypes
}

type AddressTypes = {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: {
    lat: string
    lng: string
  }
}

type CompanyTypes = {
  name: string
  catchPhrase: string
  bs: string
}
