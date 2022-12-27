// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Money2LinearSvg from '@ant-design/icons-svg/lib/asn/Money2Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Money2LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Money2Linear: Money2LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Money2LinearSvg}></AntdIcon>;
};

Money2Linear.displayName = 'Money2Linear';
Money2Linear.inheritAttrs = false;
export default Money2Linear;