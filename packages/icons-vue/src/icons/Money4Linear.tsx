// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Money4LinearSvg from '@ant-design/icons-svg/lib/asn/Money4Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Money4LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Money4Linear: Money4LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Money4LinearSvg}></AntdIcon>;
};

Money4Linear.displayName = 'Money4Linear';
Money4Linear.inheritAttrs = false;
export default Money4Linear;