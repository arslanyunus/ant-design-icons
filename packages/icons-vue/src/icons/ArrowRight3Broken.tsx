// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowRight3BrokenSvg from '@ant-design/icons-svg/lib/asn/ArrowRight3Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowRight3BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowRight3Broken: ArrowRight3BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowRight3BrokenSvg}></AntdIcon>;
};

ArrowRight3Broken.displayName = 'ArrowRight3Broken';
ArrowRight3Broken.inheritAttrs = false;
export default ArrowRight3Broken;