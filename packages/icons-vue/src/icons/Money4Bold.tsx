// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Money4BoldSvg from '@ant-design/icons-svg/lib/asn/Money4Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Money4BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Money4Bold: Money4BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Money4BoldSvg}></AntdIcon>;
};

Money4Bold.displayName = 'Money4Bold';
Money4Bold.inheritAttrs = false;
export default Money4Bold;