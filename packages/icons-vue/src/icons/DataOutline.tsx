// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DataOutlineSvg from '@ant-design/icons-svg/lib/asn/DataOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DataOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DataOutline: DataOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DataOutlineSvg}></AntdIcon>;
};

DataOutline.displayName = 'DataOutline';
DataOutline.inheritAttrs = false;
export default DataOutline;