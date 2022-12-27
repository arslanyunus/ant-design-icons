// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowDown1BrokenSvg from '@ant-design/icons-svg/lib/asn/ArrowDown1Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowDown1BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowDown1Broken: ArrowDown1BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowDown1BrokenSvg}></AntdIcon>;
};

ArrowDown1Broken.displayName = 'ArrowDown1Broken';
ArrowDown1Broken.inheritAttrs = false;
export default ArrowDown1Broken;