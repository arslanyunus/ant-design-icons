// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowLeft1BrokenSvg from '@ant-design/icons-svg/lib/asn/ArrowLeft1Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowLeft1BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowLeft1Broken: ArrowLeft1BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowLeft1BrokenSvg}></AntdIcon>;
};

ArrowLeft1Broken.displayName = 'ArrowLeft1Broken';
ArrowLeft1Broken.inheritAttrs = false;
export default ArrowLeft1Broken;