// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ClockBulkSvg from '@ant-design/icons-svg/lib/asn/ClockBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ClockBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ClockBulk: ClockBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ClockBulkSvg}></AntdIcon>;
};

ClockBulk.displayName = 'ClockBulk';
ClockBulk.inheritAttrs = false;
export default ClockBulk;