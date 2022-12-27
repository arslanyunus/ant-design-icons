// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Money3LinearSvg from '@ant-design/icons-svg/lib/asn/Money3Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Money3LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Money3Linear: Money3LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Money3LinearSvg}></AntdIcon>;
};

Money3Linear.displayName = 'Money3Linear';
Money3Linear.inheritAttrs = false;
export default Money3Linear;