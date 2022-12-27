// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BlendBrokenSvg from '@ant-design/icons-svg/lib/asn/BlendBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BlendBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BlendBroken: BlendBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BlendBrokenSvg}></AntdIcon>;
};

BlendBroken.displayName = 'BlendBroken';
BlendBroken.inheritAttrs = false;
export default BlendBroken;