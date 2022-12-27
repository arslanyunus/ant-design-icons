// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DataBulkSvg from '@ant-design/icons-svg/lib/asn/DataBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DataBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DataBulk: DataBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DataBulkSvg}></AntdIcon>;
};

DataBulk.displayName = 'DataBulk';
DataBulk.inheritAttrs = false;
export default DataBulk;