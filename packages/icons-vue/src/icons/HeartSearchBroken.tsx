// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HeartSearchBrokenSvg from '@ant-design/icons-svg/lib/asn/HeartSearchBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HeartSearchBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HeartSearchBroken: HeartSearchBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HeartSearchBrokenSvg}></AntdIcon>;
};

HeartSearchBroken.displayName = 'HeartSearchBroken';
HeartSearchBroken.inheritAttrs = false;
export default HeartSearchBroken;