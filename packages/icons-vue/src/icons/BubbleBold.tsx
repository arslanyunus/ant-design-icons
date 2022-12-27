// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BubbleBoldSvg from '@ant-design/icons-svg/lib/asn/BubbleBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BubbleBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BubbleBold: BubbleBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BubbleBoldSvg}></AntdIcon>;
};

BubbleBold.displayName = 'BubbleBold';
BubbleBold.inheritAttrs = false;
export default BubbleBold;