// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowRight1BrokenSvg from '@ant-design/icons-svg/lib/asn/ArrowRight1Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowRight1BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowRight1Broken: ArrowRight1BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowRight1BrokenSvg}></AntdIcon>;
};

ArrowRight1Broken.displayName = 'ArrowRight1Broken';
ArrowRight1Broken.inheritAttrs = false;
export default ArrowRight1Broken;