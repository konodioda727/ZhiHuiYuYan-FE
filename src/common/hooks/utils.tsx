export function geneGridLinks(name: string) {
  return <div className="bg-lightBlue rounded-lg shadow text-blue-500 p-4 flex items-center justify-center">{name} </div>
}
export const additionalElem = <div className='w-96 my-6 grid grid-cols-3 grid-rows-2 gap-4'>
  {geneGridLinks('科研助手')}
  {geneGridLinks('科研助手')}
  {geneGridLinks('科研助手')}
  {geneGridLinks('科研助手')}
  {geneGridLinks('科研助手')}
  {geneGridLinks('科研助手')}
</div>