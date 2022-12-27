// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowBrokenSvg from '@ant-design/icons-svg/lib/asn/ArrowBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowBroken: ArrowBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowBrokenSvg}></AntdIcon>;
};

ArrowBroken.displayName = 'ArrowBroken';
ArrowBroken.inheritAttrs = false;
export default ArrowBroken;