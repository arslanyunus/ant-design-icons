// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BlurBrokenSvg from '@ant-design/icons-svg/lib/asn/BlurBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BlurBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BlurBroken: BlurBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BlurBrokenSvg}></AntdIcon>;
};

BlurBroken.displayName = 'BlurBroken';
BlurBroken.inheritAttrs = false;
export default BlurBroken;