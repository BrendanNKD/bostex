import { col_items } from './links'

interface IProps {
  title: string
  links: Array<col_items>
}

const Col = ({ title, links }: IProps) => {
  return (
    <>
      <div>
        <h2 className="mb-6 text-sm font-semibold uppercase dark:text-white text-white">
          {title}
        </h2>
        <ul className="text-gray-500 dark:text-gray-400 font-medium">
          {links.map((item: col_items, index: number) => (
            <li key={index} className="mb-4">
              <a href={item.url} className="hover:underline" key={index}>
                <div className="flex flex-row">
                  {item.icons && <div className="pr-3">{item.icons}</div>}
                  <span className="inline-block align-middle">
                    {item.title}
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Col
