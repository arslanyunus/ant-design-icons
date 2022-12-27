// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import NextBrokenSvg from '@ant-design/icons-svg/lib/asn/NextBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface NextBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const NextBroken: NextBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NextBrokenSvg}></AntdIcon>;
};

NextBroken.displayName = 'NextBroken';
NextBroken.inheritAttrs = false;
export default NextBroken;