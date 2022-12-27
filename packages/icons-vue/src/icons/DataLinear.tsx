// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DataLinearSvg from '@ant-design/icons-svg/lib/asn/DataLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DataLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DataLinear: DataLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DataLinearSvg}></AntdIcon>;
};

DataLinear.displayName = 'DataLinear';
DataLinear.inheritAttrs = false;
export default DataLinear;