// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Money2BrokenSvg from '@ant-design/icons-svg/lib/asn/Money2Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Money2BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Money2Broken: Money2BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Money2BrokenSvg}></AntdIcon>;
};

Money2Broken.displayName = 'Money2Broken';
Money2Broken.inheritAttrs = false;
export default Money2Broken;