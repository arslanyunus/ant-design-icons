// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BagTimerBulkSvg from '@ant-design/icons-svg/lib/asn/BagTimerBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BagTimerBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BagTimerBulk: BagTimerBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BagTimerBulkSvg}></AntdIcon>;
};

BagTimerBulk.displayName = 'BagTimerBulk';
BagTimerBulk.inheritAttrs = false;
export default BagTimerBulk;