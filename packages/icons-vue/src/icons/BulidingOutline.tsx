// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BulidingOutlineSvg from '@ant-design/icons-svg/lib/asn/BulidingOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BulidingOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BulidingOutline: BulidingOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BulidingOutlineSvg}></AntdIcon>;
};

BulidingOutline.displayName = 'BulidingOutline';
BulidingOutline.inheritAttrs = false;
export default BulidingOutline;