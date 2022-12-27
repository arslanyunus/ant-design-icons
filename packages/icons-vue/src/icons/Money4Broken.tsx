// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Money4BrokenSvg from '@ant-design/icons-svg/lib/asn/Money4Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Money4BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Money4Broken: Money4BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Money4BrokenSvg}></AntdIcon>;
};

Money4Broken.displayName = 'Money4Broken';
Money4Broken.inheritAttrs = false;
export default Money4Broken;