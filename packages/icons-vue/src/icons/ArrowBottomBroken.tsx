// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowBottomBrokenSvg from '@ant-design/icons-svg/lib/asn/ArrowBottomBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowBottomBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowBottomBroken: ArrowBottomBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowBottomBrokenSvg}></AntdIcon>;
};

ArrowBottomBroken.displayName = 'ArrowBottomBroken';
ArrowBottomBroken.inheritAttrs = false;
export default ArrowBottomBroken;