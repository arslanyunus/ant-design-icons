// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DataBrokenSvg from '@ant-design/icons-svg/lib/asn/DataBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DataBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DataBroken: DataBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DataBrokenSvg}></AntdIcon>;
};

DataBroken.displayName = 'DataBroken';
DataBroken.inheritAttrs = false;
export default DataBroken;