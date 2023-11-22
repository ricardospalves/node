export type UserCardItemProps = {
  term: string
  description: string
}

export const UserCardItem = ({ description, term }: UserCardItemProps) => {
  return (
    <>
      <dt className="p-2 col-span-2 md:col-span-1 font-bold first:border-t-0 border-r">
        {term}
      </dt>
      <dd className="p-2 col-span-6 md:col-span-9 [&:nth-child(2)]:!border-t-0">
        {description}
      </dd>
    </>
  )
}
