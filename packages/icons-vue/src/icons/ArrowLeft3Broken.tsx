// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowLeft3BrokenSvg from '@ant-design/icons-svg/lib/asn/ArrowLeft3Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowLeft3BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowLeft3Broken: ArrowLeft3BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowLeft3BrokenSvg}></AntdIcon>;
};

ArrowLeft3Broken.displayName = 'ArrowLeft3Broken';
ArrowLeft3Broken.inheritAttrs = false;
export default ArrowLeft3Broken;