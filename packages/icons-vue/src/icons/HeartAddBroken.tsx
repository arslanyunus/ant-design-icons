// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HeartAddBrokenSvg from '@ant-design/icons-svg/lib/asn/HeartAddBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HeartAddBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HeartAddBroken: HeartAddBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HeartAddBrokenSvg}></AntdIcon>;
};

HeartAddBroken.displayName = 'HeartAddBroken';
HeartAddBroken.inheritAttrs = false;
export default HeartAddBroken;