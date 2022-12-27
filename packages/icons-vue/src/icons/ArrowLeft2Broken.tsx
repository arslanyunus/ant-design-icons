// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowLeft2BrokenSvg from '@ant-design/icons-svg/lib/asn/ArrowLeft2Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowLeft2BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowLeft2Broken: ArrowLeft2BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowLeft2BrokenSvg}></AntdIcon>;
};

ArrowLeft2Broken.displayName = 'ArrowLeft2Broken';
ArrowLeft2Broken.inheritAttrs = false;
export default ArrowLeft2Broken;