// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BubbleBrokenSvg from '@ant-design/icons-svg/lib/asn/BubbleBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BubbleBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BubbleBroken: BubbleBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BubbleBrokenSvg}></AntdIcon>;
};

BubbleBroken.displayName = 'BubbleBroken';
BubbleBroken.inheritAttrs = false;
export default BubbleBroken;