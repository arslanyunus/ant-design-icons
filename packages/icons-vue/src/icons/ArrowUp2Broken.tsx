// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowUp2BrokenSvg from '@ant-design/icons-svg/lib/asn/ArrowUp2Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowUp2BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowUp2Broken: ArrowUp2BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowUp2BrokenSvg}></AntdIcon>;
};

ArrowUp2Broken.displayName = 'ArrowUp2Broken';
ArrowUp2Broken.inheritAttrs = false;
export default ArrowUp2Broken;