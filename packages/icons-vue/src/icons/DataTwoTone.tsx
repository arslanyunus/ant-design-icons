// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DataTwoToneSvg from '@ant-design/icons-svg/lib/asn/DataTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DataTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DataTwoTone: DataTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DataTwoToneSvg}></AntdIcon>;
};

DataTwoTone.displayName = 'DataTwoTone';
DataTwoTone.inheritAttrs = false;
export default DataTwoTone;