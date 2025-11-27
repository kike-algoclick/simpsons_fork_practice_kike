interface ParamsCharacter {
    params : Promise<{
        idcharacter : string
    }>
}


export default async function IdCharacter({params}: ParamsCharacter) {
    const {idcharacter} = await params;
  return (
    <>
    <div className="flex justify-center">{idcharacter}</div>
    </>
  )
}
