// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowDown2BrokenSvg from '@ant-design/icons-svg/lib/asn/ArrowDown2Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowDown2BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowDown2Broken: ArrowDown2BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowDown2BrokenSvg}></AntdIcon>;
};

ArrowDown2Broken.displayName = 'ArrowDown2Broken';
ArrowDown2Broken.inheritAttrs = false;
export default ArrowDown2Broken;