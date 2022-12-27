// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DollarCircleBulkSvg from '@ant-design/icons-svg/lib/asn/DollarCircleBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DollarCircleBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DollarCircleBulk: DollarCircleBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DollarCircleBulkSvg}></AntdIcon>;
};

DollarCircleBulk.displayName = 'DollarCircleBulk';
DollarCircleBulk.inheritAttrs = false;
export default DollarCircleBulk;