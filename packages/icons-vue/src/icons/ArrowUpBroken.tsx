// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowUpBrokenSvg from '@ant-design/icons-svg/lib/asn/ArrowUpBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowUpBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowUpBroken: ArrowUpBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowUpBrokenSvg}></AntdIcon>;
};

ArrowUpBroken.displayName = 'ArrowUpBroken';
ArrowUpBroken.inheritAttrs = false;
export default ArrowUpBroken;