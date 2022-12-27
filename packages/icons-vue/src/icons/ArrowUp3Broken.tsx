// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowUp3BrokenSvg from '@ant-design/icons-svg/lib/asn/ArrowUp3Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowUp3BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowUp3Broken: ArrowUp3BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowUp3BrokenSvg}></AntdIcon>;
};

ArrowUp3Broken.displayName = 'ArrowUp3Broken';
ArrowUp3Broken.inheritAttrs = false;
export default ArrowUp3Broken;