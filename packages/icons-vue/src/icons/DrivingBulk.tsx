// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DrivingBulkSvg from '@ant-design/icons-svg/lib/asn/DrivingBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DrivingBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DrivingBulk: DrivingBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DrivingBulkSvg}></AntdIcon>;
};

DrivingBulk.displayName = 'DrivingBulk';
DrivingBulk.inheritAttrs = false;
export default DrivingBulk;