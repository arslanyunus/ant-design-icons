// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BubbleLinearSvg from '@ant-design/icons-svg/lib/asn/BubbleLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BubbleLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BubbleLinear: BubbleLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BubbleLinearSvg}></AntdIcon>;
};

BubbleLinear.displayName = 'BubbleLinear';
BubbleLinear.inheritAttrs = false;
export default BubbleLinear;