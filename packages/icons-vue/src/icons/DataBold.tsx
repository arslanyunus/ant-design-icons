// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DataBoldSvg from '@ant-design/icons-svg/lib/asn/DataBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DataBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DataBold: DataBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DataBoldSvg}></AntdIcon>;
};

DataBold.displayName = 'DataBold';
DataBold.inheritAttrs = false;
export default DataBold;