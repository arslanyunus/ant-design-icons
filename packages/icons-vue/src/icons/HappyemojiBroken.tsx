// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HappyemojiBrokenSvg from '@ant-design/icons-svg/lib/asn/HappyemojiBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HappyemojiBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HappyemojiBroken: HappyemojiBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HappyemojiBrokenSvg}></AntdIcon>;
};

HappyemojiBroken.displayName = 'HappyemojiBroken';
HappyemojiBroken.inheritAttrs = false;
export default HappyemojiBroken;