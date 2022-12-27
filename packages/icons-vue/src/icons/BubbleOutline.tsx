// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BubbleOutlineSvg from '@ant-design/icons-svg/lib/asn/BubbleOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BubbleOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BubbleOutline: BubbleOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BubbleOutlineSvg}></AntdIcon>;
};

BubbleOutline.displayName = 'BubbleOutline';
BubbleOutline.inheritAttrs = false;
export default BubbleOutline;