// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Money2BoldSvg from '@ant-design/icons-svg/lib/asn/Money2Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Money2BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Money2Bold: Money2BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Money2BoldSvg}></AntdIcon>;
};

Money2Bold.displayName = 'Money2Bold';
Money2Bold.inheritAttrs = false;
export default Money2Bold;