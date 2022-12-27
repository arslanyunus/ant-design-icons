// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArrowUp1BrokenSvg from '@ant-design/icons-svg/lib/asn/ArrowUp1Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArrowUp1BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArrowUp1Broken: ArrowUp1BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArrowUp1BrokenSvg}></AntdIcon>;
};

ArrowUp1Broken.displayName = 'ArrowUp1Broken';
ArrowUp1Broken.inheritAttrs = false;
export default ArrowUp1Broken;