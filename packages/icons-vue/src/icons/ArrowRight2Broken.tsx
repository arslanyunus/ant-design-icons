// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowRight2BrokenSvg from '@ant-design/icons-svg/lib/asn/ArrowRight2Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowRight2BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowRight2Broken: ArrowRight2BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowRight2BrokenSvg}></AntdIcon>;
};

ArrowRight2Broken.displayName = 'ArrowRight2Broken';
ArrowRight2Broken.inheritAttrs = false;
export default ArrowRight2Broken;