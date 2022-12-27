// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BrifecaseTimerBulkSvg from '@ant-design/icons-svg/lib/asn/BrifecaseTimerBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BrifecaseTimerBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BrifecaseTimerBulk: BrifecaseTimerBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BrifecaseTimerBulkSvg}></AntdIcon>;
};

BrifecaseTimerBulk.displayName = 'BrifecaseTimerBulk';
BrifecaseTimerBulk.inheritAttrs = false;
export default BrifecaseTimerBulk;