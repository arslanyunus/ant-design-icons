// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Money3BrokenSvg from '@ant-design/icons-svg/lib/asn/Money3Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Money3BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Money3Broken: Money3BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Money3BrokenSvg}></AntdIcon>;
};

Money3Broken.displayName = 'Money3Broken';
Money3Broken.inheritAttrs = false;
export default Money3Broken;