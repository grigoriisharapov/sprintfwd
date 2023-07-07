import { FC, ReactNode } from "react";
import style from './UITable.module.css';

const UITableItem: UITableItemI = ({ children, th }) => {
  if (th) return <th className={`${style.column} ${style.thcolumn}`}>{children}</th>

  return <td className={style.column}>{children}</td>
}

const UITableRow: FC<{ children: ReactNode }> = ({ children }) => {
  return <tr>{children}</tr>
}


const UITable: UITableI = ({ children }) => {
  return <table><tbody>{children}</tbody></table>
}

UITable.Row = UITableRow
UITable.Item = UITableItem

// interfaces

type UITableItemI = FC<{ children: ReactNode, th?: boolean }>

type UITableRowI = FC<{ children: ReactNode }>

type UITableI = FC<{ children: ReactNode }> & {
  Row: UITableRowI
  Item: UITableItemI
}


export default UITable;
