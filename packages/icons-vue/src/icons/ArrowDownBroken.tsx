// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowDownBrokenSvg from '@ant-design/icons-svg/lib/asn/ArrowDownBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowDownBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowDownBroken: ArrowDownBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowDownBrokenSvg}></AntdIcon>;
};

ArrowDownBroken.displayName = 'ArrowDownBroken';
ArrowDownBroken.inheritAttrs = false;
export default ArrowDownBroken;